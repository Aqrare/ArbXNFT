import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useSigner, useNetwork, useAccount } from 'wagmi'
import { Layout } from '../components/layout/Layout'
import { ethers, providers, BigNumber } from 'ethers'
import { ArbXNFTL1ABI } from '../lib/ArbXNFTL1'
import { ArbXNFTL2ABI } from '../lib/ArbXNFTL2'
import { hexDataLength } from '@ethersproject/bytes'
import { L1ToL2MessageGasEstimator } from '@arbitrum/sdk/dist/lib/message/L1ToL2MessageGasEstimator'
import { goerliContractAddress } from '../lib/address'
import { goerliArbitrumContract } from '../lib/address'

const Buy: NextPage = () => {
  const { data: signer } = useSigner()
  const { chain, chains } = useNetwork()
  const { address } = useAccount()
  const [nftContractAddress, setNFTContractAddress] = useState('')
  const [tokenId, setTokenId] = useState('')
  const [tokenUri, setTokenUri] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [txHash, setTxHash] = useState('')
  const [price, setPrice] = useState(0)
  const l1Provider = new providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/3aeb14276844467fa4d80f03d505a7ab'
  )
  const l2Provider = new providers.JsonRpcProvider(
    'https://goerli-rollup.arbitrum.io/rpc'
  )
  const handleChangeNFTContractAddress = (e: any) => {
    const inputValue = e.target.value
    setNFTContractAddress(inputValue)
  }
  const handleChangeTokenId = (e: any) => {
    const inputValue = e.target.value
    setTokenId(inputValue)
  }

  const hexToDec = (hex: any) => {
    return parseInt(hex, 16)
  }

  const searchL1 = async () => {
    if (!signer) return
    const contract = new ethers.Contract(
      goerliContractAddress,
      ArbXNFTL1ABI,
      signer
    )
    const price = await contract.getNFTPrice(nftContractAddress, tokenId)
    setPrice(price)
  }
  const searchL2 = async () => {
    if (!signer) return
    const contract = new ethers.Contract(
      goerliArbitrumContract,
      ArbXNFTL2ABI,
      signer
    )
    console.log(nftContractAddress, tokenId)
    const price = await contract.getNFTPrice(nftContractAddress, tokenId)
    const tokenUri = await getTokenURI()
    console.log(tokenUri)
    await getMetadata(tokenUri)

    console.log(price)
    setPrice(hexToDec(price._hex))
  }

  const getTokenURI2 = async () => {
    if (!signer) return
    try {
      const contractABI = [
        'function tokenURI(uint256 _tokenId) external view returns (string memory)',
      ]
      const contract = new ethers.Contract(
        nftContractAddress,
        contractABI,
        signer
      )

      const result = await contract.tokenURI(tokenId)
      setTokenUri(result)
      return result
    } catch (err) {
      throw err
    }
  }

  const getTokenURI = async () => {
    const nftContractABI = [
      'function tokenURI(uint256 _tokenId) external view returns (string memory)',
    ]
    const contract = new ethers.Contract(
      nftContractAddress,
      nftContractABI,
      l1Provider
    )
    const result = await contract.tokenURI(tokenId)
    setTokenUri(result)
    return result
  }

  const getMetadata = async (tokenUrl: string) => {
    await fetch(tokenUrl, {
      mode: 'cors',
    })
      .then((result) => result.json())
      .then((output) => {
        console.log('Output: ', output)
        setName(output.name)
        setDescription(output.description)
        setImage(output.image)
      })
      .catch((err) => console.error(err))
  }

  const buyNFTFromL1ToL2 = async () => {
    if (!signer || !address) return
    const contract = new ethers.Contract(
      goerliContractAddress,
      ArbXNFTL1ABI,
      signer
    )
    const newBuyingBytes = ethers.utils.defaultAbiCoder.encode(
      ['address', 'uint256', 'address'],
      [nftContractAddress, tokenId, address]
    )
    const newBuyingBytesLength = hexDataLength(newBuyingBytes) + 4 // 4 bytes func identifier
    const l1ToL2MessageGasEstimate = new L1ToL2MessageGasEstimator(l2Provider)

    const _submissionPriceWei =
      await l1ToL2MessageGasEstimate.estimateSubmissionFee(
        l1Provider,
        await l1Provider.getGasPrice(),
        newBuyingBytesLength
      )

    console.log(
      `Current retryable base submission price: ${_submissionPriceWei.toString()}`
    )
    const submissionPriceWei = _submissionPriceWei.mul(5)

    const gasPriceBid = await l2Provider.getGasPrice()
    console.log(`L2 gas price: ${gasPriceBid.toString()}`)

    const ABI = [
      'function transferNFT(address nftContractAddress, uint256 tokenId, address to)',
    ]
    const iface = new ethers.utils.Interface(ABI)
    const calldata = iface.encodeFunctionData('transferNFT', [
      nftContractAddress,
      tokenId,
      address,
    ])

    const maxGas =
      await l1ToL2MessageGasEstimate.estimateRetryableTicketGasLimit(
        {
          from: goerliContractAddress,
          to: goerliArbitrumContract,
          l2CallValue: BigNumber.from('0'),
          excessFeeRefundAddress: address,
          callValueRefundAddress: address,
          data: calldata,
        },
        ethers.utils.parseEther('1')
      )

    const callValue = submissionPriceWei.add(gasPriceBid.mul(maxGas))

    console.log(
      `Sending Buying to L2 with ${callValue.toString()} callValue for L2 fees:`
    )

    const setBuyingTx = await contract.buy(
      nftContractAddress,
      tokenId,
      submissionPriceWei,
      maxGas,
      gasPriceBid,
      {
        value: callValue.add(price),
      }
    )
    const setBuyingRec = await setBuyingTx.wait()

    console.log(
      `Buying txn confirmed on L1! 🙌 ${setBuyingRec.transactionHash}`
    )
    setTxHash(setBuyingRec.transactionHash)
  }

  const buyNFTFromL2ToL1 = async () => {
    if (!signer || !address) return
    const contract = new ethers.Contract(
      goerliArbitrumContract,
      ArbXNFTL2ABI,
      signer
    )
    const setBuyingTx = await contract.buy(nftContractAddress, tokenId, {
      value: price,
    })
    const setBuyingRec = await setBuyingTx.wait()

    console.log(
      `Buying txn confirmed on L1! 🙌 ${setBuyingRec.transactionHash}`
    )
  }

  return (
    <Layout>
      <Flex justifyContent="center" mb="2">
        <Box mt="10" w="50%" justifyContent={'center'} textAlign={'center'}>
          <Heading as="h1" mb="8">
            Buy NFT
          </Heading>
          <Input
            placeholder="NFT Contract Address"
            onChange={handleChangeNFTContractAddress}
          ></Input>
          <Input
            mt="4"
            placeholder="Token ID"
            onChange={handleChangeTokenId}
          ></Input>
          <Button onClick={getTokenURI2}></Button>
          {chain?.id == 5 ? (
            <Button mt="4" colorScheme="teal" onClick={searchL1}>
              Search on Goerli
            </Button>
          ) : (
            <Button mt="4" colorScheme="teal" onClick={searchL2}>
              Search on Arbitrum
            </Button>
          )}
        </Box>
      </Flex>
      {price != 0 && (
        <Flex justifyContent="center" mb="2">
          <Box
            mt="10"
            w="50%"
            justifyContent={'center'}
            textAlign={'center'}
            borderWidth={1}
            p={10}
          >
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{image}</Text>
            <Box boxSize="sm">
              <Image src={image} alt={'image'} />
            </Box>
            <Text>{ethers.utils.formatEther(price)} ETH</Text>
            <Button
              mt="4"
              colorScheme="teal"
              onClick={chain?.id == 5 ? buyNFTFromL1ToL2 : buyNFTFromL2ToL1}
            >
              {chain?.id == 5 ? 'Buy Arbitrum NFT' : 'Buy Ethereum NFT'}
            </Button>
          </Box>
        </Flex>
      )}
      {txHash && (
        <>
          <Text>Your Transaction Hash is {txHash}</Text>
          <Text>You can use this to claim NFTs on Ethereum</Text>
        </>
      )}
    </Layout>
  )
}

export default Buy
