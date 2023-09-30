/*
Range : Starting value and Ending value = > This is called Interval
There will be 2D array which is array of intervals [[2,5] , [6,9], [15,18]] etc 

TASK : Return another array => which should have mutally exclusive intervals , No 2 common number between the intervals 

Overlapping => Starting point of the second interval is always less than or equal to the ending point of the second interval 
1. Partial Overlap
2. Total Overlap 
3. No Overlapping

Merging the intervals
1. Figure out what kinda overlap is that 
    - Partial Overlap : ex [1,3] & [2,6] -> merged interval = [1,6]
    - Total Overlap : ex [2,3] & [2,6] -> [2,6]
====> Merging concept => starting point becoms the start & ending point becomes the max between them


Sorting an 2D Array
1. arr.sort(function(a,b) {return a-b;}) -> will not work because a and b are array itself 
2. Therefore we will write like this arr.sort(function(a,b) {return a[0] - b[0];})

=====> Points to be notes
1. Starting of B is always or equal to Starting of A

=======> TC
1. Sorting Time complexity = O( nlogn )
Therefore the TC for this prob is O( nlogn )
*/

arr.sort(function(a,b) {return a[0] - b[0];})
let ans = []
let start = arr[0][0];
let end = arr[0][1];

// traverse
for(let i=1;i<arr.length;i++){
    if(arr[i][0] <= end){ //some overlap
        end = Math.max(arr[i][1],end);
    }else{ //no overlap
        ans.push([start,end]);
        start = arr[i][0]
        end = arr[i][1]
    }
}

ans.push([start,end]);
return ans;