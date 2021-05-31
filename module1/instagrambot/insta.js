const puppeteer=require('puppeteer');
const Base_URL='https://instagram.com/';
const instagram={
    browser: null,
    page: null,
    initialize: async()=>{
        instagram.browser=await puppeteer.launch({
            headless: false
        });
        instagram.page=await instagram.browser.newPage();
    },
    login: async(username,password)=>{
        await instagram.page.goto(BASE_URL,{waitUntil: 'networkidle2'});
 let loginButton=await instagram.page.$x('//a[contains(text(),"Log in")]');
 await loginButton[0],click();
 await instagram.page.waitForNavigation({waitUntil: 'networkidle2'});
await instagram.page.waitFor(1000);
await instagram.page.type('')
await instagram.page.type('input[name="username"]',username,{delay:50});
await instagram.page.type('input[name ="password"]',password,{delay:50});

debugger;
    }}
module.exports=instagram;