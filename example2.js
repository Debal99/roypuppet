const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('My second puppeteer test',()=>{

  before(async function(){

     browser = await puppeteer.launch()
    page = await browser.newPage()
  })

it ('My second test step', async()=>{
await page.goto('https://lab5298.lab.pega.com/prweb/')
await page.type('#txtUserID', 'TestInfinityUser')
await page.type('#txtPassword', 'rules')
await page.click('#sub')
await page.waitForSelector("div[data-node-id='HomeHeader'] .header-bar .header-title")
var searchValue = await page.$$("div[data-node-id='HomeHeader'] .header-bar .header-title");
console.log(searchValue)
//expect(searchValue).to.equal("Puppeteer")

})

after(async function(){
  await browser.close()
})

})
