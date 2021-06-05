
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
let quo= await browser.newPage();
await quo.waitForTimeout(2000);
await quo.goto('https://www.quora.com/search?q=pepcoding');
await quo.click('#mainContent > div > div > div:nth-child(2) > div:nth-child(1) > div > div > a > div > div > div.q-box.qu-flex--none.qu-display--inline-flex.qu-ml--medium > div > button');
await quo.click('div[class="q-text qu-display--inline-flex qu-alignItems--center qu-overflow--hidden puppeteer_test_button_text qu-medium qu-color--white"]');
await quo.waitForSelector('#root > div:nth-child(2) > div > div > div.q-flex.qu-alignItems--center.qu-justifyContent--center.qu-overflow--hidden.qu-zIndex--alert > div > div.q-flex.qu-mt--medium.qu-justifyContent--center > div > span > span.CssComponent-sc-1oskqb9-0.AbstractSeparatedItems___StyledCssComponent-sc-46kfvf-0.bxBZxD > div',{visible:true});
await quo.click('#root > div:nth-child(2) > div > div > div.q-flex.qu-alignItems--center.qu-justifyContent--center.qu-overflow--hidden.qu-zIndex--alert > div > div.q-flex.qu-mt--medium.qu-justifyContent--center > div > span > span.CssComponent-sc-1oskqb9-0.AbstractSeparatedItems___StyledCssComponent-sc-46kfvf-0.bxBZxD > div');
await quo.waitForSelector(' input[placeholder="Your email"]',{visible:true});
await quo.type(' input[placeholder="Your email"]',id);
await quo.type(' input[placeholder="Your password"]',pw);
await quo.keyboard.down('Enter');
await page.keyboard.up('Enter');
await quo.waitForSelector('#mainContent > div > div > div:nth-child(2) > div:nth-child(1) > div > div > a > div > div > div.q-box.qu-flex--none.qu-display--inline-flex.qu-ml--medium > div > button > div > span > span > svg > g > path',{visible:true});
await quo.click('#mainContent > div > div > div:nth-child(2) > div:nth-child(1) > div > div > a > div > div > div.q-box.qu-flex--none.qu-display--inline-flex.qu-ml--medium > div > button > div > span > span > svg > g > path');
await quo.close() ;
//let ta= await browser.newPage();
//    // let tab = pages[0];
 
  //await ta.waitForTimeout(2000); 
    })();