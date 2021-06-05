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
await tab.goto("https://www.youtube.com/pepcoding");
    
  await tab.click('tp-yt-paper-button[class="style-scope ytd-button-renderer style-destructive size-default" ]');
  await tab.click(' tp-yt-paper-button[class="style-scope ytd-button-renderer style-blue-text size-default"]');
  await tab.waitForSelector('#identifierId',{visible:true});
  await tab.type('#identifierId',id);
  await tab.click('#identifierNext > div > button > span');
  await tab.waitForSelector('input[type="password"]',{visible:true});
  await tab.type('input[type="password"]',pw)
  await tab.click('#passwordNext > div > button > span');
  await tab.waitForSelector('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]',{visible:true});
  await tab.click('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]');
  await tab.click('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]');
  
//  await tab.type()
    })();