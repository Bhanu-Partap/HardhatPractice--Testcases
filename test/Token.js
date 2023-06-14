//================Token Contract ==================//

const { expect } = require("chai");

describe("Token contract", () => {
  let Token, token, owner, addr1, addr2;

  beforeEach(async () => {
    token = await ethers.getContractFactory("Token");
    Token = await token.deploy();
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });

  describe("Deployment", () => {
    it("should set the right owner", async () => {
      expect(await Token.owner()).to.equal(owner.address);
    });
    it("should assign the total supply of tokens to the owner", async () => {
      const ownerBalance = await Token.balanceOf(owner.address);
      expect(await Token.total_Supply()).to.equal(ownerBalance);
    });
    it("should transfer the right amount", async () => {
      expect(await Token.total_Supply()).to.equal(10000);
    });

    it("should it tranferring the amount properly", async () => {
      await Token.transfer(addr1.address, 500);
      expect(await Token.balanceOf(addr1.address)).to.equal(500);

      await Token.connect(addr1).transfer(addr2.address, 500);
      expect(await Token.balanceOf(addr2.address)).to.equal(500);
    });

    it('should tell the right balance of the user',async()=>{
      await Token.balanceOf()
    })




    // it("Should assign the total supply of tokens to the owner", async () => {
    //   const ownerBalance = await Token.balanceOf(owner.address);
    //   expect(await Token.total_Supply()).to.equal(ownerBalance);
    // });
  });

  // descibe("Transcations", () => {
  //   it("Should transfer tokens between accounts", async () => {
  //     await token.transfer(addr1.address, 50);
  //     const addr1Balance = await token.balanceOf(addr1.address);
  //     expect(addr1Balance).to.equal(50);
  //   });

  //   it("Should fail if sender doesnt have enought tokens", async () => {
  //     const initialOwnerBalanace = await token.balanceOf(owner.address);

  //     await expect(
  //       token.connect(addr1).transfer(owner.address, 1)
  //     ).to.be.revertedWith("Not enough tokens");

  //     expect(await token.balanceOf(owner.address)).to.equal(
  //       initialOwnerBalanace
  //     );
  //   });
  //   it('Should update the balance after transfers', async()=>{
  //     const initialOwnerBalanace = await token.balanceOf(owner.address);

  //   })
  // });
});
