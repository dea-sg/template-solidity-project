// SPDX-License-Identifier: MPL-2.0
pragma solidity =0.8.23;

import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract ExampleToken is OwnableUpgradeable, UUPSUpgradeable, ERC20Upgradeable {
	function initialize() public initializer {
		__Ownable_init(_msgSender());
		__UUPSUpgradeable_init();
		__ERC20_init("token", "TOKEN");
	}

	function _authorizeUpgrade(address) internal override onlyOwner {}
}
