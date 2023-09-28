/*
=========>
*/

let k = 3
let currentSum = 0;
// find the sum of the first sub array 
for(let i = 0; i < k;i++){
    currentSum += arr[i];
}

let max_sum = currentSum;
// increment the starting and the ending index by 1 to go to the next sub array
// [2,5,4] -> [5,4,8] : the uncommon terms are 2 and 8 => therefore the sum of the next sub array is (sum - 2 + 8) 
/*
=======> DRY RUN of BELOW FOR LOOP
[2,5,4,8,1]
currentSum = 2 + 5 + 4 = 11
k = 3 => i = 3 , ===> currentSum (11) - arr[i - k](arr[0] (2)) +  arr[k] (8) ===> 11 -2 + 8 = 17
*/
for(let i = k; i < n; i++){
    currentSum = currentSum - arr[i-k] + arr[i];
    max_sum = Math.max(max_sum,currentSum);
}

return max_sum;