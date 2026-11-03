//What is the palindrome?
//  12121 -->  12121

// What is the input/output
//input --> number - originalNumber
//output --> number - reversedNumber

//How many variables need for program
// 1 for input
//1 for output

//Logic

//   12121  -->   12121%10  -->  1     12121/10  -->  1212
//   1212   -->   1212%10   -->  2
//   121    -->   121%10    -->  1
//   12     -->   12%10     -->  2
//   1      -->   1%10      -->  1



function findPalindrome(){

    let inputNumber=12122;   // 22121
    // originalNumber  12121
    let originalNumber=inputNumber;      
    let outputNumber=0;

   //Initiazation - starting
   //Condition    - end point
   //Increment/decrement

   //     0>0 
    while(inputNumber>0){
    outputNumber=(outputNumber*10)+inputNumber%10;    //  (0*10)+12121%10     (1*10)+1212%10      (12*10)+121%10   (121*10)+12%10  (1212*10)+1%10   
                                                      //   0+1=1               10+2 = 12           120+1 =121       1210+2 = 1212   12120+1 = 12121
    inputNumber=Math.floor(inputNumber/10);           //   12121/10 --> 1212   1212/10 -->121      121/10 -> 12     12/10  = 1      1/10 =0 
    }

    //outputNumber  --->   12121
    //inputNumber   --->   0

    if(outputNumber===originalNumber){
        console.log("The number is Palindrome");
    }
    else{
    console.log("The number is Not a Palindrome");

    }
}
findPalindrome();