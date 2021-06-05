const puppeteer = require("puppeteer");
const id = "deepak841999@gmail.com";
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
    
    await tab.goto('https://www.linkedin.com/authwall?trk=gf&trkInfo=AQELgDGOS2SzTQAAAXnTjy-YcdKOFE_8a4CNGJOeKm3pAMNqqIaIBuxI1OTpl5PzVXWKg6GwaJ5YkmP86ndUTICx6QdN0Hy4kRfOYalFwEwh6kttbQXtT-_MMkr72mBKlNaaa2U=&originalReferer=https://www.pepcoding.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpepcoding-education%2F')
    await tab.click('button[ data-tracking-control-name="auth_wall_desktop_company-login-toggle" ]');
    await tab.type('input[placeholder="Email"]',yt);
    await tab.type('input[placeholder="Password"]',pw);
    await tab.click('button[id="login-submit"]');
    await tab.waitForSelector('button[data-control-name="topcard_follow_toggle"]',{visible:true});
    await tab.click('button[data-control-name="topcard_follow_toggle"]');

    })();