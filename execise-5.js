function palindrome(kata) {
    // you can only write your code here!
    var wordsLength=kata.length;
    var iterationNum=Math.round(wordsLength/2);
    
    for (var i=0;i<iterationNum;i++){
        if (kata[i]!==kata[(wordsLength-1)-i]){
            return false;
            break;
        }
    }
    return true
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  console.log(palindrome('bnainb'));//false
  console.log(palindrome('kattak'));//true