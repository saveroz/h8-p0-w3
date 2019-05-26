var date="5/05/1989";

function sortDate(date){
var date=date.split('/')
var sorted=[];
var month=date[1];
    for (let char of date){
        sorted.push(Number(char));    
    }
sorted=sorted.sort()
sorted.reverse();
result=[]
    for (let i of sorted){
        if (month==i){
            result.push("0"+i);
         }
        else{
            result.push(String(i));
        }
    }
return result.reverse();
}

console.log(sortDate(date));