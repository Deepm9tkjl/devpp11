const puppeteer = require("puppeteer");
const int="de_ep9294";
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
let linkedin= await browser.newPage();
//in
await linkedin.goto('https://www.linkedin.com/authwall?trk=gf&trkInfo=AQELgDGOS2SzTQAAAXnTjy-YcdKOFE_8a4CNGJOeKm3pAMNqqIaIBuxI1OTpl5PzVXWKg6GwaJ5YkmP86ndUTICx6QdN0Hy4kRfOYalFwEwh6kttbQXtT-_MMkr72mBKlNaaa2U=&originalReferer=https://www.pepcoding.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpepcoding-education%2F')
    await linkedin.click('button[ data-tracking-control-name="auth_wall_desktop_company-login-toggle" ]');
    await linkedin.type('input[placeholder="Email"]',yt);
    await linkedin.type('input[placeholder="Password"]',pw);
    await linkedin.click('button[id="login-submit"]');
    await linkedin.waitForSelector('button[data-control-name="topcard_follow_toggle"]',{visible:true});
    await linkedin.click('button[data-control-name="topcard_follow_toggle"]');
await linkedin.close();
//yt
let ta= await browser.newPage();
await ta.goto("https://www.youtube.com/pepcoding");
    await ta.waitForTimeout(2000); 
  await ta.click('tp-yt-paper-button[class="style-scope ytd-button-renderer style-destructive size-default" ]');
  await ta.click(' tp-yt-paper-button[class="style-scope ytd-button-renderer style-blue-text size-default"]');
  await ta.waitForSelector('#identifierId',{visible:true});
  await ta.type('#identifierId',id);
  await ta.click('#identifierNext > div > button > span');
  await ta.waitForSelector('input[type="password"]',{visible:true});
  await ta.type('input[type="password"]',pw)
  await ta.click('#passwordNext > div > button > span');
  await ta.waitForSelector('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]',{visible:true});
  await ta.click('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]');
  await ta.click('yt-formatted-string[class="style-scope ytd-subscribe-button-renderer"]');
  await ta.close() ;
//insta
let pag = await browser.newPage();
    
    await pag.goto('https://www.instagram.com/pepcoding/');
    await pag.waitForTimeout(2000);
    await pag.waitForSelector('#loginForm > div > div:nth-child(1) > div > label > input',{visible:true});
    await pag.click('#loginForm > div > div:nth-child(1) > div > label > input');
    await pag.type('#loginForm > div > div:nth-child(1) > div > label > input',id);
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
//twitter
let twe= await browser.newPage();
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
await twe.close();
//quora
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
//autoclassjoin

await tab.click('i[class="svg-user svg-header"]');
await tab.click('#ddlUserProfile > li:nth-child(1) > a > div > span');
await tab.waitForSelector('img[alt="The Placement Program Pitampura Apr 19 2021"]',{visible:true});
await  tab.click('img[alt="The Placement Program Pitampura Apr 19 2021"]');
await tab.waitForSelector('button[class="btn joinZoomMeeting"]',{visible:true});
await tab.click('button[class="btn joinZoomMeeting"]');
await tab.waitForSelector('button[type="button"]#login > div > div.form > div:nth-child(2) > div > button:nth-child(1)',{visible:true});
await tab.click('button[type="button"]#login > div > div.form > div:nth-child(2) > div > button:nth-child(1)');
await tab.close();
})();