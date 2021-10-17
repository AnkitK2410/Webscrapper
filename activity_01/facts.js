// function fn(param){
//     console.log("param is: ",param);
// }

// //value pass
// fn(10);
// fn("abcd");

// //reference type value
// fn([1,2,3,4,5]);
// let a=[2,3,4];
// fn(a);

// fn({name:"jasbir"});

//function statement
function fn1(){
    console.log("I am a function");
}

fn1();
// exp();

//In js functions are treated as variables

let exp=function fn(){
    console.log("ankit")
};

fn();

exp();

//IIFE:->Immediately invoked function expression
(function fn2(){
    console.log("Ankit");
})();

// Arrow function
let arrowFN=()=>{
    console.log("ankit")
} 
arrowFN();

