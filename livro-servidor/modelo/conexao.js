const banco = require("mongoose");
const option = { useNewUrlParser: true, useUnifiedTopology: true }

banco
    .connect(
        "mongodb://127.0.0.1:27017/livraria", option
    )
    .then(() => {
        console.log("Conectado ao MongoDB!");
    })
    .catch((err) => console.log(err));

banco.Promise = global.Promise;

module.exports = banco;