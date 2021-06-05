
const puppeteer = require("puppeteer");

const id = "deepmkjl499@gmail.com";
const yt="deepak841999@gmail.com";
const pw = "Deepak@786";
//let challenges = require("./challenges");

(async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
      
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.pepcoding.com/login");
await tab.type('input[placeholder="email"]',yt);
 await tab.type('input[placeholder="Password"]',pw);
await tab.click('button[class="col l8 s10 m10 offset-m1 offset-s1 offset-l2 btn btn-large "]');
await tab.waitFor(2000);
await tab.click('body > nav > div > div > ul > li:nth-child(7) > a');
let ta= await browser.newPage();
//    // let tab = pages[0];
 
  //await ta.waitForTimeout(2000); 
    })();

