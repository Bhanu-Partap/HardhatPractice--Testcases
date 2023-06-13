const {expect} = require("chai")

describe("Crowdfunding Contract", ()=>{
    beforeEach(async()=>{
        crowdfunding = await ethers.getContractFactory("Crowdfunding");
        Crowdfunding = await crowdfunding.deploy();
        []
    })
})