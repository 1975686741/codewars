function highAndLow(numbers){
    let toArray = numbers.split(" ");
    (toArray.sort((a,b)=>b-a));
    return(toArray[0]+ " "  + toArray[toArray.length - 1]);
  };