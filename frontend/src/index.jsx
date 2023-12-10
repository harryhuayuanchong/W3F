import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js';
import { Provider } from 'react-redux';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
// import { getDefaultProvider } from 'ethers';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
// import { InjectedConnector } from 'wagmi/connectors/injected';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
// Alchemy API：Provider
// https://blog.csdn.net/object_oriented/article/details/133633832?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-133633832-blog-122616798.235%5Ev39%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-133633832-blog-122616798.235%5Ev39%5Epc_relevant_default_base&utm_relevant_index=1
// const alchemyApiKey = import.meta.env.VITE_ALCHEMY_MAINNET_API_KEY; // use import.meta.env, instead of process.env

// console.log(import.meta.env)
// Configure Chain & Provider
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_MAINNET_API_KEY }),
    publicProvider()
  ]
);

// Connectors for Wallet
const { connectors } = getDefaultWallets({
  appName: 'W3D',
  projectId: 'aa37a04263b8fe7923ff3b5edadf130d', // https://walletconnect.com/
  chains
});

// Create Wagmi Config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

// Configure Chakra UI Provider
const theme = extendTheme({ initialColorMode: "dark", useSystemColorMode: false });

// Configure Rainbowkit Provider
// const appInfo = {
//   appName: "W3D",
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig} >
      <ChakraProvider resetCSS={false} theme={theme}>
        <RainbowKitProvider chains={chains}>
          <Provider store={store}>
            <App />
          </Provider>
        </RainbowKitProvider>
      </ChakraProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
