//Finding the maximum no of elements in the array

function MaxNoElements(arr) {
    let max = arr[0];
    let count = 0;

    // Find the maximum height and count how many times it appears
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            count = 1;  // reset count for the new max
        } else if (arr[i] === max) {
            count++;  // increment count for an existing max
        }
    }

    console.log(count);
}

const arr=[1,2,3,4,4];
MaxNoElements(arr)