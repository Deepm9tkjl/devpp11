const ig = require('./instagram');

const ig=require('./instagram');
(
    async()=>{
        await ig.initialize();
        await ig.login('_deepm84kjl','Deepak@786');
        await ig.likeTagsProcess(['cars','carss']);
        debugger;
    }
)()