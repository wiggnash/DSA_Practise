/*
Problem Description
Given an unsorted array of integers, find the smallest missing positive integer.
The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

----> Example
[ 3 , 4 , -1 , 1] =>
1 -> present
2 -> present => is the answer

[-2 , 1 , 2 , 5, 9 ,100]
1 -> present
2 -> present
3 -> not present => 3 is the answer

---> Range of our answer where the smallest missing positive integer will lie

smallest possible number = 1
largest possible number in the array  = 5 ( if the array size is 4 ) => Therefore it is ( n + 1 )

---> The Question that we should ask to find out the smallest missing positibe number
1. is 1 present in the array ?
2. is 2 present in the array ? 
.
.
is n  present in the array ?

If we find the answer  for the question asked , move to the next question
if we donf find the answer for the question asked , then that is the answer for the question

=========== Time Complexity =============
Method 1 : with O( n ^ 2)
1. There will be one for loop to go from (i loop )1 - n --- n
2. Second for loop to go and check if i is present in the array ---- n 

Method 2 : with O(nlogn)
1. There will be one for loop to go from (i loop )1 - n --- n
2. Checking the Sorted array 

Method 3 : Using Hash Map
If we somehow check if an element is present in the array for the constant time O( 1 ) , then that is the efficient approach 
1. Map the element of the array to the corresponding index  --> Marking the element in an array 
2. then check if the number is not present from 1 - size of array 
-------------> space complexity => O( N )
------------> Time complexity for the third method => O( N )
            - 
*/

let n = 4;
let arr = [3, 4 , -1 , 1]

let isPresent = new Array(n+1);
for(let i = 0 ; i < n; i++){
    if(arr[i] >= 1 && arr[i] <= n){
        isPresent[arr[i]] = true;
    }
}

for(let i = 1; i <= n; i++){
    if(!isPresent[i]){
        return i;
    }
}

return n+1;     
