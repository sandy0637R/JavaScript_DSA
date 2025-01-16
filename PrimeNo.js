function PrimeNo(n) {
  for (let num = 2; num <= n; num++) {
    var isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        var isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

PrimeNo(50);
