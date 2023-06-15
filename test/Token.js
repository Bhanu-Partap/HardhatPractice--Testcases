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

    it("should tell the right balance of the user", async () => {
      expect(await Token.balanceOf(addr1.address)).to.equal(0);
    });
    it("address of contract should not be empty", async () => {
      expect(await Token.contractAddress()).to.not.be.null;
      // expect (await Token.contractAddress()).to.equal(0);//this will fail
    });

    it("Is user eligible for transfer(tokens available or not)", async () => {
      // console.log(await Token.connect(addr2.address).transfer(addr1.address,50));
      await expect(Token.connect(addr1).transfer(addr2.address,50)).to.revertedWith("Not enough Tokens");
      
    });

    it('added number is giving the right sum',async()=>{
      const addnumber = await Token.addSum(5,6);
      expect(addnumber).to.equal(11);   
    })

    it('added number is giving the right subtraction',async()=>{
      const subtractnumber = await Token.subtractSum(6,5);
      expect(subtractnumber).to.equal(1);   
    })
  }); 
});
