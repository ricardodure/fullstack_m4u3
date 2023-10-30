var express = require('express');
var router = express.Router();

/* GET NOSOTROS page. */
router.get('/', function(req, res, next) {
  res.send('HOLA, SOY LA PAGINA DE NOSOTROS');
});

// router.get('/', function(req, res, next) {
//   res.render('index');
// });

module.exports = router;
