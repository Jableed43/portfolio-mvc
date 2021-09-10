//Requerir Path
const path = require('path')

//Ruta - Objeto Literal
const mainController={
    home:(req,res)=>{
        res.sendFile(path.join(__dirname,'..','views','home.html'))
    },
}

//Exportar
module.exports = mainController;