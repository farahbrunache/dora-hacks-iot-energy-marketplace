pragma solidity ^0.4.18;

    /**
    * Energy Market
    */

contract Market {
    /**
    * Market
    */
    mapping (uint => Item) items;
    mapping (uint => bool) sold;

    uint itemCount = 0;

    struct Item {
        address seller;
        uint price;
        uint energy;
    }

    /**
    * The logs that will be emitted in every step of the contract's life cycle
    */
    event Sell(address seller, uint price, uint energy, uint itemId);
	event Transaction(address seller, address buyer, uint price, uint energy, uint itemId);
	event ReceivePayment(address seller, uint amount);

	function sellEnergy(uint price, uint energy) public {
	    var item = Item(msg.sender, price, energy);
		items[itemCount] = item;
		sold[itemCount] = false;
		emit Sell(msg.sender, price, energy, itemCount);
		itemCount = itemCount + 1;
	}

    /**
    * buyer comes in
    */
	function buyEnergy(uint itemId) public payable {
	    require(itemId >= 0 && itemId < itemCount && sold[itemId] == false);
        var item = items[itemId];

        require(msg.value == item.price);
        var buyer = msg.sender;
        emit Transaction(item.seller, buyer, item.price, item.energy, itemId);

        item.seller.transfer(item.price);
        sold[itemId] = true;
        emit ReceivePayment(item.seller, item.price);
	}
}
