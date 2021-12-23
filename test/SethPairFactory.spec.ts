import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers";
import chai, { expect } from "chai";
import { ethers } from "hardhat";
import { smock } from "@defi-wonderland/smock";

import { getCreate2Address, bigNumberify } from "./shared/utilities";
import { SethPairFactory, SethPairFactory__factory, SethPair__factory } from "../types";

const { AddressZero } = ethers.constants;
const { keccak256 } = ethers.utils;

chai.use(smock.matchers);

const TEST_ADDRESSES: [string, string] = [
    "0x1000000000000000000000000000000000000000",
    "0x2000000000000000000000000000000000000000",
];

describe("SethPairFactory", () => {
    let wallet: SignerWithAddress;
    let other: SignerWithAddress;
    let factory: SethPairFactory;

    beforeEach(async () => {
        [wallet, other] = await ethers.getSigners();
        factory = await new SethPairFactory__factory(wallet).deploy(wallet.address);
    });

    it("feeTo, feeToSetter, allPairsLength", async () => {
        expect(await factory.feeTo()).to.eq(AddressZero);
        expect(await factory.feeToSetter()).to.eq(wallet.address);
        expect(await factory.allPairsLength()).to.eq(0);
    });

    it("init code hash", async () => {
        // To be copied and pasted manually in "Library" contract of "periphery" repository
        const bytecode = SethPair__factory.bytecode;
        expect(keccak256(bytecode)).to.eq(
            "0xee0a07491a10045cc1ebcc3bfe7234d24f00c7cbccf98de481e8f14bbe351c5b"
        );
    });

    async function createPair(tokens: [string, string]) {
        const tokensReversed: [string, string] = [tokens[1], tokens[0]];
        const bytecode = SethPair__factory.bytecode;
        const create2Address = getCreate2Address(factory.address, tokens, bytecode);
        await expect(factory.createPair(...tokens))
            .to.emit(factory, "PairCreated")
            .withArgs(TEST_ADDRESSES[0], TEST_ADDRESSES[1], create2Address, bigNumberify(1));

        await expect(factory.createPair(...tokens)).to.be.reverted; // Seth: PAIR_EXISTS
        await expect(factory.createPair(...tokensReversed)).to.be.reverted; // Seth: PAIR_EXISTS
        expect(await factory.getPair(...tokens)).to.eq(create2Address);
        expect(await factory.getPair(...tokensReversed)).to.eq(create2Address);
        expect(await factory.allPairs(0)).to.eq(create2Address);
        expect(await factory.allPairsLength()).to.eq(1);

        const pair = new SethPair__factory(wallet).attach(create2Address);
        expect(await pair.factory()).to.eq(factory.address);
        expect(await pair.token0()).to.eq(TEST_ADDRESSES[0]);
        expect(await pair.token1()).to.eq(TEST_ADDRESSES[1]);
    }

    it("createPair", async () => {
        await createPair(TEST_ADDRESSES);
    });

    it("createPair:reverse", async () => {
        await createPair(TEST_ADDRESSES.slice().reverse() as [string, string]);
    });

    it("createPair:gas", async () => {
        const tx = await factory.createPair(...TEST_ADDRESSES);
        const receipt = await tx.wait();
        expect(receipt.gasUsed).to.eq(2050019);
    });

    it("setFeeTo", async () => {
        await expect(factory.connect(other).setFeeTo(other.address)).to.be.revertedWith(
            "Seth: FORBIDDEN"
        );
        await factory.setFeeTo(wallet.address);
        expect(await factory.feeTo()).to.eq(wallet.address);
    });

    it("setFeeToSetter", async () => {
        await expect(factory.connect(other).setFeeToSetter(other.address)).to.be.revertedWith(
            "Seth: FORBIDDEN"
        );
        await factory.setFeeToSetter(other.address);
        expect(await factory.feeToSetter()).to.eq(other.address);
        await expect(factory.setFeeToSetter(wallet.address)).to.be.revertedWith("Seth: FORBIDDEN");
    });
});
