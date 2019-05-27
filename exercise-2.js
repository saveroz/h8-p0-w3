function balikString(kata) {
    // you can only write your code here!
    var result='';
    for (var i=kata.length-1;i>=0;i--){
        result+=kata[i];
    }
    return result;
  }
  console.log(balikString('hello'));