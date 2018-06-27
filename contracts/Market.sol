pragma solidity ^0.4.18;

    /**
    * Energy Market
    */

contract Market {
    /**
    * Market
    */
	address public seller;
	address public buyer;

	uint public price;

    uint depositedAmount;

    /**
    * The logs that will be emitted in every step of the contract's life cycle
    */
	event Transaction(address seller, address buyer, uint amount);

    /**
    * The contract constructor
    */
	constructor() public {
		seller = msg.sender;
		price = msg.price;
	}

    /**
    * buyer comes in
    */
	function registerAsBuyer() public {
        require(buyer == address(0), msg.value == price);

        buyer = msg.sender;
        depositedAmount = msg.value;
        emit Transaction(seller, buyer, depositedAmount);
    }

    /**
    * The withdraw function, following the withdraw pattern shown and explained here:
    * http://solidity.readthedocs.io/en/develop/common-patterns.html#withdrawal-from-contracts
    */
    function withdraw() public {
        require(seller == msg.sender);

        uint amount = depositedAmount;

        depositedAmount = 0;
        msg.sender.transfer(amount);
    }
}
