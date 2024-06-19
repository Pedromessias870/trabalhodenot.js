 const express = require('express');
 const router = express.Router();

const carrocontoller = riquire('./controllers/carrocontoller');

router.get('/carros', carrocontroller.buscartodos);

 module.exports = router;