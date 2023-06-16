const { expect } = require("chai");

describe("Crowdfunding Contract", () => {
  let crowdfunding, Crowdfunding, owner, addr1, addr2;
  beforeEach(async () => {
    crowdfunding = await ethers.getContractFactory("CrowdFunding");
    Crowdfunding = await crowdfunding.deploy();
    [owner, addr1, addr2] = await ethers.getSigners();
  });
  describe("Test case", () => {
    it("should it returning the right address", async () => {
    await Crowdfunding.setProjectDetails(1,"bhanu","hellloooo",50,20); 
    expect(await Crowdfunding.userProjects.call(1)).to.equal(owner.address);
    });
  });
});
