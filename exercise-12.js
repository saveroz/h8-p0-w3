function tentukanDeretGeometri(arr) {
    const dif=arr[1]/arr[0];
    
    for (var i=0;i<arr.length-2;i++){
        var dif2=arr[i+1]/arr[i];
        if(dif!==dif2){
            return false
        }
    }
    return true
  }
    // you can only write your code here!
  
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false