// npm i request

let request = require("request");
let cheerio= require("cheerio");
console.log("Before");
request("https://www.npmjs.com/package/cheerio",cb);

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
        // console.log("html:",html);
        dataExtractor(html);
    }
}

function dataExtractor(html)
{
    //search tool
    let searchTool= cheerio.load(html);
   
    // css selector
    let elemRep = searchTool("#readme>h1");

    //text
   let moduleName=searchTool(elemRep).text().trim();
    console.log("moduleName :",moduleName);
}  

console.log("after")