import { useConnect, useAccount } from 'wagmi';

const WalletConnect = () => {
    const { connect, connectors, isConnected } = useConnect();
    const { data: accountData } = useAccount;

    return (
        <div>
          {isConnected ? (
            <div>
              <p>Connected as {accountData?.address}</p>
            </div>
          ) : (
            connectors.map((connector) => (
              <button key={connector.id} onClick={() => connect({connector})}>
                Connect with {connector.name}
              </button>
            ))
          )}
        </div>
      );
};

export default WalletConnect;