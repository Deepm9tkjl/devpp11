const puppeteer=require('puppeteer');
const BASE_URL='https://www.instagram.com/';
TAG_URL={}
const instagram={
    browser: null,
    page: null,
    initialize: async()=>{
        instagram.browser=await puppeteer.launch({
            headless:false
        });
        instagram.page=await instagram.browser.newPage();
    },
    login:async(username ,password)=>{
        await instagram.page.goto(BASE_URL,{waitUntil: 'networdle2'});
        let loginButton =await instagram.page.$x('//a[contains(text(), "Log in")]');
        //click on the login url button
        await loginButton[0].click();
        await instagram.page.waitForNavigation({waitUntil:'networkidle2'});
        await instagram.page.waitFor(1000);
        await instagram.page.type('input[name="username"]',username,{delay:50});
        await instagram.page.type('input[name="password"]',password,{delay:50});
        loginButton=await instagram.page.$x('//button[contains(text(), "Log in")]');
        await loginButton[0].click();       
        await instagram.page.waitFor(1000);
        await instagram.page.waitFor('a>spane[aria-label="profile"]');
    },
    likeTagsProcess=async (tags=[])=>{
        for(let tag of tags){
            await instagram.page.goto(TAG_URL(tag),{ waitUntil: 'networkidle2'});
            await instagram.page.waitFor(1000);
        let posts=await instagram.page.$$('article >div:nth-child(3) img[decoding="auto"]');
      for(let i=0; i<3;i++){
          let post posts[i];
          await post.click();
          await instagram.page.waitFor('span[id="react-root"][area-hidden="false"]');

          await instagram.page.waitFor(1000);
          let isLikable=await post.$('span[aria-label="Like"]');
          if(isLikable){
         await post.click('span[aria-label="Like"]');
      }
      await instagram.page.waitFor(15000);
      let closeModelButton=await instagram.page.$x('//button[contains(text(),"close")]');
      let closeModelButton[0].click();
      await instagram.page.waitFor(1000);

    }
    await instagram.page.waitFor(15000);

}}
  
}
module.exports=instagram;