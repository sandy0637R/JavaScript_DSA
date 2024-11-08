//get the sume of array in the form of array which consist two elements one is sum of array minus minimum element and 
//sum of array minus maximum element

function miniMaxSum(arr) {
    let min = arr[0], max = arr[0], sum = 0;

    // Calculate the sum of all elements, and track min and max values
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    // Minimum sum: total sum minus the maximum element
    // Maximum sum: total sum minus the minimum element
    const minSum = sum - max;
    const maxSum = sum - min;

    // Print the results
    console.log(minSum, maxSum);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
