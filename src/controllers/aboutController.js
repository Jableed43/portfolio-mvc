//Requerir Path
const path = require('path')

//Ruta - Objeto Literal
const aboutController={
    about:(req,res)=>{
        res.sendFile(path.join(__dirname,'..','views','about.html'))
    },
}

//Exportar
module.exports = aboutController;