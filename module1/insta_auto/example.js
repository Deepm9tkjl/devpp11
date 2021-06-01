'use strict';

const puppeteer = require('puppeteer'); 

const Instauto = require('instauto'); 
const options = {
  cookiesPath: './cookies.json',

  username: '_deepm84kjl',
  password: 'Deepak@786',
  maxFollowsPerHour: 20,
    maxFollowsPerDay: 150,
  

  maxLikesPerDay: 50,

 
  followUserRatioMin: 0.2,
 
  followUserRatioMax: 4.0,
 
  followUserMaxFollowers: null,
 
  followUserMaxFollowing: null,
 
  followUserMinFollowers: null,
   followUserMinFollowing: null,

  dontUnfollowUntilTimeElapsed: 3 * 24 * 60 * 60 * 1000,
 excludeUsers: [],

  dryRun: false,
};

(async () => {
  let browser;

  try {
    browser = await puppeteer.launch({ headless: false });

    const instautoDb = await Instauto.JSONDB({
      followedDbPath: './followed.json',
      unfollowedDbPath: './unfollowed.json',
      likedPhotosDbPath: './liked-photos.json',
    });

    const instauto = await Instauto(instautoDb, browser, options);
    const unfollowedCount = await instauto.unfollowOldFollowed({ ageInDays: 14, limit: options.maxFollowsPerDay * (2 / 3) });

    if (unfollowedCount > 0) await instauto.sleep(10 * 60 * 1000);

    const usersToFollowFollowersOf = ['lostleblanc', 'sam_kolder'];
 await instauto.followUsersFollowers({
      usersToFollowFollowersOf,
      maxFollowsTotal: options.maxFollowsPerDay - unfollowedCount,
      skipPrivate: true,
      enableLikeImages: true,
      likeImagesMax: 3,
    });

    await instauto.sleep(10 * 60 * 1000);

    console.log('Done running');

    await instauto.sleep(30000);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Closing browser');
    if (browser) await browser.close();
  }
})();