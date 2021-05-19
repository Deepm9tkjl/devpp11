let matchLink="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";
const cheerio = require("cheerio");
const request=require("request");
// const cheerio=require("cheerio");
request(matchLink,function(error,response,data){
getHighestsixes(data)});
function getHighestsixes(data){
  let highestsixes;
  let batsmanname;
  let strikerate;

  let myDocument=cheerio.load(data);
  let bothbatsmanTable =myDocument(".table.batsman");
  for(let i=0; i<bothbatsmanTable.length;i++){
      let onebatsmantable=myDocument(bothbatsmanTable[i]);
      let alltrs=onebatsmantable.find("tbody tr");
      for(let j=0;j<alltrs.length;j++){
          let alltds=myDocument(alltrs[j]).find("td");
          if(alltds.length>1){
              if(i==0 && j==0){
                  batsmanname=myDocument(alltds[0]).text();
                  highestsixes=myDocument(alltds[6]).text();
                  strikerate=myDocument(alltds[7]).text();

              }
              else{
                  let currentsixes=myDocument(alltds[6]).text();
                  let currentstrikerate=myDocument(alltds[7]).text();
                  if(currentsixes>highestsixes || (currentsixes==highestsixes && currentstrikerat>strikerate)){
                     batsmanname=myDocument(alltds[0]).text();
                    highestsixes=currentsixes;
                    strikerate=currentstrikerate; 

                  }
              }
          }
      }
  }
  console.log("batsmanname=" + batsmanname);
  console.log("sixes=" + highestsixes);
  console.log("strikerate=" +strikerate);
}
// let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

// const request = require("request");
// const fs = require("fs");
// const cheerio = require("cheerio");
// // request is a high order function

// request( matchLink , cb );

// function cb(error , response , data){
//     // console.log("got the data !!!");
//     // console.log(data);
//     // fs.writeFileSync("./match.html" , data);
//     getHighestWicketTaker(data);
// }




// // let htmlKaData = fs.readFileSync("./match.html" , "utf8");


// function getHighestWicketTaker(data){
//     let myDocument = cheerio.load(data);
//     let bothBowlingTables = myDocument(".table.bowler");
//     // {
//     //     "0" : {bowling table} ,
//     //     "1" : {bowling table}
//     // }
//     let highestWicketTakenName;
//     let highestWicketsTaken;
//     let economyOfHighestWicketTaker;
    
//     for(let i=0 ; i<bothBowlingTables.length ; i++){
//         let bowlingTable = myDocument(bothBowlingTables[i]);
//         let allTableRows = bowlingTable.find("tbody tr");
//         // {
//         //     "0" : {tr},
//         //     "1" : {tr},
//         //     "2" : {tr}
//         // }
//         for(let j=0 ; j<allTableRows.length ; j++){
//              // wicket "4"
//             // name "0"
//             // economy "5"
//             let allTds = myDocument(allTableRows[j]).find("td");
//             // {  0 : {} , 1: {} , 2: {}  ,3:{}  }
//             if(i==0 && j==0){
//                 highestWicketTakenName = myDocument(allTds[0]).find("a").text();
//                 highestWicketsTaken = myDocument(allTds[4]).text();
//                 economyOfHighestWicketTaker = myDocument(allTds[5]).text();
//             }
//             else{
//                 let currentWickets = myDocument(allTds[4]).text();
//                 let currentEconomy = myDocument(allTds[5]).text();
//                 if(currentWickets > highestWicketsTaken  || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)){
//                     // update if current bowler have high wickets !!
//                     highestWicketTakenName = myDocument(allTds[0]).find("a").text();
//                     highestWicketsTaken = currentWickets;
//                     economyOfHighestWicketTaker = currentEconomy;
//                 }
//             }
//         }
    
//     }
    
    
//     console.log("Name Of Highest Wicket Taker = " + highestWicketTakenName);
//     console.log("Wickets Taken = " + highestWicketsTaken)
//     console.log("Economy = " + economyOfHighestWicketTaker)
// }