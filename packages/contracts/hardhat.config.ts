import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.11",
      },
      {
        version: "0.8.17",
      },
    ],
  },
  networks: {
    arbitrumGoerli: {
      chainId: 421613,
      url: `https://goerli-rollup.arbitrum.io/rpc/`,
    },
  },
  etherscan: {
    apiKey: {
      goerli: "Z1TKKCFKK9GTVJ3FZP3IA4K8SINX16NCJ3",
      arbitrumGoerli: "NV6614SZM1P3EB3YKUTRNWWV6V81Y17EA7",
    },
  },
};

export default config;
