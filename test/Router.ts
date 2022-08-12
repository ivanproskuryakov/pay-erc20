import {ethers} from "hardhat";
import {expect} from "chai";

describe("Router", function () {
  it("Router should transfer tokens from addrA to addrB", async function () {
    const [addrA, addrB] = await ethers.getSigners();

    const TokenMock = await ethers.getContractFactory("TokenMock");
    const tokenMock = await TokenMock.deploy('TokenA', 'TOKENA');

    const Router = await ethers.getContractFactory("Router");
    const router = await Router.deploy();

    const amount = 1000000;

    await tokenMock.mint(addrA.address, amount);
    await tokenMock.approve(router.address, 10);

    // console.log('addrA.address', addrA.address);
    // console.log('addrB.address', addrB.address);
    // console.log('router.address', router.address);
    // console.log('tokenMock.address', tokenMock.address);

    await router.connect(addrA).transfer(
      tokenMock.address,
      addrB.address,
      ethers.BigNumber.from(10),
    );

    // console.log(await tokenMock.balanceOf(addrA.address));
    // console.log(await tokenMock.balanceOf(addrB.address));
    // console.log(await tokenMock.balanceOf(router.address));

    // expect(await tokenMock.balanceOf(router.address)).to.equal(1);
    expect(await tokenMock.balanceOf(addrA.address)).to.equal(amount - 10);
    expect(await tokenMock.balanceOf(addrB.address)).to.equal(10);
    // expect(await tokenMock.balanceOf(addrA.address)).to.equal(1000000 - 1);
  });

});
