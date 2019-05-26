function pasanganTerbesar(num) {
    // you can only write your code here!
    var num=String(num);
    numLength=num.length;
    var greatestPair=0;
    var currentPair=0;
 
    for (var i=0;i<numLength-1;i++){
        currentPair=num.slice(i,i+2)

        if (Number(currentPair)>Number(greatestPair)){
            greatestPair=currentPair;
        }
    }
    return greatestPair;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99