const puppeteer = require("puppeteer");
const int="7827504851";
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
let pag = await browser.newPage();
    
    await pag.goto('https://www.instagram.com/pepcoding/');
    await pag.waitForTimeout(2000);
    await pag.waitForSelector('#loginForm > div > div:nth-child(1) > div > label > input',{visible:true});
    await pag.click('#loginForm > div > div:nth-child(1) > div > label > input');
    await pag.type('#loginForm > div > div:nth-child(1) > div > label > input',int);
    await pag.type('input[aria-label=Password]',pw);
   
   await Promise.all([
    pag.waitForNavigation({ waitUntil: "networkidle2" }),
    pag.click("button[type='submit']")
]);

   await pag.type("input[placeholder='Search']", "pepcoding");
   await pag.waitForSelector('._01UL2 .fuqBx a[href="/pepcoding/"]', {visible: true});
   await pag.click('._01UL2 .fuqBx a[href="/pepcoding/"]');
   await pag.waitForSelector('button[class="_5f5mN       jIbKX  _6VtSN     yZn4P   "]',{visible:true});
  await pag.click('button[class="_5f5mN       jIbKX  _6VtSN     yZn4P   "]');
  await pag.close() ;

})();