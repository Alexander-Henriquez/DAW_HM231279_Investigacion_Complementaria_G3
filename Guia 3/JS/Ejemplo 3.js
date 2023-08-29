function temporizador() {
    let segundos = 0;
  
    function contar() {
      segundos++;
      console.log(`Han pasado ${segundos} segundos.`);
    }
  
    return contar;
  }
  
  const inicio = temporizador();
  setInterval(inicio, 1000); 