import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider, darkTheme, midnightTheme } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
// import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from 'wagmi/providers/public'

const xdcApothem = {
    id: 51,
    name: 'Apothem-Network (TestNet)',
    network: 'XDC Apothem Network (TestNet)',
    nativeCurrency: {
        decimals: 18,
        name: 'XDC-Network',
        symbol: 'XDC'
    },
    rpcUrls: {
        default: {
            http: ['https://erpc.apothem.network']
        }
    },
    blockExplorers: {
        default: {
            name: 'Apothem Explorer',
            url: 'https://explorer.apothem.network/'
        }
    },
    testnet: true
}

const { provider, chains } = configureChains(
    [xdcApothem],
    [
        // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
)

const { connectors } = getDefaultWallets({
    appName: 'Sustain',
    chains
})

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

const myTheme = merge(midnightTheme(), {
    colors: {
        accentColor: '#18181b',
        accentColorForeground: '#fff'
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={myTheme}>
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
)
