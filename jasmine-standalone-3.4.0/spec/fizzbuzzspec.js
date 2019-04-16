describe ('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('is divisible by 3', function() {
      //fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });

    it('is divisible by 5', function() {
      //fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleBy(5, 5)).toBe(true);
    });

    it('is divisible by fifteen', function() {
      //fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('when playing it says:', function() {
    it('says Fizz when number is divisible by 3', function() {
      //fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it('says Buzz when number is divisible by 5', function() {
      //fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
    it('says FizzBuzz when number is divisible by 15', function() {
      //fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
  });
});
