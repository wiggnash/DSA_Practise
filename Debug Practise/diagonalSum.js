
function diagonalSum(matrix,i,j,n,m) {
    if (i >= n || j >= m) {
        return -1;
    }

     let diagonalSum = 0;
    let row = i;
    let col = j;

     while (row < n && col < m) 
    {
        diagonalSum += matrix[row][col];
        row++;
        col++;
    }

}