function targetTerdekat(arr) {
  // you can only write your code here!
  let checkpoint=''; 
  let total=0;
  let listDist=[];
  let minDist=0;

  for (let char of arr){
      if ((char==='o' || char==='x') && !checkpoint){
          checkpoint=char;
          total=1;
      } 
      else if(char===" "){
         total+=1; 
      }
      else if(char===checkpoint){
          total=0;
          checkpoint="";
      }
      else if(char!==checkpoint){
      listDist.push(total);
      checkpoint="";
      }
  }
  if (!listDist){
      return 0
  }
  else{
      return Math.min(listDist);
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2