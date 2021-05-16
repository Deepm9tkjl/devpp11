const cheerio =require("cheerio");
const request=require("request");
request("http://github.com/topic", function(err ,res ,data){
    processData(Data);
})
let githubTopic=[];
function processData(html){
    let myDocument=cheerio.load(html);
    let allTopicDiv=myDocument(".topic-box");
    for(let i=0;i<allTopicDiv.length;i++){
        let topicLink="http://github.com/topic"+topictag.attr("href");

    }
}