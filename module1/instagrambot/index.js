const instagram = require('./insta');

constig=require('./instagram');
(async() =>{
    await instagram.initialize();
    await instagram.login('deepak841999@gmail.com', 'Deepak@786');
    debugger
})