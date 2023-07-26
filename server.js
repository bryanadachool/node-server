
const http = require("http");
const tasks = [
  { id: 1, description: "Hacer compras", completed: false },
  { id: 2, description: "Limpiar la casa", completed: true },
  { id: 3, description: "Estudiar para el examen", completed: false },
];

const requestListener = function (req, res) {

  if (req.url === "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404);
    res.end();
  }
};

const server = http.createServer(requestListener);
const port = 8000;

server.listen(port, () => {
   
  console.log(`Servidor iniciado en http://localhost:${port}`);
});