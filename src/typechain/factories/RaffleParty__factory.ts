/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RaffleParty, RafflePartyInterface } from "../RaffleParty";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_WEIGHT",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "prizeToken",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "tokenId",
        type: "uint96",
      },
    ],
    name: "addPoolPrize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baseRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "blockNumberToIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "ticketCount",
        type: "uint96",
      },
    ],
    name: "buyTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "ticketCount",
        type: "uint96",
      },
    ],
    name: "buyTicketEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "cancelRaffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prizeIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ticketPurchaseIndex",
        type: "uint256",
      },
    ],
    name: "claimPrize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "claimSales",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prizeToken",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "tokenId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "startTimestamp",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "endTimestamp",
        type: "uint48",
      },
      {
        internalType: "uint256",
        name: "ticketPrice",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "minTickets",
        type: "uint96",
      },
    ],
    name: "createRaffle",
    outputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "getAccountTokenClaimAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "getClaimableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "claimableAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "getMinimumSales",
    outputs: [
      {
        internalType: "uint256",
        name: "minimumSales",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "prizeToken",
        type: "address",
      },
    ],
    name: "getPoolPrizeTokenConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "weight",
            type: "uint64",
          },
        ],
        internalType: "struct RaffleParty.PoolPrizeTokenConfig",
        name: "config",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "getRoyaltyAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
    ],
    name: "getTicketPurchaseIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "ticketPurchaseIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "getTotalSales",
    outputs: [
      {
        internalType: "uint256",
        name: "totalSales",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prizeIndex",
        type: "uint256",
      },
    ],
    name: "getWinner",
    outputs: [
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleId",
        type: "uint256",
      },
    ],
    name: "initializeSeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "overflowRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "raffleAccountWeights",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "raffleCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rafflePoolPrizeTokenConfigs",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "weight",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rafflePrizes",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "tokenId",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "weight",
        type: "uint64",
      },
      {
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "raffleTickets",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "endId",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "raffles",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ticketPrice",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "minTickets",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "seed",
        type: "uint96",
      },
      {
        internalType: "uint48",
        name: "startTimestamp",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "endTimestamp",
        type: "uint48",
      },
      {
        internalType: "uint96",
        name: "totalWeight",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestIdToRaffleId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "royaltyPriceIndices",
    outputs: [
      {
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
      {
        internalType: "uint224",
        name: "value",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseRoyalty",
        type: "uint256",
      },
    ],
    name: "setBaseRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_overflowRoyalty",
        type: "uint256",
      },
    ],
    name: "setOverflowRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260fa60015561138860025534801561001b57600080fd5b506100253361002a565b61007a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612707806100896000396000f3fe6080604052600436106101ee5760003560e01c806380df638a1161010d578063c7f9388a116100a0578063e16fd0ec1161006f578063e16fd0ec14610765578063f2fde38b14610793578063f5b6b0ad146107b3578063f8fe7c6c146107c9578063ffc743311461081657600080fd5b8063c7f9388a146106a4578063cd081e721461070f578063cd5390691461072f578063d913ea711461074557600080fd5b8063aea994cc116100dc578063aea994cc14610600578063b2f1fa5614610644578063b7d08b7e14610664578063b841296c1461068457600080fd5b806380df638a14610553578063886c3eff146105ac5780638da5cb5b146105cc578063a54c120c146105ea57600080fd5b806346d44f6d116101855780636a853485116101545780636a853485146104de578063715018a6146104fe57806377e96e52146105135780637d8ca2421461053357600080fd5b806346d44f6d1461036c5780635d4bc0ce146103b35780635fba3171146104ab57806364841f3c146104cb57600080fd5b8063372d2051116101c1578063372d20511461029557806339ff487b146102b55780633a1ec473146102ed5780633e979d381461033457600080fd5b80630c9fc29f146101f357806319fc1ca614610233578063259bfd031461025557806328bc574b14610275575b600080fd5b3480156101ff57600080fd5b5061022061020e3660046122fd565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561023f57600080fd5b5061025361024e366004612332565b610836565b005b34801561026157600080fd5b506102206102703660046122fd565b610b45565b34801561028157600080fd5b506102206102903660046122fd565b610b96565b3480156102a157600080fd5b506102206102b03660046122fd565b610bef565b3480156102c157600080fd5b506102d56102d036600461236b565b610c51565b6040516001600160a01b03909116815260200161022a565b3480156102f957600080fd5b5061030d61030836600461236b565b610cae565b604080516001600160a01b0390931683526001600160601b0390911660208301520161022a565b34801561034057600080fd5b5061022061034f36600461238d565b600b60209081526000928352604080842090915290825290205481565b34801561037857600080fd5b5061038c61038736600461236b565b610cf7565b604080516001600160a01b0390931683526001600160401b0390911660208301520161022a565b3480156103bf57600080fd5b506104436103ce3660046122fd565b60046020819052600091825260409091208054600182015460028301546003840154948401546005909401546001600160a01b0393841695929491938316926001600160601b03600160a01b9091048116928082169265ffffffffffff600160601b8304811693600160901b90930416911689565b604080516001600160a01b039a8b16815260208101999099528801969096529690931660608601526001600160601b039182166080860152811660a085015265ffffffffffff91821660c0850152931660e0830152919091166101008201526101200161022a565b3480156104b757600080fd5b506102536104c63660046122fd565b610d40565b6102536104d93660046123ce565b611006565b3480156104ea57600080fd5b506102536104f93660046123fa565b61107e565b34801561050a57600080fd5b5061025361120d565b34801561051f57600080fd5b5061022061052e36600461238d565b611243565b34801561053f57600080fd5b5061022061054e3660046122fd565b6112ae565b34801561055f57600080fd5b5061059461056e366004612436565b60086020908152600092835260408084209091529082529020546001600160601b031681565b6040516001600160601b03909116815260200161022a565b3480156105b857600080fd5b506102206105c736600461246f565b611305565b3480156105d857600080fd5b506000546001600160a01b03166102d5565b3480156105f657600080fd5b5061022060035481565b34801561060c57600080fd5b5061062061061b36600461238d565b61176c565b6040805163ffffffff90931683526001600160e01b0390911660208301520161022a565b34801561065057600080fd5b5061022061065f36600461236b565b6117b3565b34801561067057600080fd5b5061025361067f3660046122fd565b611860565b34801561069057600080fd5b5061025361069f3660046122fd565b6118dc565b3480156106b057600080fd5b506106c46106bf36600461236b565b611958565b604080516001600160a01b0396871681526001600160601b0395909516602086015292909416918301919091526001600160401b03166060820152901515608082015260a00161022a565b34801561071b57600080fd5b5061025361072a36600461238d565b6119c9565b34801561073b57600080fd5b5061022060025481565b34801561075157600080fd5b506102536107603660046122fd565b611bc8565b34801561077157600080fd5b5061077b61271081565b6040516001600160401b03909116815260200161022a565b34801561079f57600080fd5b506102536107ae3660046124ee565b611d30565b3480156107bf57600080fd5b5061022060015481565b3480156107d557600080fd5b506107e96107e4366004612436565b611dcb565b6040805182516001600160a01b031681526020928301516001600160401b0316928101929092520161022a565b34801561082257600080fd5b506102536108313660046123ce565b611f00565b6000838152600460208190526040822001546001600160601b031690036108955760405162461bcd60e51b815260206004820152600e60248201526d15da5b9b995c881b9bdd081cd95d60921b60448201526064015b60405180910390fd5b60008381526007602052604090208054829081106108b5576108b5612509565b6000918252602090912001546001600160a01b0385811691161461090e5760405162461bcd60e51b815260206004820152601060248201526f2737ba103a34b1b5b2ba1037bbb732b960811b604482015260640161088c565b600061091a8484611fbc565b600085815260076020526040812091925090610937600185612535565b8154811061094757610947612509565b6000918252602080832091909101548783526007909152604082208054600160a01b9092046001600160601b03169350908590811061098857610988612509565b6000918252602090912001546001600160601b03600160a01b90910481169150821683108015906109c15750806001600160601b031683105b610a0d5760405162461bcd60e51b815260206004820152601d60248201527f5469636b6574206964206f7574206f662077696e6e65722072616e6765000000604482015260640161088c565b600086815260056020526040902080546001919087908110610a3157610a31612509565b9060005260206000209060020201600101601c6101000a81548160ff021916908315150217905550600560008781526020019081526020016000208581548110610a7d57610a7d612509565b600091825260208083206002909202909101548883526005909152604090912080546001600160a01b03909216916323b872dd9130918b91908a908110610ac657610ac6612509565b600091825260209091206002909102015460405160e085901b6001600160e01b0319168152610b0a939291600160a01b90046001600160601b03169060040161254c565b600060405180830381600087803b158015610b2457600080fd5b505af1158015610b38573d6000803e3d6000fd5b5050505050505050505050565b600080610b5183610bef565b90506000610b5e84610b96565b9050610b6a8183612535565b600254610b779190612578565b600154610b849083612578565b610b8e9190612597565b949350505050565b600081815260046020526040812060058101546001820154600390920154612710926001600160601b0392831692610bd592600160a01b900416612578565b610bdf9190612578565b610be991906125c5565b92915050565b6000818152600460209081526040808320600190810154600790935290832080549091610c1b91612535565b81548110610c2b57610c2b612509565b600091825260209091200154610be99190600160a01b90046001600160601b0316612578565b600080610c5e8484611fbc565b90506000610c6c85836117b3565b600086815260076020526040902080549192509082908110610c9057610c90612509565b6000918252602090912001546001600160a01b031695945050505050565b60076020528160005260406000208181548110610cca57600080fd5b6000918252602090912001546001600160a01b0381169250600160a01b90046001600160601b0316905082565b60066020528160005260406000208181548110610d1357600080fd5b6000918252602090912001546001600160a01b0381169250600160a01b90046001600160401b0316905082565b6000818152600460205260409020546001600160a01b03163314610da65760405162461bcd60e51b815260206004820152601e60248201527f4f6e6c792063726561746f722063616e2063616e63656c20726166666c650000604482015260640161088c565b60008181526004602081905260409091200154600160601b900465ffffffffffff164210610e165760405162461bcd60e51b815260206004820152601a60248201527f726166666c652068617320616c72656164792073746172746564000000000000604482015260640161088c565b600081815260056020908152604080832080548251818502810185019093528083529192909190849084015b82821015610eca5760008481526020908190206040805160a0810182526002860290920180546001600160a01b038082168552600160a01b918290046001600160601b0316858701526001928301549081169385019390935282046001600160401b03166060840152600160e01b90910460ff16151560808301529083529092019101610e42565b50505050905060005b8151811015610fa857818181518110610eee57610eee612509565b6020026020010151600001516001600160a01b03166323b872dd30848481518110610f1b57610f1b612509565b602002602001015160400151858581518110610f3957610f39612509565b6020026020010151602001516040518463ffffffff1660e01b8152600401610f639392919061254c565b600060405180830381600087803b158015610f7d57600080fd5b505af1158015610f91573d6000803e3d6000fd5b505050508080610fa0906125d9565b915050610ed3565b50506000908152600460208190526040822080546001600160a01b031916815560018101839055600281018390556003810192909255810180546001600160c01b031916905560050180546bffffffffffffffffffffffff19169055565b60008281526004602052604081206001015461102c906001600160601b03841690612578565b905080341461106e5760405162461bcd60e51b815260206004820152600e60248201526d0a0e4d2c6ca40dad2e6dac2e8c6d60931b604482015260640161088c565b611079338484612003565b505050565b600061108a8484611dcb565b6040516323b872dd60e01b81529091506001600160a01b038416906323b872dd906110bd9033903090879060040161254c565b600060405180830381600087803b1580156110d757600080fd5b505af11580156110eb573d6000803e3d6000fd5b5050506000858152600560209081526040808320815160a0810183526001600160a01b0389811682526001600160601b03898116838701908152338487018181528b890180516001600160401b0390811660608901908152608089018d81528a5460018082018d559b8f528d8f209a519751978a16600160a01b988a168902176002909102909a01998a55935198909901805499519351989097166001600160e01b0319909916989098179188169093021760ff60e01b1916600160e01b951515959095029490941790925590518b87526008865284872092875291909452918420805492909116945092916111e3918591166125f2565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555050505050565b6000546001600160a01b031633146112375760405162461bcd60e51b815260040161088c9061261d565b61124160006120bd565b565b6000818152600460205260408120600501546001600160601b0316611267836112ae565b60008481526008602090815260408083206001600160a01b038916845290915290205461129d91906001600160601b0316612578565b6112a791906125c5565b9392505050565b6000806112ba83610bef565b905060006112c784610b96565b90506112d38183612535565b6002546112e290612710612535565b6112ec9190612578565b6001546112fb81612710612535565b610b849190612578565b60006001600160a01b03881661131a57600080fd5b428465ffffffffffff161161132e57600080fd5b6000831161133b57600080fd5b6040516323b872dd60e01b81526001600160a01b038916906323b872dd9061136b90339030908c9060040161254c565b600060405180830381600087803b15801561138557600080fd5b505af1158015611399573d6000803e3d6000fd5b5050600380549250905060006113ae836125d9565b919050559050604051806101200160405280336001600160a01b031681526020018481526020016000801b8152602001876001600160a01b03168152602001836001600160601b0316815260200160006001600160601b031681526020018665ffffffffffff1681526020018565ffffffffffff1681526020016127106001600160601b03168152506004600083815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550602082015181600101556040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160030160146101000a8154816001600160601b0302191690836001600160601b0316021790555060a08201518160040160006101000a8154816001600160601b0302191690836001600160601b0316021790555060c082015181600401600c6101000a81548165ffffffffffff021916908365ffffffffffff16021790555060e08201518160040160126101000a81548165ffffffffffff021916908365ffffffffffff1602179055506101008201518160050160006101000a8154816001600160601b0302191690836001600160601b03160217905550905050600560008281526020019081526020016000206040518060a001604052808a6001600160a01b03168152602001896001600160601b03168152602001336001600160a01b031681526020016127106001600160401b0316815260200160001515815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a8154816001600160601b0302191690836001600160601b0316021790555060408201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160010160146101000a8154816001600160401b0302191690836001600160401b03160217905550608082015181600101601c6101000a81548160ff02191690831515021790555050506127106001600160401b0316600860008381526020019081526020016000206000336001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160601b0302191690836001600160601b03160217905550979650505050505050565b600a602052816000526040600020818154811061178857600080fd5b60009182526020909120015463ffffffff8116925064010000000090046001600160e01b0316905082565b600082815260076020526040812054819081906117d290600190612535565b90505b8082101561185857600060026117eb8385612597565b6117f591906125c5565b6000878152600760205260409020805491925086918390811061181a5761181a612509565b600091825260209091200154600160a01b90046001600160601b0316101561184e57611847816001612597565b9250611852565b8091505b506117d5565b509392505050565b6000546001600160a01b0316331461188a5760405162461bcd60e51b815260040161088c9061261d565b6127108111156118d75760405162461bcd60e51b81526020600482015260186024820152770526f79616c7479206d757374206265203c3d2031303030360441b604482015260640161088c565b600255565b6000546001600160a01b031633146119065760405162461bcd60e51b815260040161088c9061261d565b6127108111156119535760405162461bcd60e51b81526020600482015260186024820152770526f79616c7479206d757374206265203c3d2031303030360441b604482015260640161088c565b600155565b6005602052816000526040600020818154811061197457600080fd5b6000918252602090912060029091020180546001909101546001600160a01b038083169450600160a01b928390046001600160601b0316935081169181046001600160401b031690600160e01b900460ff1685565b60006119d58383611243565b6000838152600460208190526040822001549192506001600160601b039091169003611a345760405162461bcd60e51b815260206004820152600e60248201526d15da5b9b995c881b9bdd081cd95d60921b604482015260640161088c565b60008111611a785760405162461bcd60e51b81526020600482015260116024820152704e6f2073616c657320746f20636c61696d60781b604482015260640161088c565b6000828152600460205260409020600301546001600160a01b0316611b37576000836001600160a01b03168260405160006040518083038185875af1925050503d8060008114611ae4576040519150601f19603f3d011682016040523d82523d6000602084013e611ae9565b606091505b5050905080611b315760405162461bcd60e51b81526020600482015260146024820152734661696c656420746f2073656e642066756e647360601b604482015260640161088c565b50505050565b6000828152600460208190526040918290206003015491516323b872dd60e01b815230918101919091526001600160a01b03858116602483015260448201849052909116906323b872dd906064016020604051808303816000875af1158015611ba4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b319190612652565b60008181526004602081815260409283902083516101208101855281546001600160a01b039081168252600183015493820193909352600282015494810194909452600381015491821660608501526001600160601b03600160a01b909204821660808501529182015480821660a085015265ffffffffffff600160601b8204811660c0860152600160901b9091041660e08401819052600590920154166101008301524211611cb15760405162461bcd60e51b8152602060048201526014602482015273149859999b19481a185cc81b9bdd08195b99195960621b604482015260640161088c565b60a08101516001600160601b031615611d0c5760405162461bcd60e51b815260206004820152601860248201527f5365656420616c726561647920696e697469616c697a65640000000000000000604482015260640161088c565b6000611d1783610b45565b9050611d2782606001518261210d565b611079836121f3565b6000546001600160a01b03163314611d5a5760405162461bcd60e51b815260040161088c9061261d565b6001600160a01b038116611dbf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161088c565b611dc8816120bd565b50565b60408051808201825260008082526020808301829052858252600681528382208054855181840281018401909652808652939492939091849084015b82821015611e5657600084815260209081902060408051808201909152908401546001600160a01b0381168252600160a01b90046001600160401b031681830152825260019092019101611e07565b50505050905060005b8151811015611eb757836001600160a01b0316828281518110611e8457611e84612509565b6020026020010151600001516001600160a01b031603611ea5575050610be9565b80611eaf816125d9565b915050611e5f565b5060405162461bcd60e51b815260206004820152601c60248201527f506f6f6c207072697a652061646472657373206e6f7420666f756e6400000000604482015260640161088c565b600082815260046020526040812060010154611f26906001600160601b03841690612578565b60008481526004602081905260409182902060030154915163a9059cbb60e01b81523391810191909152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015611f8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb09190612652565b50611079338484612003565b6000828152600560209081526040808320548151928301869052908201849052906060016040516020818303038152906040528051906020012060001c6112a79190612674565b6000828152600760205260408120805483919061202290600190612535565b8154811061203257612032612509565b6000918252602090912001546120589190600160a01b90046001600160601b03166125f2565b6040805180820182526001600160a01b0396871681526001600160601b03928316602080830191825260009788526007815292872080546001810182559088529290962090519551909216600160a01b02949095169390931792909301919091555050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166000818152600a602081815260408084208054600b84528286204387528452918520829055948452919052918390612150600185612535565b8154811061216057612160612509565b600091825260209091200154612187919064010000000090046001600160e01b0316612688565b6001600160a01b039094166000908152600a60209081526040808320815180830190925263ffffffff43811683526001600160e01b0398891683850190815282546001810184559286529390942091519251909716640100000000029190921617940193909355505050565b6040805143602082015260009101604051602081830303815290604052612219906126aa565b600081815260096020526040808220859055805160018082528183019092529293509091908160200160208202803683370190505060408051426020820152919250016040516020818303038152906040528051906020012060001c8160008151811061228857612288612509565b60200260200101818152505061107982826000828152600960205260408120548251909183916122ba576122ba612509565b602090810291909101810151600092835260049182905260409092200180546bffffffffffffffffffffffff19166001600160601b039092169190911790555050565b60006020828403121561230f57600080fd5b5035919050565b80356001600160a01b038116811461232d57600080fd5b919050565b6000806000806080858703121561234857600080fd5b61235185612316565b966020860135965060408601359560600135945092505050565b6000806040838503121561237e57600080fd5b50508035926020909101359150565b600080604083850312156123a057600080fd5b6123a983612316565b946020939093013593505050565b80356001600160601b038116811461232d57600080fd5b600080604083850312156123e157600080fd5b823591506123f1602084016123b7565b90509250929050565b60008060006060848603121561240f57600080fd5b8335925061241f60208501612316565b915061242d604085016123b7565b90509250925092565b6000806040838503121561244957600080fd5b823591506123f160208401612316565b803565ffffffffffff8116811461232d57600080fd5b600080600080600080600060e0888a03121561248a57600080fd5b61249388612316565b96506124a1602089016123b7565b95506124af60408901612316565b94506124bd60608901612459565b93506124cb60808901612459565b925060a088013591506124e060c089016123b7565b905092959891949750929550565b60006020828403121561250057600080fd5b6112a782612316565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156125475761254761251f565b500390565b6001600160a01b0393841681529190921660208201526001600160601b03909116604082015260600190565b60008160001904831182151516156125925761259261251f565b500290565b600082198211156125aa576125aa61251f565b500190565b634e487b7160e01b600052601260045260246000fd5b6000826125d4576125d46125af565b500490565b6000600182016125eb576125eb61251f565b5060010190565b60006001600160601b038083168185168083038211156126145761261461251f565b01949350505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006020828403121561266457600080fd5b815180151581146112a757600080fd5b600082612683576126836125af565b500690565b60006001600160e01b038281168482168083038211156126145761261461251f565b805160208083015191908110156126cb576000198160200360031b1b821691505b5091905056fea2646970667358221220c1aa10ce13f74f73d7c1378f0d72e6f4469ccbdeb1788a115053d2b37ecc68ed64736f6c634300080d0033";

type RafflePartyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RafflePartyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RaffleParty__factory extends ContractFactory {
  constructor(...args: RafflePartyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RaffleParty> {
    return super.deploy(overrides || {}) as Promise<RaffleParty>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RaffleParty {
    return super.attach(address) as RaffleParty;
  }
  override connect(signer: Signer): RaffleParty__factory {
    return super.connect(signer) as RaffleParty__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RafflePartyInterface {
    return new utils.Interface(_abi) as RafflePartyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RaffleParty {
    return new Contract(address, _abi, signerOrProvider) as RaffleParty;
  }
}