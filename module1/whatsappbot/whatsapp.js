const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span [title='Deep']");
  const target = await page.$("span [title='Deep']");
  await target.click();
  const inp = await page.$(
    "_2_1wd copyable-text selectable-text"
  );

  for (let i = 0; i < 100; i++) {
    await inp.type("ok this is magic");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");