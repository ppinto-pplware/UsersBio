

let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//Iniciar APP
let app = express();

//Import routes
let apiRoutes = require("./bioRoutes")
//usar a apiRoutes na API
app.use('/api', apiRoutes)

//configurar bodyparser para processar pedidos.
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Ligação ao MoonGose
const dbPath = 'mongodb://localhost/bioapp';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('Ligado ao MongoDB');
}, error => {
    console.log(error, 'Erro de Ligação do MongoDB');
});
var db=mongoose.connection;

//Verificar ligação à Base de Dados
if (!db)
    console.log("Erro de Ligação à BD");
else
    console.log("Ligação à BD com sucesso");

// Porto do Servidor
var port = process.env.PORT || 8080;

// Mensagem de Boas-Vindas
app.get('/', (req, res) => res.send('Bem-Vindo à API BIO'));


// Iniciar servidor no porto definido
app.listen(port, function() {
    console.log("Running API BIO no porto: "+ port);
});
