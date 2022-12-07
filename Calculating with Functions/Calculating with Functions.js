function times(a) {
    return function (b) {
      return b * a;
    };
  }
  function plus(a) {
    return function (b) {
      return b + a;
    };
  }
  function minus(a) {
    return function (b) {
      return b - a;
    };
  }
  function dividedBy(a) {
    return function (b) {
      return Math.floor(b / a);
    };
  }
  function numberWrapper(num) {
    return function(calculate){
      if (arguments.length === 0) return num;
      return calculate(num)
    }
  }
  let nums = {
    zero: numberWrapper(0),
    one: numberWrapper(1),
    two: numberWrapper(2),
    three: numberWrapper(3),
    four:numberWrapper(4),
    five: numberWrapper(5),
    six: numberWrapper(6),
    seven: numberWrapper(7),
    eight: numberWrapper(8),
    nine: numberWrapper(9),
  }
  let { zero,one,two,three,four,five,six,seven,eight,nine } = nums;
  console.log(seven(times(five())));
  console.log(four(plus(nine())));
  console.log(eight(minus(three())));
  console.log(six(dividedBy(two())));
  

//  the better solution:
//  function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}