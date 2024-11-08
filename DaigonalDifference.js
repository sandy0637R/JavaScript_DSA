let arr=[[1,2,3],[2,3,4],[4,4,5]]
const n = arr.length; // Size of the matrix (number of rows or columns)
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Loop through the matrix to compute the sums of the diagonals
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }

    // Calculate the absolute difference between the sums of the diagonals
    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    console.log(absoluteDifference);
