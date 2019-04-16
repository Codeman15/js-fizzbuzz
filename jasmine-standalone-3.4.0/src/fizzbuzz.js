var Fizzbuzz = function(){};

Fizzbuzz.prototype.isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByFifteen = function (number) {
  return this.isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number, 15)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleBy(number, 3)) {
    return "Fizz";
  }
  if (this.isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  return number
};

Fizzbuzz.prototype.counter = function() {
  var count = 1;
  while (count <= 100) {
    console.log(this.says(count));
    count++;
  };
};

//how to actually call it
//var fizzbuzz = new FizzBuzz()
//fizzbuzz.counter();
