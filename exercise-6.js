function angkaPalindrome(num) {
    // you can only write your code here!
    
    if (num<10){
        return num+=1;
    }
    else{

        while (true){
            var num=String(num);
            var palindrome=num.split("");
            palindrome=palindrome.reverse();
            palindrome=palindrome.join("");
            palindrome=Number(palindrome);
            num=Number(num);

            if (num===palindrome){
                return num;
                }
             else{
                 num++;
             }
            }
        }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001