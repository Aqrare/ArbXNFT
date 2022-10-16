import { Box, Button, Flex, Heading, Input, Link, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/Layout'
import {
  useAccount,
  useNetwork,
  useSigner,
} from 'wagmi'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { BigNumber, providers, Wallet } from 'ethers'
import {
  L2TransactionReceipt,
  L2ToL1MessageStatus,
  addCustomNetwork,
} from '@arbitrum/sdk'

const Claim: NextPage = () => {
  const { data: signer } = useSigner()
  const { chain} = useNetwork()
  const { address } = useAccount()
  const [nftContractAddress, setNFTContractAddress] = useState('')
  const [txnHash, setTxnHash] = useState('')
  const [price, setPrice] = useState('')
  const [isReady, setIsReady] = useState(false)
  const [isExecuted, setIsExecuted] = useState(false)
  const [isNotFound, setIsNotFound] = useState(false)
  const [l2ToL1Message, setL2ToL1Message] = useState<any>()
  const l1Provider = new providers.JsonRpcProvider(process.env.L1RPC)
  // const l2Provider = new providers.JsonRpcProvider(process.env.L2RPC)
  const l2Provider = new providers.JsonRpcProvider(
    'https://goerli-rollup.arbitrum.io/rpc'
  )

  const handleChangeTxnHash = (e: any) => {
    const inputValue = e.target.value
    setTxnHash(inputValue)
    setIsExecuted(false)
    setIsNotFound(false)
  }

  const search = async () => {
    if (!signer) return
    if (!txnHash)
    throw new Error(
      'Provide a transaction hash of an L2 transaction that sends an L2 to L1 message'
      )
      if (!txnHash.startsWith('0x') || txnHash.trim().length != 66)
      throw new Error(`Hmm, ${txnHash} doesn't look like a txn hash...`)
      
    const receipt = await l2Provider.getTransactionReceipt(txnHash)
    const l2Receipt = new L2TransactionReceipt(receipt)
      
    const messages = await l2Receipt.getL2ToL1Messages(signer)
    const l2ToL1Msg = messages[0]

    const { ethereum } = window
    if (ethereum && chain?.id != 5) {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexValue(5) }],
      })
      return
    }
      
    if (Number(await l2ToL1Msg.status(l2Provider)) == L2ToL1MessageStatus.EXECUTED) {
      console.log(`Message already executed! Nothing else to do here`)
      setIsExecuted(true);
      // process.exit(1)
    }

    const timeToWaitMs = 1000 * 60
    console.log(
      "Waiting for the outbox entry to be created. This only happens when the L2 block is confirmed on L1, ~1 week after it's creation."
    )
    await l2ToL1Msg.waitUntilReadyToExecute(l2Provider, timeToWaitMs).catch((e) => {
      console.log(e);
      setIsNotFound(true);
    })
    console.log('Outbox entry exists! Trying to execute now')
    setL2ToL1Message(l2ToL1Msg)
    setIsReady(true);
  }

  const execute = async () => {
    const res = await l2ToL1Message.execute(l2Provider)
    const rec = await res.wait()
    console.log('Done! Your transaction is executed', rec)
  }


  return (
    <Layout>
      <Flex justifyContent="center" mb="2">
        <Box mt="10" w="50%" justifyContent={'center'} textAlign={'center'}>
          <Heading as="h1" mb="8">
            Claim NFTs
          </Heading>
          <Input placeholder="Tx Hash" onChange={handleChangeTxnHash}></Input>
          {isExecuted && <Text>This transaction hash is already executed</Text>}
          {isNotFound && <Text>The messages has not arrived to L1</Text>}
          <Button mt="4" disabled={isExecuted || isNotFound} onClick={search}>
            Search Tx Hash
          </Button>
        </Box>
      </Flex>
      {isReady && (
        <Flex justifyContent="center" mb="2">
          <Box
            mt="10"
            w="50%"
            justifyContent={'center'}
            textAlign={'center'}
            borderWidth={1}
            p={10}
          >
            <Text>You can claim NFTs</Text>
            <Button mt="4" onClick={execute}>
              Execute
            </Button>
          </Box>
        </Flex>
      )}
    </Layout>
  )
}

export default Claim
