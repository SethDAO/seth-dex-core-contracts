import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISethPair, ISethPairInterface } from "../ISethPair";
export declare class ISethPair__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): ISethPairInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISethPair;
}
