//Finding the no of negative,positive and zero elements and taking the ratio with respect to the no of elements in array and 
//ratio value retured must be of 6 digits  

function plusMinus(arr) {
    const n = arr.length;
    let positives = 0, negatives = 0, zeros = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) positives++;
        else if (arr[i] < 0) negatives++;
        else zeros++;
    }

    const positiveRatio = Math.round((positives / n) * 1000000) / 1000000;
    const negativeRatio = Math.round((negatives / n) * 1000000) / 1000000;
    const zeroRatio = Math.round((zeros / n) * 1000000) / 1000000;

    function formatToSixDecimals(number) {
        let str = number.toString();
        if (!str.includes('.')) str += '.';
        while (str.length - str.indexOf('.') <= 6) {
            str += '0';
        }
        return str;
    }

    console.log(formatToSixDecimals(positiveRatio));
    console.log(formatToSixDecimals(negativeRatio));
    console.log(formatToSixDecimals(zeroRatio));
}

const arr=[1,1,0,-2,-2];
plusMinus(arr);


//using method toFixed for geting 6 digits
function plusMinus(arr) {
    const n = arr.length;  // Get the size of the array
    let positives = 0, negatives = 0, zeros = 0;

    // Count positives, negatives, and zeros
    arr.forEach(num => {
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
    });

    // Calculate ratios and print each to 6 decimal places
    console.log((positives / n).toFixed(6));
    console.log((negatives / n).toFixed(6));
    console.log((zeros / n).toFixed(6));
}
