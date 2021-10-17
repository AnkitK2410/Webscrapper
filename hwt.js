// npm i request
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
let request = require("request");
let cheerio= require("cheerio");
console.log("Before");
request(url,cb);

function cb(error,response,html)
{
    //console.log('error:',error); //Print the error if one
    //console.log('body:',html); //Print the html for the google
    if(error){
        console.log(error);//Print the error if one occured
    }
    else if(response.statuscode == 404){
        console.log("Page not found")
    }
    else
    {
        //console.log("html: ",html);
        dataExtractor(html);
    }
}

function dataExtractor(html)
{
    //search tool
    let searchTool= cheerio.load(html);
   
    // css selector
    let bowlers = searchTool(".table.bowler tbody tr");
    
    console.log(bowlers.length);
    for(let i=0;i<bowlers.length;i++)
    {

        let cols= searchTool(bowlers[i]).find("td");

        
        let name= searchTool(cols[0]).text();
        let wickets = searchTool(cols[4]).text();
        console.log(name+" "+wickets);
    }

    //text
   
}  
console.log("after")
