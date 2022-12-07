function createPhoneNumber(numbers){
    let phnum = "(xxx) xxx-xxxx";
    for (let i=0; i < numbers.length; i++) {
      phnum = phnum.replace('x', numbers[i] )
    }
    return phnum;
  }
  