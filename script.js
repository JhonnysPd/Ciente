// creamos una varibale que contenga la informacion de la respuesta y la procesamos
let estudiantes = '';

// llamamos a la API por el metodo GET y la ruta estudiantes
axios.get('https://edumedia.jhonnyspadilla.repl.co/usuarios')
  .then(function (response) {
    
    // preguntamos si la consulta fué exitosa con la respuesta de status = 200
    if (response.status==200){
      // mostramos en consola la informacion de la api que se encuentra en data
      console.log(response.data);
 
      for(var i=0; i<= response.data.length-1; i++){

        estudiantes = estudiantes+ "<br>"+  response.data[i].nombre1 + " " +response.data[i].apellido1
      }
    }
    // le asignamos a la vista en el documento HTML al elemento div el resultado del procesamiento
    document.getElementById("contUsuarios").innerHTML = estudiantes
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });