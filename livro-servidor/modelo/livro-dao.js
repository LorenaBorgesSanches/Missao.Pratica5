const Livro = require("./livro-schema");

obterLivros = async () => await Livro.find()

incluir = async (livro) => await Livro.create(livro)

excluir = async (codigo) => await Livro.deleteOne({ _id: codigo })

module.exports = {
    obterLivros,
    incluir,
    excluir
};