//What is the Program about? Palindrome

//Check whether a number is palindrome or not

//What is the input for this program  - number
//what is the output for this program - number

//how many varibles we have to use
//2 variables
//1 for input
//1 for output

//Logic

//   12121   --> 1  2  1  2   1

//  12121%10 --> 1        Math.floor(12121/10)     -    1212
//  1212%10  --> 2        Math.floor(1212/10)      -    121
//  121%10   --> 1        Math.floor(121/10)       -    12
//  12%10    --> 2        Math.floor(12/10)        -    1
//  1%10     --> 1        Math.floor(1/10)         -    0

function palindromeNumber(){
let inputNumber=12122;
//             12121
let tempInput=inputNumber;
let outputNumber=0;
//    0>0
while(inputNumber>0){
outputNumber=(outputNumber*10)+inputNumber%10;     // (0*10)+12121%10          (1*10)+1212%10      (12*10)+121%10   (121*10)+12%10    (1212*10)+ 1%10
                                                   //    0+1=1  -output         10+2=12             120+1=121        1210+2=1212       12120+1=12121
inputNumber=Math.floor(inputNumber/10);            //  12121/10=1212 - input    1212/10 = 121       121/10=12        12/10 =1          1/10 = 0
}

//outputNumber =  12121
//inputNumber  =  0

//outputNumber==inputNumber
//   12121         12121
if(tempInput==outputNumber){
    console.log("The Number is Palindrome");
}
else{
    console.log("The Number is Not a Palindrome");
}

}
palindromeNumber();