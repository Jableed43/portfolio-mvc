const express = require('express');
const path = require('path')
const port = 3030
const app = express();


/* Middleware */
app.use(express.static('public'))

/* app get */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))

app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')))



/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))