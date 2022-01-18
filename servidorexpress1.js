var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send('Ruta raíz')
});

// Para utilizar archivos estáticos (js, css, imágenes)
app.use(express.static(__dirname));


app.get('/index', (req, res) => {
    
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});