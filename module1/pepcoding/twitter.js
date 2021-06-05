
const puppeteer = require("puppeteer");

const id = "deepmkjl499@gmail.com";
const yt="deepak841999@gmail.com";
const pw = "Deepak@786";
const tw="@Deep00482792";
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
let twe= await browser.newPage();
//    // let tab = pages[0];
 await twe.goto("https://twitter.com/pepcoding");
  await twe.waitForTimeout(2000); 
  await twe.waitForSelector('div[ data-testid="1195297443300007936-follow"]',{visible:true});
  await twe.click('div[ data-testid="1195297443300007936-follow"]');
  await twe.click('#layers > div.css-1dbjc4n.r-aqfbo4.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj.r-ipm5af > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-1kihuf0.r-18u37iz.r-1pi2tsx.r-1777fci.r-1pjcn9w.r-xr3zp9.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-kemksi.r-1867qdf.r-1jgb5lz.r-pm9dpa.r-1ye8kvj.r-1rnoaur.r-13qz1uu > div > div.css-1dbjc4n.r-1awozwy.r-16y2uox > div > div.css-1dbjc4n.r-1ydw1k6.r-hvns9x > div.css-1dbjc4n.r-1ifxtd0.r-13qz1uu > a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-1w2pmg.r-1wzrnnt.r-1pl7oy7.r-snto4y.r-1ny4l3l.r-1dye5f7.r-o7ynqc.r-6416eg.r-lrvibr > div');
await twe.waitForSelector('input[type="text"]',{visible:true});
  await twe.type('input[type="text"]',tw);
  await twe.type('input[type="password"]',pw);
  await twe.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div.css-1dbjc4n.r-13qz1uu > form > div > div:nth-child(8) > div > div');
await twe.waitForSelector('div[data-testid="1195297443300007936-follow"]',{visible:true});
  await twe.click('div[data-testid="1195297443300007936-follow"]');

    })();