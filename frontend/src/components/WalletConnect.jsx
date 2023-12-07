import { useAccount, useConnect, useDisconnect } from 'wagmi';

function WalletConnect() {
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <>
          <div>Address: {address}</div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      ) : (
        connectors.map((connector) => (
          <button key={connector.id} onClick={() => connect({ connector })}>
            Connect with {connector.name}
          </button>
        ))
      )}
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
}

export default WalletConnect;
