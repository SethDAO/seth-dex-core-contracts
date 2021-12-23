import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SethLP, SethLPInterface } from "../SethLP";
export declare class SethLP__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SethLP>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SethLP;
    connect(signer: Signer): SethLP__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405146908060526109bf82396040805191829003605201822082820182526007835266053657468204c560cc1b6020938401528151808301835260018152603160f81b908401528151808401919091527f191ef5295d6686e1cfbc627af7227567f88fc570722a90724cfaca16bf5ef7f0818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c090940190528251920191909120600355506108d4806100eb6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461026b578063a9059cbb14610273578063d505accf1461029f578063dd62ed3e146102f2576100df565b80633644e5151461021757806370a082311461021f5780637ecebe0014610245576100df565b806323b872dd116100bd57806323b872dd146101bb57806330adf81f146101f1578063313ce567146101f9576100df565b806306fdde03146100e4578063095ea7b31461016157806318160ddd146101a1575b600080fd5b6100ec610320565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018d6004803603604081101561017757600080fd5b506001600160a01b038135169060200135610359565b604080519115158252519081900360200190f35b6101a9610370565b60408051918252519081900360200190f35b61018d600480360360608110156101d157600080fd5b506001600160a01b03813581169160208101359091169060400135610376565b6101a9610410565b610201610434565b6040805160ff9092168252519081900360200190f35b6101a9610439565b6101a96004803603602081101561023557600080fd5b50356001600160a01b031661043f565b6101a96004803603602081101561025b57600080fd5b50356001600160a01b0316610451565b6100ec610463565b61018d6004803603604081101561028957600080fd5b506001600160a01b03813516906020013561049c565b6102f0600480360360e08110156102b557600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356104a9565b005b6101a96004803603604081101561030857600080fd5b506001600160a01b03813581169160200135166106b6565b6040518060400160405280600781526020017f53657468204c500000000000000000000000000000000000000000000000000081525081565b60006103663384846106d3565b5060015b92915050565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146103fb576001600160a01b03841660009081526002602090815260408083203384529091529020546103d6908363ffffffff61073516565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b61040684848461078d565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60016020526000908152604090205481565b60046020526000908152604090205481565b6040518060400160405280600781526020017f534554482d4c500000000000000000000000000000000000000000000000000081525081565b600061036633848461078d565b428410156104fe576040805162461bcd60e51b815260206004820152600d60248201527f536574683a204558504952454400000000000000000000000000000000000000604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015610619573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061064f5750886001600160a01b0316816001600160a01b0316145b6106a0576040805162461bcd60e51b815260206004820152601760248201527f536574683a20494e56414c49445f5349474e4154555245000000000000000000604482015290519081900360640190fd5b6106ab8989896106d3565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b8082038281111561036a576040805162461bcd60e51b815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6001600160a01b0383166000908152600160205260409020546107b6908263ffffffff61073516565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546107eb908263ffffffff61084716565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b8082018281101561036a576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfea265627a7a72315820e0e67000f78b0f9247df234a245daf2ac0356f1bf19243fadae5bea2c3715bea64736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";
    static readonly abi: ({
        inputs: never[];
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
    static createInterface(): SethLPInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SethLP;
}
