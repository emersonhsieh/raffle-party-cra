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
    name: "buyTickets",
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
    name: "buyTicketsEth",
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
      {
        internalType: "address[]",
        name: "poolPrizeTokens",
        type: "address[]",
      },
      {
        internalType: "uint64[]",
        name: "poolPrizeTokenWeights",
        type: "uint64[]",
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
      {
        internalType: "uint256",
        name: "prizeIndex",
        type: "uint256",
      },
    ],
    name: "getWinnerTicketId",
    outputs: [
      {
        internalType: "uint256",
        name: "ticketId",
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
  "0x608060405260fa60015561138860025534801561001b57600080fd5b506100253361002a565b61007a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612871806100896000396000f3fe6080604052600436106101f95760003560e01c80638da5cb5b1161010d578063c7f9388a116100a0578063d913ea711161006f578063d913ea7114610790578063e16fd0ec146107b0578063f2fde38b146107de578063f5b6b0ad146107fe578063f8fe7c6c1461081457600080fd5b8063c7f9388a146106dc578063c89f2c5714610747578063cd081e721461075a578063cd5390691461077a57600080fd5b8063b2f1fa56116100dc578063b2f1fa561461065c578063b7d08b7e1461067c578063b841296c1461069c578063c0d6732e146106bc57600080fd5b80638da5cb5b146105c45780639c1c820a146105e2578063a54c120c14610602578063aea994cc1461061857600080fd5b806346d44f6d116101905780636a8534851161015f5780636a853485146104f6578063715018a61461051657806377e96e521461052b5780637d8ca2421461054b57806380df638a1461056b57600080fd5b806346d44f6d146103775780635406d969146103be5780635d4bc0ce146103de5780635fba3171146104d657600080fd5b8063372d2051116101cc578063372d2051146102a057806339ff487b146102c05780633a1ec473146102f85780633e979d381461033f57600080fd5b80630c9fc29f146101fe57806319fc1ca61461023e578063259bfd031461026057806328bc574b14610280575b600080fd5b34801561020a57600080fd5b5061022b6102193660046123b0565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b34801561024a57600080fd5b5061025e6102593660046123e5565b610861565b005b34801561026c57600080fd5b5061022b61027b3660046123b0565b610b70565b34801561028c57600080fd5b5061022b61029b3660046123b0565b610bc1565b3480156102ac57600080fd5b5061022b6102bb3660046123b0565b610c1a565b3480156102cc57600080fd5b506102e06102db36600461241e565b610c7c565b6040516001600160a01b039091168152602001610235565b34801561030457600080fd5b5061031861031336600461241e565b610cd9565b604080516001600160a01b0390931683526001600160601b03909116602083015201610235565b34801561034b57600080fd5b5061022b61035a366004612440565b600b60209081526000928352604080842090915290825290205481565b34801561038357600080fd5b5061039761039236600461241e565b610d22565b604080516001600160a01b0390931683526001600160401b03909116602083015201610235565b3480156103ca57600080fd5b5061022b6103d936600461241e565b610d6b565b3480156103ea57600080fd5b5061046e6103f93660046123b0565b60046020819052600091825260409091208054600182015460028301546003840154948401546005909401546001600160a01b0393841695929491938316926001600160601b03600160a01b9091048116928082169265ffffffffffff600160601b8304811693600160901b90930416911689565b604080516001600160a01b039a8b16815260208101999099528801969096529690931660608601526001600160601b039182166080860152811660a085015265ffffffffffff91821660c0850152931660e08301529190911661010082015261012001610235565b3480156104e257600080fd5b5061025e6104f13660046123b0565b610db9565b34801561050257600080fd5b5061025e610511366004612481565b61107f565b34801561052257600080fd5b5061025e61120e565b34801561053757600080fd5b5061022b610546366004612440565b611244565b34801561055757600080fd5b5061022b6105663660046123b0565b6112a8565b34801561057757600080fd5b506105ac6105863660046124bd565b60086020908152600092835260408084209091529082529020546001600160601b031681565b6040516001600160601b039091168152602001610235565b3480156105d057600080fd5b506000546001600160a01b03166102e0565b3480156105ee57600080fd5b5061022b6105fd36600461254a565b6112ff565b34801561060e57600080fd5b5061022b60035481565b34801561062457600080fd5b50610638610633366004612440565b6118cd565b6040805163ffffffff90931683526001600160e01b03909116602083015201610235565b34801561066857600080fd5b5061022b61067736600461241e565b611914565b34801561068857600080fd5b5061025e6106973660046123b0565b6119c1565b3480156106a857600080fd5b5061025e6106b73660046123b0565b611a3d565b3480156106c857600080fd5b5061025e6106d736600461262e565b611ab9565b3480156106e857600080fd5b506106fc6106f736600461241e565b611b80565b604080516001600160a01b0396871681526001600160601b0395909516602086015292909416918301919091526001600160401b03166060820152901515608082015260a001610235565b61025e61075536600461262e565b611bf1565b34801561076657600080fd5b5061025e610775366004612440565b611c64565b34801561078657600080fd5b5061022b60025481565b34801561079c57600080fd5b5061025e6107ab3660046123b0565b611e63565b3480156107bc57600080fd5b506107c661271081565b6040516001600160401b039091168152602001610235565b3480156107ea57600080fd5b5061025e6107f9366004612651565b611fb4565b34801561080a57600080fd5b5061022b60015481565b34801561082057600080fd5b5061083461082f3660046124bd565b61204f565b6040805182516001600160a01b031681526020928301516001600160401b03169281019290925201610235565b6000838152600460208190526040822001546001600160601b031690036108c05760405162461bcd60e51b815260206004820152600e60248201526d15da5b9b995c881b9bdd081cd95d60921b60448201526064015b60405180910390fd5b60008381526007602052604090208054829081106108e0576108e061266c565b6000918252602090912001546001600160a01b038581169116146109395760405162461bcd60e51b815260206004820152601060248201526f2737ba103a34b1b5b2ba1037bbb732b960811b60448201526064016108b7565b60006109458484610d6b565b600085815260076020526040812091925090610962600185612698565b815481106109725761097261266c565b6000918252602080832091909101548783526007909152604082208054600160a01b9092046001600160601b0316935090859081106109b3576109b361266c565b6000918252602090912001546001600160601b03600160a01b90910481169150821683108015906109ec5750806001600160601b031683105b610a385760405162461bcd60e51b815260206004820152601d60248201527f5469636b6574206964206f7574206f662077696e6e65722072616e676500000060448201526064016108b7565b600086815260056020526040902080546001919087908110610a5c57610a5c61266c565b9060005260206000209060020201600101601c6101000a81548160ff021916908315150217905550600560008781526020019081526020016000208581548110610aa857610aa861266c565b600091825260208083206002909202909101548883526005909152604090912080546001600160a01b03909216916323b872dd9130918b91908a908110610af157610af161266c565b600091825260209091206002909102015460405160e085901b6001600160e01b0319168152610b35939291600160a01b90046001600160601b0316906004016126af565b600060405180830381600087803b158015610b4f57600080fd5b505af1158015610b63573d6000803e3d6000fd5b5050505050505050505050565b600080610b7c83610c1a565b90506000610b8984610bc1565b9050610b958183612698565b600254610ba291906126db565b600154610baf90836126db565b610bb991906126fa565b949350505050565b600081815260046020526040812060058101546001820154600390920154612710926001600160601b0392831692610c0092600160a01b9004166126db565b610c0a91906126db565b610c149190612728565b92915050565b6000818152600460209081526040808320600190810154600790935290832080549091610c4691612698565b81548110610c5657610c5661266c565b600091825260209091200154610c149190600160a01b90046001600160601b03166126db565b600080610c898484610d6b565b90506000610c978583611914565b600086815260076020526040902080549192509082908110610cbb57610cbb61266c565b6000918252602090912001546001600160a01b031695945050505050565b60076020528160005260406000208181548110610cf557600080fd5b6000918252602090912001546001600160a01b0381169250600160a01b90046001600160601b0316905082565b60066020528160005260406000208181548110610d3e57600080fd5b6000918252602090912001546001600160a01b0381169250600160a01b90046001600160401b0316905082565b6000828152600560209081526040808320548151928301869052908201849052906060016040516020818303038152906040528051906020012060001c610db2919061273c565b9392505050565b6000818152600460205260409020546001600160a01b03163314610e1f5760405162461bcd60e51b815260206004820152601e60248201527f4f6e6c792063726561746f722063616e2063616e63656c20726166666c65000060448201526064016108b7565b60008181526004602081905260409091200154600160601b900465ffffffffffff164210610e8f5760405162461bcd60e51b815260206004820152601a60248201527f726166666c652068617320616c7265616479207374617274656400000000000060448201526064016108b7565b600081815260056020908152604080832080548251818502810185019093528083529192909190849084015b82821015610f435760008481526020908190206040805160a0810182526002860290920180546001600160a01b038082168552600160a01b918290046001600160601b0316858701526001928301549081169385019390935282046001600160401b03166060840152600160e01b90910460ff16151560808301529083529092019101610ebb565b50505050905060005b815181101561102157818181518110610f6757610f6761266c565b6020026020010151600001516001600160a01b03166323b872dd30848481518110610f9457610f9461266c565b602002602001015160400151858581518110610fb257610fb261266c565b6020026020010151602001516040518463ffffffff1660e01b8152600401610fdc939291906126af565b600060405180830381600087803b158015610ff657600080fd5b505af115801561100a573d6000803e3d6000fd5b50505050808061101990612750565b915050610f4c565b50506000908152600460208190526040822080546001600160a01b031916815560018101839055600281018390556003810192909255810180546001600160c01b031916905560050180546bffffffffffffffffffffffff19169055565b600061108b848461204f565b6040516323b872dd60e01b81529091506001600160a01b038416906323b872dd906110be903390309087906004016126af565b600060405180830381600087803b1580156110d857600080fd5b505af11580156110ec573d6000803e3d6000fd5b5050506000858152600560209081526040808320815160a0810183526001600160a01b0389811682526001600160601b03898116838701908152338487018181528b890180516001600160401b0390811660608901908152608089018d81528a5460018082018d559b8f528d8f209a519751978a16600160a01b988a168902176002909102909a01998a55935198909901805499519351989097166001600160e01b0319909916989098179188169093021760ff60e01b1916600160e01b951515959095029490941790925590518b87526008865284872092875291909452918420805492909116945092916111e491859116612769565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555050505050565b6000546001600160a01b031633146112385760405162461bcd60e51b81526004016108b790612794565b6112426000612184565b565b6000818152600460205260408120600501546001600160601b0316611268836112a8565b60008481526008602090815260408083206001600160a01b038916845290915290205461129e91906001600160601b03166126db565b610db29190612728565b6000806112b483610c1a565b905060006112c184610bc1565b90506112cd8183612698565b6002546112dc90612710612698565b6112e691906126db565b6001546112f581612710612698565b610baf91906126db565b60006001600160a01b038c1661131457600080fd5b428865ffffffffffff161161132857600080fd5b6000871161133557600080fd5b8b6001600160a01b03166323b872dd33308e6040518463ffffffff1660e01b8152600401611365939291906126af565b600060405180830381600087803b15801561137f57600080fd5b505af1158015611393573d6000803e3d6000fd5b5050600380549250905060006113a883612750565b919050559050604051806101200160405280336001600160a01b031681526020018881526020016000801b81526020018b6001600160a01b03168152602001876001600160601b0316815260200160006001600160601b031681526020018a65ffffffffffff1681526020018965ffffffffffff1681526020016127106001600160601b03168152506004600083815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550602082015181600101556040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160030160146101000a8154816001600160601b0302191690836001600160601b0316021790555060a08201518160040160006101000a8154816001600160601b0302191690836001600160601b0316021790555060c082015181600401600c6101000a81548165ffffffffffff021916908365ffffffffffff16021790555060e08201518160040160126101000a81548165ffffffffffff021916908365ffffffffffff1602179055506101008201518160050160006101000a8154816001600160601b0302191690836001600160601b03160217905550905050600560008281526020019081526020016000206040518060a001604052808e6001600160a01b031681526020018d6001600160601b03168152602001336001600160a01b031681526020016127106001600160401b0316815260200160001515815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a8154816001600160601b0302191690836001600160601b0316021790555060408201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160010160146101000a8154816001600160401b0302191690836001600160401b03160217905550608082015181600101601c6101000a81548160ff02191690831515021790555050506127106001600160401b0316600860008381526020019081526020016000206000336001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160601b0302191690836001600160601b0316021790555060005b848110156118bd57600086868381811061177a5761177a61266c565b905060200201602081019061178f9190612651565b6001600160a01b0316036117a257600080fd5b60008484838181106117b6576117b661266c565b90506020020160208101906117cb91906127c9565b6001600160401b0316116117de57600080fd5b60066000838152602001908152602001600020604051806040016040528088888581811061180e5761180e61266c565b90506020020160208101906118239190612651565b6001600160a01b031681526020018686858181106118435761184361266c565b905060200201602081019061185891906127c9565b6001600160401b03908116909152825460018101845560009384526020938490208351910180549490930151909116600160a01b026001600160e01b03199093166001600160a01b0390911617919091179055806118b581612750565b91505061175e565b509b9a5050505050505050505050565b600a60205281600052604060002081815481106118e957600080fd5b60009182526020909120015463ffffffff8116925064010000000090046001600160e01b0316905082565b6000828152600760205260408120548190819061193390600190612698565b90505b808210156119b9576000600261194c83856126fa565b6119569190612728565b6000878152600760205260409020805491925086918390811061197b5761197b61266c565b600091825260209091200154600160a01b90046001600160601b031610156119af576119a88160016126fa565b92506119b3565b8091505b50611936565b509392505050565b6000546001600160a01b031633146119eb5760405162461bcd60e51b81526004016108b790612794565b612710811115611a385760405162461bcd60e51b81526020600482015260186024820152770526f79616c7479206d757374206265203c3d2031303030360441b60448201526064016108b7565b600255565b6000546001600160a01b03163314611a675760405162461bcd60e51b81526004016108b790612794565b612710811115611ab45760405162461bcd60e51b81526020600482015260186024820152770526f79616c7479206d757374206265203c3d2031303030360441b60448201526064016108b7565b600155565b600082815260046020526040812060010154611adf906001600160601b038416906126db565b6000848152600460208190526040918290206003015491516323b872dd60e01b81523391810191909152306024820152604481018390529192506001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611b4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6f91906127f2565b50611b7b3384846121d4565b505050565b60056020528160005260406000208181548110611b9c57600080fd5b6000918252602090912060029091020180546001909101546001600160a01b038083169450600160a01b928390046001600160601b0316935081169181046001600160401b031690600160e01b900460ff1685565b600082815260046020526040812060010154611c17906001600160601b038416906126db565b9050803414611c595760405162461bcd60e51b815260206004820152600e60248201526d0a0e4d2c6ca40dad2e6dac2e8c6d60931b60448201526064016108b7565b611b7b3384846121d4565b6000611c708383611244565b6000838152600460208190526040822001549192506001600160601b039091169003611ccf5760405162461bcd60e51b815260206004820152600e60248201526d15da5b9b995c881b9bdd081cd95d60921b60448201526064016108b7565b60008111611d135760405162461bcd60e51b81526020600482015260116024820152704e6f2073616c657320746f20636c61696d60781b60448201526064016108b7565b6000828152600460205260409020600301546001600160a01b0316611dd2576000836001600160a01b03168260405160006040518083038185875af1925050503d8060008114611d7f576040519150601f19603f3d011682016040523d82523d6000602084013e611d84565b606091505b5050905080611dcc5760405162461bcd60e51b81526020600482015260146024820152734661696c656420746f2073656e642066756e647360601b60448201526064016108b7565b50505050565b6000828152600460208190526040918290206003015491516323b872dd60e01b815230918101919091526001600160a01b03858116602483015260448201849052909116906323b872dd906064016020604051808303816000875af1158015611e3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dcc91906127f2565b60008181526004602081815260409283902083516101208101855281546001600160a01b039081168252600183015493820193909352600282015494810194909452600381015491821660608501526001600160601b03600160a01b909204821660808501529182015480821660a085015265ffffffffffff600160601b8204811660c0860152600160901b9091041660e08401819052600590920154166101008301524211611f4c5760405162461bcd60e51b8152602060048201526014602482015273149859999b19481a185cc81b9bdd08195b99195960621b60448201526064016108b7565b60a08101516001600160601b031615611fa75760405162461bcd60e51b815260206004820152601860248201527f5365656420616c726561647920696e697469616c697a6564000000000000000060448201526064016108b7565b611fb0826122a6565b5050565b6000546001600160a01b03163314611fde5760405162461bcd60e51b81526004016108b790612794565b6001600160a01b0381166120435760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016108b7565b61204c81612184565b50565b60408051808201825260008082526020808301829052858252600681528382208054855181840281018401909652808652939492939091849084015b828210156120da57600084815260209081902060408051808201909152908401546001600160a01b0381168252600160a01b90046001600160401b03168183015282526001909201910161208b565b50505050905060005b815181101561213b57836001600160a01b03168282815181106121085761210861266c565b6020026020010151600001516001600160a01b031603612129575050610c14565b8061213381612750565b9150506120e3565b5060405162461bcd60e51b815260206004820152601c60248201527f506f6f6c207072697a652061646472657373206e6f7420666f756e640000000060448201526064016108b7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008281526007602052604081205490816121ef5782612240565b6000848152600760205260409020839061220a600185612698565b8154811061221a5761221a61266c565b6000918252602090912001546122409190600160a01b90046001600160601b0316612769565b6040805180820182526001600160a01b0397881681526001600160601b03928316602080830191825260009889526007815292882080546001810182559089529290972090519651909216600160a01b0295909616949094179390940192909255505050565b60408051436020820152600091016040516020818303038152906040526122cc90612814565b600081815260096020526040808220859055805160018082528183019092529293509091908160200160208202803683370190505060408051426020820152919250016040516020818303038152906040528051906020012060001c8160008151811061233b5761233b61266c565b602002602001018181525050611b7b828260008281526009602052604081205482519091839161236d5761236d61266c565b602090810291909101810151600092835260049182905260409092200180546bffffffffffffffffffffffff19166001600160601b039092169190911790555050565b6000602082840312156123c257600080fd5b5035919050565b80356001600160a01b03811681146123e057600080fd5b919050565b600080600080608085870312156123fb57600080fd5b612404856123c9565b966020860135965060408601359560600135945092505050565b6000806040838503121561243157600080fd5b50508035926020909101359150565b6000806040838503121561245357600080fd5b61245c836123c9565b946020939093013593505050565b80356001600160601b03811681146123e057600080fd5b60008060006060848603121561249657600080fd5b833592506124a6602085016123c9565b91506124b46040850161246a565b90509250925092565b600080604083850312156124d057600080fd5b823591506124e0602084016123c9565b90509250929050565b803565ffffffffffff811681146123e057600080fd5b60008083601f84011261251157600080fd5b5081356001600160401b0381111561252857600080fd5b6020830191508360208260051b850101111561254357600080fd5b9250929050565b60008060008060008060008060008060006101208c8e03121561256c57600080fd5b6125758c6123c9565b9a5061258360208d0161246a565b995061259160408d016123c9565b985061259f60608d016124e9565b97506125ad60808d016124e9565b965060a08c013595506125c260c08d0161246a565b94506001600160401b038060e08e013511156125dd57600080fd5b6125ed8e60e08f01358f016124ff565b90955093506101008d013581101561260457600080fd5b506126168d6101008e01358e016124ff565b81935080925050509295989b509295989b9093969950565b6000806040838503121561264157600080fd5b823591506124e06020840161246a565b60006020828403121561266357600080fd5b610db2826123c9565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156126aa576126aa612682565b500390565b6001600160a01b0393841681529190921660208201526001600160601b03909116604082015260600190565b60008160001904831182151516156126f5576126f5612682565b500290565b6000821982111561270d5761270d612682565b500190565b634e487b7160e01b600052601260045260246000fd5b60008261273757612737612712565b500490565b60008261274b5761274b612712565b500690565b60006001820161276257612762612682565b5060010190565b60006001600160601b0380831681851680830382111561278b5761278b612682565b01949350505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156127db57600080fd5b81356001600160401b0381168114610db257600080fd5b60006020828403121561280457600080fd5b81518015158114610db257600080fd5b80516020808301519190811015612835576000198160200360031b1b821691505b5091905056fea2646970667358221220c03aaf4159820ea690b3db0f7e839a7f99f4fd26b0a5b200174a58e5baf958a364736f6c634300080d0033";

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
