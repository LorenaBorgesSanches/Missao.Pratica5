var express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
var router = express.Router();

router.get('/', async function (req, res, next) {
  res.send(await obterLivros());
});

router.post('/', async function (req, res, next) {
  try {
    await incluir(req.body)
    res.json({ "mensagem": "Inclusão efetuada" });
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', function (req, res, next) {
  try {
    excluir(req.params.id);
    res.json({ "mensagem": "Removação efetuada" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
