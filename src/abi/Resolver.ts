export const Resolver = {
  "address": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_pt",
          "type": "uint8"
        }
      ],
      "name": "getPaymentToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_pt",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "_v",
          "type": "address"
        }
      ],
      "name": "setPaymentToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0xb02c397ea01d4513d6d9f8806d2f8410110b12d4d8201fd5cc3e46d86a0d096a",
  "receipt": {
    "to": null,
    "from": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "contractAddress": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    "transactionIndex": 0,
    "gasUsed": "208714",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0xc6b8e88c8eacfa6cc9b7d08ce58440b1d3084627b346d7995eb2078a0075b57d",
    "transactionHash": "0xb02c397ea01d4513d6d9f8806d2f8410110b12d4d8201fd5cc3e46d86a0d096a",
    "logs": [],
    "blockNumber": 10,
    "cumulativeGasUsed": "208714",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  ],
  "solcInputHash": "fbc0b8ebc8e1ae7e314f57d794442c60",
  "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pt\",\"type\":\"uint8\"}],\"name\":\"getPaymentToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pt\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"_v\",\"type\":\"address\"}],\"name\":\"setPaymentToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getPaymentToken(uint8)\":{\"details\":\"util function to avoid guessing getter name if addresses was public\"},\"setPaymentToken(uint8,address)\":{\"details\":\"Gives us the ability to set new payment tokens down the line\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Resolver.sol\":\"Resolver\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"src/Resolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.0;\\n\\nimport \\\"./interfaces/IResolver.sol\\\";\\n\\ncontract Resolver is IResolver {\\n    address private admin;\\n    mapping(uint8 => address) private addresses;\\n\\n    constructor(address _admin) {\\n        admin = _admin;\\n    }\\n\\n    function getPaymentToken(uint8 _pt)\\n        external\\n        view\\n        override\\n        returns (address)\\n    {\\n        return addresses[_pt];\\n    }\\n\\n    function setPaymentToken(uint8 _pt, address _v) external override {\\n        require(_pt != 0, \\\"\\\");\\n        require(addresses[_pt] == address(0), \\\"cannot reset the address\\\");\\n        require(msg.sender == admin, \\\"\\\");\\n\\n        addresses[_pt] = _v;\\n    }\\n}\\n\",\"keccak256\":\"0x497b06665e70c88a39d13ff5ac2ffafcba79bf0ceb85afeb50825fa36ad8d119\",\"license\":\"MIT\"},\"src/interfaces/IResolver.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\npragma solidity 0.8.0;\\n\\ninterface IResolver {\\n    enum PaymentToken {\\n        SENTINEL, // 0 <- marks non-existence, nil of the payment tokens\\n        WETH, // 1\\n        DAI, // 2\\n        USDC, // 3\\n        USDT, // 4\\n        TUSD // 5\\n    }\\n\\n    /**\\n     * @dev util function to avoid guessing getter name if addresses was public\\n     */\\n    function getPaymentToken(uint8 _pt) external view returns (address);\\n\\n    /**\\n     * @dev Gives us the ability to set new payment tokens down the line\\n     */\\n    function setPaymentToken(uint8 _pt, address _v) external;\\n}\\n\",\"keccak256\":\"0x1bc56c9d3bd0bcbf4ff5c851c97414c47eb50dd2f85208329c7c13176fb126fd\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040516102f03803806102f083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b61025f806100916000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063321c6aea1461003b578063c6ee427f14610050575b600080fd5b61004e61004936600461018c565b610079565b005b61006361005e36600461016b565b610138565b60405161007091906101cd565b60405180910390f35b60ff82166100a25760405162461bcd60e51b815260040161009990610218565b60405180910390fd5b60ff82166000908152600160205260409020546001600160a01b0316156100db5760405162461bcd60e51b8152600401610099906101e1565b6000546001600160a01b031633146101055760405162461bcd60e51b815260040161009990610218565b60ff91909116600090815260016020526040902080546001600160a01b0319166001600160a01b03909216919091179055565b60ff81166000908152600160205260409020546001600160a01b03165b919050565b803560ff8116811461015557600080fd5b60006020828403121561017c578081fd5b6101858261015a565b9392505050565b6000806040838503121561019e578081fd5b6101a78361015a565b915060208301356001600160a01b03811681146101c2578182fd5b809150509250929050565b6001600160a01b0391909116815260200190565b60208082526018908201527f63616e6e6f742072657365742074686520616464726573730000000000000000604082015260600190565b60208082526000908201526040019056fea264697066735822122098f1db062e722f68c5821ccdadfcc960d84411fb14caa37850f72ff471bbe92c64736f6c63430008000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063321c6aea1461003b578063c6ee427f14610050575b600080fd5b61004e61004936600461018c565b610079565b005b61006361005e36600461016b565b610138565b60405161007091906101cd565b60405180910390f35b60ff82166100a25760405162461bcd60e51b815260040161009990610218565b60405180910390fd5b60ff82166000908152600160205260409020546001600160a01b0316156100db5760405162461bcd60e51b8152600401610099906101e1565b6000546001600160a01b031633146101055760405162461bcd60e51b815260040161009990610218565b60ff91909116600090815260016020526040902080546001600160a01b0319166001600160a01b03909216919091179055565b60ff81166000908152600160205260409020546001600160a01b03165b919050565b803560ff8116811461015557600080fd5b60006020828403121561017c578081fd5b6101858261015a565b9392505050565b6000806040838503121561019e578081fd5b6101a78361015a565b915060208301356001600160a01b03811681146101c2578182fd5b809150509250929050565b6001600160a01b0391909116815260200190565b60208082526018908201527f63616e6e6f742072657365742074686520616464726573730000000000000000604082015260600190565b60208082526000908201526040019056fea264697066735822122098f1db062e722f68c5821ccdadfcc960d84411fb14caa37850f72ff471bbe92c64736f6c63430008000033",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "getPaymentToken(uint8)": {
        "details": "util function to avoid guessing getter name if addresses was public"
      },
      "setPaymentToken(uint8,address)": {
        "details": "Gives us the ability to set new payment tokens down the line"
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 6387,
        "contract": "src/Resolver.sol:Resolver",
        "label": "admin",
        "offset": 0,
        "slot": "0",
        "type": "t_address"
      },
      {
        "astId": 6391,
        "contract": "src/Resolver.sol:Resolver",
        "label": "addresses",
        "offset": 0,
        "slot": "1",
        "type": "t_mapping(t_uint8,t_address)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_mapping(t_uint8,t_address)": {
        "encoding": "mapping",
        "key": "t_uint8",
        "label": "mapping(uint8 => address)",
        "numberOfBytes": "32",
        "value": "t_address"
      },
      "t_uint8": {
        "encoding": "inplace",
        "label": "uint8",
        "numberOfBytes": "1"
      }
    }
  }
}