// SPDX-License-Identifier: MPL-2.0
pragma solidity =0.8.9;

import "forge-std/src/Test.sol";
import "../contracts/ExampleToken.sol";

contract ExampleTokenTest is Test {
	ExampleToken exampleToken;

	function setUp() public {
		exampleToken = new ExampleToken();
		exampleToken.initialize();
	}

	function testGetName() public {
		assertTrue(exampleToken.name() == "token");
	}

	function testGetSymbol() public {
		assertTrue(exampleToken.symbol() == "TOKEN");
	}
}
