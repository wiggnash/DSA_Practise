/**
 * Sorting a Number Array
 * [1,3,1,5,6,].sort(function(a,b){ return a-b ;})
 * JS consider every element as a string , Therefore it checks the first character of the number and do the sorting 
 * We have to explicitly mention that sort the array which is numerically greater than the other one 
 * 
 * TC of sorting is O( n*logN ) for the array size of n 
 * For this question TC is O( (m+n)*log(m+n))
 */

//==== USING TWO POINTER APPROACH ========

let index_1 = 0; //for first array
let index_2 = 0; //for second array
let ans = [];
while(index_1 < m && index_2 < n){
    if(arr1[index_1] <= arr2[index_2]){
        ans.push(arr1[index_1]);
        index_1++
    }else{
        ans.push(arr2[index_2]);
        index_2++;
    }
}

// push the remaining elements 
for(let i = index_1;i<m;i++){
    ans.push(arr1[i]);
}

for(let i = index_2;i<n;i++){
    ans.push(arr2[i]);
}

return ans;