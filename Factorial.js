const factorial = (num) => {
  let result = 1;

  if (num < 0) {
    console.log("Please enter a positive no.");
    return;
  } else if (num == 1 || num == 0) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    console.log(`factorial for ${num} is ${result}`);
  }
};

factorial(5);

//Using recursive function
function factorialNo(num) {
  if (num < 0) {
    console.log("Please enter a positive no.");
    return;
  } else if (num == 1 || num == 0) {
    return 1;
  } else {
    return num * factorialNo(num - 1);
  }
}

console.log(factorialNo(6));
