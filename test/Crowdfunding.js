const { expect } = require("chai");

describe("Crowdfunding Contract", () => {
  let crowdfunding, Crowdfunding, owner, addr1, addr2;
  beforeEach(async () => {
    crowdfunding = await ethers.getContractFactory("CrowdFunding");
    Crowdfunding = await crowdfunding.deploy();
    [owner, addr1, addr2] = await ethers.getSigners();
  });
  describe("Test case", () => {
    it("should returning the right address", async () => {
      await Crowdfunding.setProjectDetails(1,"bhanu","hellloooo",50,20); 
      const a = await (Crowdfunding.userProjects(1))
    expect(await (a._owner)).to.equal(owner.address);
    });

    it("should returning the right name", async () => {
      await Crowdfunding.setProjectDetails(1,"bhanu","hellloooo",50,20); 
      const a = await (Crowdfunding.userProjects(1))
    expect(await (a.name)).to.equal("bhanu");
    });

    it("should returning the right name", async () => {
      await Crowdfunding.setProjectDetails(1,"bhanu","hellloooo",50,20); 
      await Crowdfunding.setProjectDetails(2,"partap","faketory",100,200); 
      const a = await (Crowdfunding.userProjects(2))
    expect(await (a.name)).to.equal("partap");
    });

    it("should returning the right contribute amount",async()=>{
      await Crowdfunding.setProjectDetails(1,"bhanu","hellloooo",50,20); 
      const contri = await Crowdfunding.contribute(userProjects(1)._owner);
      expect(await contri).not.to.be.null;
    })
  });
});
