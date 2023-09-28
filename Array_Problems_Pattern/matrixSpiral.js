/**
 * Spiral Order = Go clockwise from (0,0)
-- for 3
1 2 3
8 9 4
7 6 5

-- for 4
[[1 2 3 4], 
[12 13 14 5],
[11 16 15 6],
[10 9 8 7]]

[[1 2 3 4], [12 13 14 5],[11 16 15 6],[10 9 8 7]]
*/

// Creating a Empty Square matrix 
let n = 4;
let count = 1; // this is what we will increase till A*A
let array = new Array(n);
for(let i = 0; i < n; i++){
    array[i] = new Array(n);
}

// creating pointers which can move in all four directions 
// Direction of movement is clockwise right , bottom , left , up .. REPEAT

let top = 0,left = 0,bottom = n - 1,right = n - 1;

while(count <= n*n){
    for(let i = left;i <= right;i++){
        array[top][i] = count; //filling top most row from left most column to the right most column
        count++;
    }
    top++ //moved from the first row 


    for(let i = top;i<=bottom;i++){
        array[i][right] = count; // fill elements from the right column from top to bottom
        count++;
    }
    right--;

    for(let i = right; i >= left; i--){
        array[bottom][i] = count;  // filling bottom most row from right most column to the left most column
        count++
    }
    bottom--;   

    for(let i=bottom;i >= top; i--){
        array[i][left] = count;
        count++;
    }
    left++;

}

console.log(array); 