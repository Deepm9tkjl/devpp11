let matchlink ="https://www.cricbuzz.com/live-cricket-scorecard/35898/zim-vs-pak-2nd-test-pakistan-tour-of-zimbabwe-2021";
const request=require("request");
const fs =require("fs");
const cheerio= require("cheerio");
//const cheerio = require("cheerio");
request(matchlink , cb);
//request ig a high order function
function cb(error , response, data){
    //console.log(" got the data");
    //console.log(data);
    //fs.writeFileSync("./match.html", data);
    getHighestWicketTacker(Data);
}
// let htmlkaData=fs.readFileSync("./match.html","utf8");
 //let myDocument=cheerio.load(htmlkaData);
 ////let matchInfo=myDocument(".status-text span").text();
 ////console.log(matchInfo);
 ////highestwickettaker
 //let bothBowlingTables=myDocument(".table.bowler");
 ////fs.writeFileSync("./bowlingTables.html" , bothBowlingTables+"");
//// {
//  //   "0": {bowling table}
//    // "1":{bowling table}
// //}
function getHighestWicketTacker(data){
    let myDocument=cheerio.load(data);
let bothBowlingTables=myDocument(".table.bowler");

let highestWicketTakenName;
    let highestWicketsTaken;
    let economyOfHighestWicketTaker;
    
    for(let i=0 ; i<bothBowlingTables.length ; i++){
        let bowlingTable = myDocument(bothBowlingTables[i]);
        let allTableRows = bowlingTable.find("tbody tr");
        //// {
        ////     "0" : {tr},
        //  //   "1" : {tr},
        //    // "2" : {tr}
        //// }
        for(let j=0 ; j<allTableRows.length ; j++){
            // wicket "4"
           // name "0"
           // economy "5"
           let allTds = myDocument(allTableRows[j]).find("td");
           // {  0 : {} , 1: {} , 2: {}  ,3:{}  }
           if(i==0 && j==0){
               highestWicketTakenName = myDocument(allTds[0]).find("a").text();
               highestWicketsTaken = myDocument(allTds[4]).text();
               economyOfHighestWicketTaker = myDocument(allTds[5]).text();
           }
           else{
               let currentWickets = myDocument(allTds[4]).text();
               let currentEconomy = myDocument(allTds[5]).text();
               if(currentWickets > highestWicketsTaken  || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)){
                   // update if current bowler have high wickets !!
                   highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                   highestWicketsTaken = currentWickets;
                   economyOfHighestWicketTaker = currentEconomy;
               }
           }
       }
   
   }
   console.log("Name Of Highest Wicket Taker = " + highestWicketTakenName);
    console.log("Wickets Taken = " + highestWicketsTaken);
    console.log("Economy = " + economyOfHighestWicketTaker);


}