var express = require('express');
const Giraffe_controlers= require('../controllers/Giraffe');
var router = express.Router();
/* GET Giraffe */
router.get('/', Giraffe_controlers.Giraffe_view_all_Page );
module.exports = router;