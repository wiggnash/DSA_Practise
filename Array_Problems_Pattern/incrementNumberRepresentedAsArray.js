/**
 * In a number the power of the 10 keeps on increasing when we move from rigth to left
 
------ > 478 = 4 * 10 ^ 2 + 7 * 10 ^ 1 + 8 * 10 ^ 0
1. When we are adding the numbers and the number becomes greater or equal to 10 , We will take carry as 1 and we will just write the 
digit as the sum 

 */

// carry -> 1 because we need to add 1 to the number

// ---------> Solution one , Returning Number 
// let arr = [1,2,3]
// let mulitple = 1, ans = 0 , carry = 1;

// for(let i = arr.length ; i >= 0; i--){
//     let digit = arr[i] + carry;
//     carry = digit >= 10 ? 1 : 0;
//     digit = digit % 10;
//     ans = ans + digit * mulitple;
//     mulitple = mulitple * 10;
// }

// if(carry == 1){
//     ans = ans + mulitple;
// }


// ========= Number to String ============= 
let number = 10;
number.toString().split('')

// ========== INPUT NUMBER CAN BE LARGE , THEREFORE WE NEED TO HANDLE THAT => the answer can go around 10 ^ 25 , Therefore we need to deal with the 
//array itself 
let arr = [1,2,3]
let carry = 1;

for(let i = arr.length - 1 ; i >= 0; i--){
    let digit = arr[i] + carry;
    carry = digit >= 10 ? 1 : 0;
    digit = digit % 10;
    arr[i] = digit;
}

if(carry == 1){
    arr.unshift(1); // adds the element to the front of the array
}