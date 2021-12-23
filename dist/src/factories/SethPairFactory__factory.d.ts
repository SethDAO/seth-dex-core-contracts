import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SethPairFactory, SethPairFactoryInterface } from "../SethPairFactory";
export declare class SethPairFactory__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_feeToSetter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SethPairFactory>;
    getDeployTransaction(_feeToSetter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SethPairFactory;
    connect(signer: Signer): SethPairFactory__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051612b30380380612b308339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055612acd806100636000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a2e74af61161005b578063a2e74af6146100f0578063c9c6539614610118578063e6a4390514610146578063f46901ed1461017457610088565b8063017e7e581461008d578063094b7415146100b15780631e3dd18b146100b9578063574f2ba3146100d6575b600080fd5b61009561019a565b604080516001600160a01b039092168252519081900360200190f35b6100956101a9565b610095600480360360208110156100cf57600080fd5b50356101b8565b6100de6101df565b60408051918252519081900360200190f35b6101166004803603602081101561010657600080fd5b50356001600160a01b03166101e5565b005b6100956004803603604081101561012e57600080fd5b506001600160a01b0381358116916020013516610265565b6100956004803603604081101561015c57600080fd5b506001600160a01b03813581169160200135166105aa565b6101166004803603602081101561018a57600080fd5b50356001600160a01b03166105d0565b6000546001600160a01b031681565b6001546001600160a01b031681565b600381815481106101c557fe5b6000918252602090912001546001600160a01b0316905081565b60035490565b6001546001600160a01b03163314610236576040805162461bcd60e51b815260206004820152600f60248201526e29b2ba341d102327a92124a22222a760891b604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156102ce576040805162461bcd60e51b815260206004820152601960248201527f536574683a204944454e544943414c5f41444452455353455300000000000000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106102f15783856102f4565b84845b90925090506001600160a01b038216610354576040805162461bcd60e51b815260206004820152601260248201527f536574683a205a45524f5f414444524553530000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600260209081526040808320858516845290915290205416156103ce576040805162461bcd60e51b815260206004820152601160248201527f536574683a20504149525f455849535453000000000000000000000000000000604482015290519081900360640190fd5b6060604051806020016103e090610650565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b03166001600160a01b031660601b8152601401826001600160a01b03166001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f56040805163485cc95560e01b81526001600160a01b038781166004830152868116602483015291519297509087169163485cc9559160448082019260009290919082900301818387803b1580156104b357600080fd5b505af11580156104c7573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602081815260408084208987168086529083528185208054978d1673ffffffffffffffffffffffffffffffffffffffff1998891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60026020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b03163314610621576040805162461bcd60e51b815260206004820152600f60248201526e29b2ba341d102327a92124a22222a760891b604482015290519081900360640190fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b61243b8061065e8339019056fe60806040526001600c5534801561001557600080fd5b5060405146908060526123e982396040805191829003605201822082820182526007835266053657468204c560cc1b6020938401528151808301835260018152603160f81b908401528151808401919091527f191ef5295d6686e1cfbc627af7227567f88fc570722a90724cfaca16bf5ef7f0818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b031916331790556122e7806101026000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610544578063d505accf1461054c578063dd62ed3e1461059d578063fff6cae9146105cb576101b9565b8063ba9a7a561461050e578063bc25cf7714610516578063c45a01551461053c576101b9565b80637ecebe00116100d35780637ecebe001461047557806389afcb441461049b57806395d89b41146104da578063a9059cbb146104e2576101b9565b80636a6278421461042157806370a08231146104475780637464fc3d1461046d576101b9565b806323b872dd116101665780633644e515116101405780633644e515146103db578063485cc955146103e35780635909c0d5146104115780635a3d549314610419576101b9565b806323b872dd1461037f57806330adf81f146103b5578063313ce567146103bd576101b9565b8063095ea7b311610197578063095ea7b3146103015780630dfe16811461034157806318160ddd14610365576101b9565b8063022c0d9f146101be57806306fdde031461024c5780630902f1ac146102c9575b600080fd5b61024a600480360360808110156101d457600080fd5b8135916020810135916001600160a01b03604083013516919081019060808101606082013564010000000081111561020b57600080fd5b82018360208201111561021d57600080fd5b8035906020019184600183028401116401000000008311171561023f57600080fd5b5090925090506105d3565b005b610254610b64565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028e578181015183820152602001610276565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d1610b9d565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61032d6004803603604081101561031757600080fd5b506001600160a01b038135169060200135610bc7565b604080519115158252519081900360200190f35b610349610bde565b604080516001600160a01b039092168252519081900360200190f35b61036d610bed565b60408051918252519081900360200190f35b61032d6004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610bf3565b61036d610c8d565b6103c5610cb1565b6040805160ff9092168252519081900360200190f35b61036d610cb6565b61024a600480360360408110156103f957600080fd5b506001600160a01b0381358116916020013516610cbc565b61036d610d61565b61036d610d67565b61036d6004803603602081101561043757600080fd5b50356001600160a01b0316610d6d565b61036d6004803603602081101561045d57600080fd5b50356001600160a01b0316611068565b61036d61107a565b61036d6004803603602081101561048b57600080fd5b50356001600160a01b0316611080565b6104c1600480360360208110156104b157600080fd5b50356001600160a01b0316611092565b6040805192835260208301919091528051918290030190f35b610254611433565b61032d600480360360408110156104f857600080fd5b506001600160a01b03813516906020013561146c565b61036d611479565b61024a6004803603602081101561052c57600080fd5b50356001600160a01b031661147f565b6103496115e5565b6103496115f4565b61024a600480360360e081101561056257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611603565b61036d600480360360408110156105b357600080fd5b506001600160a01b0381358116916020013516611810565b61024a61182d565b600c54600114610619576040805162461bcd60e51b815260206004820152600c60248201526b14d95d1a0e881313d0d2d15160a21b604482015290519081900360640190fd5b6000600c558415158061062c5750600084115b61067d576040805162461bcd60e51b815260206004820181905260248201527f536574683a20494e53554646494349454e545f4f55545055545f414d4f554e54604482015290519081900360640190fd5b600080610688610b9d565b5091509150816001600160701b0316871080156106ad5750806001600160701b031686105b6106fe576040805162461bcd60e51b815260206004820152601c60248201527f536574683a20494e53554646494349454e545f4c495155494449545900000000604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908916821480159061073c5750806001600160a01b0316896001600160a01b031614155b61078d576040805162461bcd60e51b815260206004820152601060248201527f536574683a20494e56414c49445f544f00000000000000000000000000000000604482015290519081900360640190fd5b8a1561079e5761079e828a8d61198a565b89156107af576107af818a8c61198a565b861561086a57886001600160a01b0316635bf687f3338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561085157600080fd5b505af1158015610865573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b1580156108b057600080fd5b505afa1580156108c4573d6000803e3d6000fd5b505050506040513d60208110156108da57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b15801561092657600080fd5b505afa15801561093a573d6000803e3d6000fd5b505050506040513d602081101561095057600080fd5b5051925060009150506001600160701b0385168a90038311610973576000610982565b89856001600160701b03160383035b9050600089856001600160701b031603831161099f5760006109ae565b89856001600160701b03160383035b905060008211806109bf5750600081115b610a10576040805162461bcd60e51b815260206004820152601f60248201527f536574683a20494e53554646494349454e545f494e5055545f414d4f554e5400604482015290519081900360640190fd5b6000610a44610a2684600363ffffffff611b2416565b610a38876103e863ffffffff611b2416565b9063ffffffff611b9016565b90506000610a5c610a2684600363ffffffff611b2416565b9050610a8d620f4240610a816001600160701b038b8116908b1663ffffffff611b2416565b9063ffffffff611b2416565b610a9d838363ffffffff611b2416565b1015610af0576040805162461bcd60e51b815260206004820152600760248201527f536574683a204b00000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610afe84848888611be8565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600781526020017f53657468204c500000000000000000000000000000000000000000000000000081525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610bd4338484611dc5565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610c78576001600160a01b0384166000908152600260209081526040808320338452909152902054610c53908363ffffffff611b9016565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c83848484611e27565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610d1b576040805162461bcd60e51b815260206004820152600f60248201527f536574683a20464f5242494444454e0000000000000000000000000000000000604482015290519081900360640190fd5b600680546001600160a01b039384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610db5576040805162461bcd60e51b815260206004820152600c60248201526b14d95d1a0e881313d0d2d15160a21b604482015290519081900360640190fd5b6000600c81905580610dc5610b9d565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610e1957600080fd5b505afa158015610e2d573d6000803e3d6000fd5b505050506040513d6020811015610e4357600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e9657600080fd5b505afa158015610eaa573d6000803e3d6000fd5b505050506040513d6020811015610ec057600080fd5b505190506000610edf836001600160701b03871663ffffffff611b9016565b90506000610efc836001600160701b03871663ffffffff611b9016565b90506000610f0a8787611ee1565b60005490915080610f4757610f336103e8610a38610f2e878763ffffffff611b2416565b61203f565b9850610f4260006103e8612091565b610f96565b610f936001600160701b038916610f64868463ffffffff611b2416565b81610f6b57fe5b046001600160701b038916610f86868563ffffffff611b2416565b81610f8d57fe5b04612127565b98505b60008911610fd55760405162461bcd60e51b815260040180806020018281038252602381526020018061226d6023913960400191505060405180910390fd5b610fdf8a8a612091565b610feb86868a8a611be8565b811561101b57600854611017906001600160701b0380821691600160701b90041663ffffffff611b2416565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c546001146110db576040805162461bcd60e51b815260206004820152600c60248201526b14d95d1a0e881313d0d2d15160a21b604482015290519081900360640190fd5b6000600c819055806110eb610b9d565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561114757600080fd5b505afa15801561115b573d6000803e3d6000fd5b505050506040513d602081101561117157600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b1580156111bf57600080fd5b505afa1580156111d3573d6000803e3d6000fd5b505050506040513d60208110156111e957600080fd5b5051306000908152600160205260408120549192506112088888611ee1565b6000549091508061121f848763ffffffff611b2416565b8161122657fe5b049a508061123a848663ffffffff611b2416565b8161124157fe5b04995060008b118015611254575060008a115b61128f5760405162461bcd60e51b81526004018080602001828103825260238152602001806122906023913960400191505060405180910390fd5b611299308461213f565b6112a4878d8d61198a565b6112af868d8c61198a565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156112f557600080fd5b505afa158015611309573d6000803e3d6000fd5b505050506040513d602081101561131f57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561136b57600080fd5b505afa15801561137f573d6000803e3d6000fd5b505050506040513d602081101561139557600080fd5b505193506113a585858b8b611be8565b81156113d5576008546113d1906001600160701b0380821691600160701b90041663ffffffff611b2416565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600781526020017f534554482d4c500000000000000000000000000000000000000000000000000081525081565b6000610bd4338484611e27565b6103e881565b600c546001146114c5576040805162461bcd60e51b815260206004820152600c60248201526b14d95d1a0e881313d0d2d15160a21b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b039485169490931692611574928592879261156f926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561153757600080fd5b505afa15801561154b573d6000803e3d6000fd5b505050506040513d602081101561156157600080fd5b50519063ffffffff611b9016565b61198a565b600854604080516370a0823160e01b815230600482015290516115db928492879261156f92600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561153757600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b42841015611658576040805162461bcd60e51b815260206004820152600d60248201527f536574683a204558504952454400000000000000000000000000000000000000604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611773573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906117a95750886001600160a01b0316816001600160a01b0316145b6117fa576040805162461bcd60e51b815260206004820152601760248201527f536574683a20494e56414c49445f5349474e4154555245000000000000000000604482015290519081900360640190fd5b611805898989611dc5565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611873576040805162461bcd60e51b815260206004820152600c60248201526b14d95d1a0e881313d0d2d15160a21b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611983926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156118c457600080fd5b505afa1580156118d8573d6000803e3d6000fd5b505050506040513d60208110156118ee57600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561193b57600080fd5b505afa15801561194f573d6000803e3d6000fd5b505050506040513d602081101561196557600080fd5b50516008546001600160701b0380821691600160701b900416611be8565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b60208310611a375780518252601f199092019160209182019101611a18565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611a99576040519150601f19603f3d011682016040523d82523d6000602084013e611a9e565b606091505b5091509150818015611acc575080511580611acc5750808060200190516020811015611ac957600080fd5b50515b611b1d576040805162461bcd60e51b815260206004820152601560248201527f536574683a205452414e534645525f4641494c45440000000000000000000000604482015290519081900360640190fd5b5050505050565b6000811580611b3f57505080820282828281611b3c57fe5b04145b610bd8576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610bd8576040805162461bcd60e51b815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6001600160701b038411801590611c0657506001600160701b038311155b611c57576040805162461bcd60e51b815260206004820152600e60248201527f536574683a204f564552464c4f57000000000000000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611c8757506001600160701b03841615155b8015611c9b57506001600160701b03831615155b15611d0c578063ffffffff16611cc985611cb4866121dd565b6001600160e01b03169063ffffffff6121ef16565b600980546001600160e01b03929092169290920201905563ffffffff8116611cf484611cb4876121dd565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff16600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611e50908263ffffffff611b9016565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611e85908263ffffffff61221416565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f3257600080fd5b505afa158015611f46573d6000803e3d6000fd5b505050506040513d6020811015611f5c57600080fd5b5051600b546001600160a01b03821615801594509192509061202b578015612026576000611f9f610f2e6001600160701b0388811690881663ffffffff611b2416565b90506000611fac8361203f565b905080821115612023576000611fda611fcb848463ffffffff611b9016565b6000549063ffffffff611b2416565b90506000611fff83611ff386600563ffffffff611b2416565b9063ffffffff61221416565b9050600081838161200c57fe5b049050801561201f5761201f8782612091565b5050505b50505b612037565b8015612037576000600b555b505092915050565b60006003821115612082575080600160028204015b8181101561207c5780915060028182858161206b57fe5b04018161207457fe5b049050612054565b5061208c565b811561208c575060015b919050565b6000546120a4908263ffffffff61221416565b60009081556001600160a01b0383168152600160205260409020546120cf908263ffffffff61221416565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008183106121365781612138565b825b9392505050565b6001600160a01b038216600090815260016020526040902054612168908263ffffffff611b9016565b6001600160a01b03831660009081526001602052604081209190915554612195908263ffffffff611b9016565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161220c57fe5b049392505050565b80820182811015610bd8576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe536574683a20494e53554646494349454e545f4c49515549444954595f4d494e544544536574683a20494e53554646494349454e545f4c49515549444954595f4255524e4544a265627a7a7231582072b750e93b49c0cd37ed3902a5e3ec009ffc6a2b04b084841bd0d5d24710372f64736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429a265627a7a72315820dee639ae9234f1d6bc7e1e5ab78aae550ebde2d39e4a30c4762c617b7057aff164736f6c63430005100032";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SethPairFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SethPairFactory;
}
