let arr=[1,2,3,4,5];

//definition
function smaller(x)
{
    return x*x;
}

function bigger(arr,cb)
{
    let newArr=[];
    for(let i=0;i<arr.length;i++)
    {
        let sqval=cb(arr[i]);
        newArr.push(sqval);
    }
    return newArr;
}

let sqArr=bigger(arr,smaller);
console.log("sqArr",sqArr);