import {ethers} from "hardhat";
import {expect} from "chai";

describe("Router", function () {
  it("Router should transfer tokens from addrA to addrB", async function () {
    const [addrA, addrB] = await ethers.getSigners();

    const TokenMock = await ethers.getContractFactory("TokenMock");
    const tokenMock = await TokenMock.deploy('TokenA', 'TOKENA');

    const Router = await ethers.getContractFactory("Router");
    const router = await Router.deploy();

    await tokenMock.mint(addrA.address, '1000');

    console.log('addrA.address', addrA.address);
    console.log('addrB.address', addrB.address);
    console.log('router.address', router.address);
    console.log('token.address', tokenMock.address);

    await router.connect(addrB).transfer(
      tokenMock.address,
      addrA.address,
    );

    expect(await tokenMock.balanceOf(addrA.address)).to.equal(1000);
  });

});
