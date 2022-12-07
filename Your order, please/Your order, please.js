function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  } 
  
// another solution:
// function order(words){
//     const arr = words.split(" ");
//     arr.sort((a,b) => {
//       return a.match(/\d+/)[0] > b.match(/\d+/)[0] ? 1 : -1;
//     });
//     return arr.join(" ");
//   }