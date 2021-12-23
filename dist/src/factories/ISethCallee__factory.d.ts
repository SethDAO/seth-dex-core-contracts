import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISethCallee, ISethCalleeInterface } from "../ISethCallee";
export declare class ISethCallee__factory {
    static readonly abi: {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ISethCalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISethCallee;
}
