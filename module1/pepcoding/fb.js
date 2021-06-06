const puppeteer = require("puppeteer");
const id = "deepmkjl499@gmail.com";

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
      await tab.got
      
// await wts.goto("https://web.whatsapp.com/send?phone=919355142903");
// const inp = await page.$(
//    " #main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
//   );

//   for (let i = 0; i < 5; i++) {
//     await inp.type("ok this is magic");
//     await wts.keyboard.press("Enter");
//   }
//await tab.waitForSelector('span[class="_45ky"]',{visible:true});
//let wts= await browser.newPage();

//await wts.goto('https://api.whatsapp.com/send?phone=919355142903');
//await wts.goto('https://api.whatsapp.com/send?phone=919355142903', { waitUntil: 'networkidle2' });
//await wts.click('span[class="_45ky"]');
//let wts= await browser.newPage();
//await tab.waitFor(2000);
//await wts.keyboard.press('ArrowLeft');
//await wts.keyboard.down('Enter');

//await tab.click('a[id="action-button"]');

    })();
