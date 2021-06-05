const puppeteer = require("puppeteer");
const id = "deepak841999@gmail.com";
const ins="de_ep9294";
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
    await tab.goto('https://www.instagram.com/accounts/login/');
    await tab.type('input[aria-label="Phone number, username, or email"]',ins);
    await tab.type('input[aria-label="password"]',pw)
    await tab.click('button[class="sqdOP  L3NKy   y3zKF     "]');
    
    await tab.click('button[class="sqdOP yWX7d    y3zKF     " ]');
    await tab.click('button[class="sqdOP  L3NKy   y3zKF     " ]');
})();
