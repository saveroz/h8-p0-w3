function targetTerdekat(arr) {
    // you can only write your code here!
    startpoint=arr.indexOf('o');
    listDist=[];
    let total=0;
    for (var i=startpoint;i>0;i--){
        if (arr[i]==' '){
            total+=1
        }
        else if(arr[i]==='x'){
            total+=1
            listDist.push(total)
            total=0;
        }
    total=0;
    }
    for (var j=startpoint;j<arr.length-1;j++){
        if (arr[j]==' '){
            total+=1
        }
        else if(arr[j]==='x'){
            total+=1;
            listDist.push(total);
            total=0;
        }
    }
    return Math.min(listDist);
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
 /* console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2 */