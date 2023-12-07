import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store.js';
import { Provider } from 'react-redux';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { getDefaultProvider } from 'ethers';
import { mainnet, sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected'

// Alchemy API：Provider
// https://blog.csdn.net/object_oriented/article/details/133633832?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-133633832-blog-122616798.235%5Ev39%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-133633832-blog-122616798.235%5Ev39%5Epc_relevant_default_base&utm_relevant_index=1
const alchemyApiKey = import.meta.env.ALCHEMY_MAINNET_API_KEY; // use import.meta.env, instead of process.env

// Configure Chain & Provider
const { chains, provider } = configureChains(
  [mainnet, sepolia],
  [
    alchemyProvider({ apiKey: alchemyApiKey }),
    publicProvider()
  ]
)

// Create Wagmi Config
const config = createConfig({
  autoConnect: true,
  provider,
  connectors: [new InjectedConnector({ chains })],
  WebSocketProvider: getDefaultProvider(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config} >
      <Provider store={store}>
        <App />
      </Provider>
    </WagmiConfig>
  </React.StrictMode>,
)
