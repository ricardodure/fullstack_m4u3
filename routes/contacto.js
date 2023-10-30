var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.send('HOLA, SOY LA PAGINA DE CONTACTO');
});

// router.get('/', function(req, res, next) {
//   res.render('index');
// });

module.exports = router;
