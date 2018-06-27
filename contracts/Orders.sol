pragma solidity ^0.4.11;

contract Orders {
    // The next order ID.
    uint256 public orderIndex = 0;

    // Log new orders
    event NewOrder(
        uint256 indexed orderID,
        address market,
        // bytes32 nonceHash,
        uint256 DINs,
        uint256 amount
    );

    function createOrder(
        // bytes32 nonceHash,
        uint256 DINs,
        uint256 amount
    ) 
        public 
        returns (uint256 orderID) 
    {

        // Increment the order index.
        orderIndex++;

        NewOrder(
            orderIndex,
            msg.sender,
            // nonceHash,
            DINs,
            amount
        );
        
        return orderIndex;
    }
}