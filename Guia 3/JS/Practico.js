function gestorDeEmpleados() {
  const listaDeEmpleados = [];

  function agregarEmpleado(nombre, salario) {
    const empleado = { nombre, salario };
    listaDeEmpleados.push(empleado);
    console.log(`"${nombre}" ha sido agregado a la lista de empleados con un salario de ${salario} USD.`);
  }

  function mostrarEmpleados() {
    console.log("Lista de empleados:");
    listaDeEmpleados.forEach((empleado, index) => {
      console.log(`${index + 1}. Nombre: ${empleado.nombre}, Salario: ${empleado.salario} USD`);
    });
  }

  return {
    agregarEmpleado,
    mostrarEmpleados
  };
}

const miGestorDeEmpleados = gestorDeEmpleados();

miGestorDeEmpleados.agregarEmpleado("Edgar Hernan", 50000);
miGestorDeEmpleados.agregarEmpleado("Joel García", 60000);
miGestorDeEmpleados.agregarEmpleado("oswaldo Henriquez", 70000);
miGestorDeEmpleados.mostrarEmpleados();


  