pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Router {
    function transfer(address token, address to) public view {
        console.log('...');
        console.log('token', token);
        console.log('from', msg.sender);
        console.log('to', to);
    }
}
