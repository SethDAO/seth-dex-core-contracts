// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity =0.5.16;

import "../SethLP.sol";

contract ERC20 is SethLP {
    constructor(uint256 _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
