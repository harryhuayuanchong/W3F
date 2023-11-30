// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract GasPriceContract {
    AggregatorV3Interface internal gasPriceFeed;

    constructor() {
        // 初始化 Chainlink Gas Price Feed
        gasPriceFeed = AggregatorV3Interface(
            /* Chainlink Gas Price Feed Address */
            0x169e633a2d1e6c10dd91238ba11c4a708dfef37c
        );
    }

    function getLatestGasPrice() public view returns (int) {
        (
            , 
            int price,
            ,
            ,
            
        ) = gasPriceFeed.latestRoundData();
        return price;
    }
}
