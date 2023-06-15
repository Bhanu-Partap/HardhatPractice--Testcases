const { expect } = require("chai");

describe("Crowdfunding Contract", () => {
  let crowdfunding, Crowdfunding, owner, addr1, addr2;
  beforeEach(async () => {
    crowdfunding = await ethers.getContractFactory("Crowdfunding");
    Crowdfunding = await crowdfunding.deploy();
    [owner, addr1, addr2] = await ethers.getSigners();
  });
  describe("Test case", () => {
    it("should it returning the right value", async () => {
      await Crowdfunding.contribute(addr1.address.call(1)).not.to.be(owner);
    });
  });
});
