function contador() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const incremento = contador();
  console.log(incremento()); 
  console.log(incremento()); 
  console.log(incremento());
  console.log(incremento());
  console.log(incremento());
  