class Cycled {
  constructor(iterateArray) {
    this.iterateArray = iterateArray;
    this.index = 0;
  }

  current() {
    return this.iterateArray[this.index];
  }

  next() {
    this.index += 1;
    this.resetIndex();
    return this.iterateArray[this.index];
  }

  previous() {
    this.index -= 1;
    this.resetIndex();
    return this.iterateArray[this.index];
  }

  step(value) {
    this.index -= value;
    this.resetIndex();
    return this.iterateArray[this.index];
  }

  resetIndex() {
    if (this.index >= this.iterateArray.length) {
      this.index = 0;
    } else if (this.index < 0) {
      this.index = this.iterateArray.length - 1;
    }
  }

  indexOf(value) {
    return this.iterateArray.indexOf(value);
  }

  reversed() {
    return new Cycled(this.iterateArray.reverse());
  }

  * seque() {
    for (let num = 0; num <= this.iterateArray.length; num += 1) {
      yield this.iterateArray[num];
    }
  }

  [Symbol.iterator]() {
    const resultArray = [];
    const seqObject = this.seque();
    for (const num of seqObject) {
      resultArray.push(num);
    }
    return new Cycled(resultArray);
  }
}
export { Cycled };
