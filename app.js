const express = require('express')
const app = express()
const path = require('path')
let port = 3030

app.use(express.static('src/public'))
app.use('/recursos', express.static(__dirname + '/src/public'));

app.listen(port , () => console.log(`Servidor corriendo en puerto ${port}`))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/src/views/home.html'))
})