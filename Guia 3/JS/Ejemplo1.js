
const sumaPor5 = sumaPorN(50);
console.log(sumaPor5(10)); // Devuelve 15

function sumaPorN(n) {
    return function(x) {
      return x + n;
    };
  }
  
 
  