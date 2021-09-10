const express = require('express');
const port = 3030
const app = express();

const main = require('./routers/main')
const about = require('./routers/about')

app.use(express.static('public'))

app.use('/',main);
app.use('/about', about)

/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))