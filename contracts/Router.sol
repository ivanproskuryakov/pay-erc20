pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@rari-capital/solmate/src/tokens/ERC20.sol";

contract Router {
    function transfer(ERC20 token, address to, uint256 amount) public {
        address payable owner = payable(msg.sender);

        console.log('...');
        console.log('token', address(token));
        console.log('from msg.sender', msg.sender);
        console.log('to', to);
        console.log('amount', amount);

        token.transferFrom(payable(msg.sender), address(this), amount);
    }
}
