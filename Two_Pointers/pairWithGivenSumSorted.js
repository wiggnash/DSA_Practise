/*
=======> Question : Find pair which adds up the Target in the integer array
[2 , 4 , 5 , 8 , 9 ] Target = 7 true
                     Target =  14 true


*/

/*
=====> BRUTE FORCE Solution
1. Nested loops to match every pair and find the matching pair 
2. Time Complexity = O( n ^ 2)
*/
for(let i = 0 ; i < n;i++){
    for(let j = i+1; j < n;j++){
        if(arr[i] + arr[j] == target) return true;
    }
}

return false 

// ============> Two Pointer way ===================
let start = 0
let end = arr.length; 

while(start < end){
    if(arr[i] + arr[j] < target){
        start++
    }else if(arr[i] + arr[j] > target){
        end--
    }else return true; // target is found where arr[i] + arr[j] == target
}

return false; // We couldnt find the number 