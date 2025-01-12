function reversedNo(num) {
  let reversed = 0;
  let remainder;
  let isNegative = num < 0;

  num= num<0 ? -num:num;

  while(num>0){
    remainder=num%10;
    reversed=reversed*10+remainder;
    num=(num-remainder)/10;
  }

  return isNegative ? -reversed: reversed;

}

const num= 12345;
const ReveresedNum= reversedNo(num);
console.log(ReveresedNum)