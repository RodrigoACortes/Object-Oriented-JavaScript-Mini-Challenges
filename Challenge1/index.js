class Multiplier {
  constructor() {
    this.x = 1;
    }
    multiply(input){
      this.x = this.x * input;
      return this.x;
    }
    getCurrentValue() {
      return this.x + ' is the current value';
    }
}

var x = new Multiplier();

console.log(x.multiply(prompt('Give me a number')));

console.log(x.getCurrentValue());
