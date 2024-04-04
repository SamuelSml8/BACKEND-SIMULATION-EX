//* Samuel Vera Miranda
//* 1027801700
//* Van Rossum

const express = require("express"); //Importamos express
const connectDB = require("./config/db.js"); // Traemos o importamos la función que hace la conexión a la base de datos
const studentRoutes = require("./routes/students.routes.js"); // Importamos las rutas de los estudiantes con los métodos HTTP

const app = express(); // guardamos express en una constante llamada app
const port = 3000; // El puerto lo definimos en una constante para mayor dinamismo

connectDB(); // Llamamos a la función que hace la conexión a la DB para conectarnos

app.use(express.json()); // Utilizamos JSON para las request
app.use(express.urlencoded({ extended: false })); // Utilizamos JSON para las request en el navegador

app.use("/api/students", studentRoutes); // Definimos el path que tendrán todas las rutas

app.listen(port, () => {
  console.log(`Server on port ${port}\n💜 http://localhost:${port}`);
}); // Levantamiento del servidor
