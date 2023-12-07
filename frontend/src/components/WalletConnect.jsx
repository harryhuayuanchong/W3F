import { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function WalletConnect() {
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const [isConnecting, setIsConnecting] = useState(false);  // 新增狀態來追蹤連接請求

  const handleConnect = async (connector) => {
    if (isConnecting) {
      console.log("Please wait, already processing a connect request.");
      return;
    }
  
    setIsConnecting(true);
    try {
      await connect({ connector });
    } catch (err) {
      console.error("Error connecting to wallet:", err);
    } finally {
      setIsConnecting(false);
    }
  };  

  return (
    <div>
      {isConnected ? (
        <>
          <div>Address: {address}</div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
        connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => handleConnect(connector)}
            disabled={isConnecting}
          >
            Connect with {connector.name}
          </button>
        ))
      )}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
}

export default WalletConnect;
