import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function GasTracker() {
    const [gasPrice, setGasPrice] = useState(null);

    useEffect(() => {
        // 创建一个新的Ethers提供者实例，这里使用Infura
        const provider = new ethers.JsonRpcProvider('homestead', 'https://eth-mainnet.g.alchemy.com/v2/tMFJfpJ3YL3g1qb-mSajEMtWIna2fJqA');

        async function fetchGasPrice() {
            try {
                // 获取最新区块的信息
                const latestBlock = await provider.getBlock('latest');
                // 从最新区块获取基础Gas价格并转换为Gwei
                if (latestBlock && latestBlock.baseFeePerGas) {
                    const baseFee = ethers.utils.formatEther(latestBlock.baseFeePerGas, 'gwei');
                    setGasPrice(baseFee);
                } else {
                    console.log('Fetch error~~~~~~~~~~~~~!!!!!')
                }
            } catch (error) {
                console.error(`Error fetching gas price: ${error}`);
            }
        }

        fetchGasPrice();
    }, []);

    return <div>Current Base Gas Price: {gasPrice} Gwei</div>;
}

export default GasTracker;
