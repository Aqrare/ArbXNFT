import { ChakraProvider } from '@chakra-ui/react'
import {
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth'
import '@rainbow-me/rainbowkit/styles.css'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [
    // chain.mainnet,
    // chain.arbitrum,
    chain.arbitrumGoerli,
    chain.goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [
          chain.kovan,
          chain.rinkeby,
          chain.ropsten,
          chain.localhost,
        ]
      : []),
  ],
  [
    alchemyProvider({ apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }),
    publicProvider(),
  ]
)

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  chains,
})

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
}

const connectors = connectorsForWallets(wallets)

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Sign in to the RainbowKit + SIWE example app',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider refetchInterval={0} session={session}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
          <RainbowKitProvider
            appInfo={demoAppInfo}
            chains={chains}
            theme={darkTheme({
              borderRadius: 'small',
            })}
          >
            <ChakraProvider>
              <Component {...pageProps} />
            </ChakraProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </WagmiConfig>
    </SessionProvider>
  )
}
