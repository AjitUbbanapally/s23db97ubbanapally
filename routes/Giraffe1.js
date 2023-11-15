var express = require('express');
var router = express.Router();
const Giraffe_controlers= require('../controllers/Giraffe1');

/* GET Giraffe */
router.get('/', Giraffe_controlers.Giraffe_view_all_Page );
// GET request for one Giraffe.
//router.get('/Giraffe/:id',Giraffe_controller.Giraffe_detail);




/* GET detail costume page */

router.get('/detail', Giraffe_controlers.Giraffe_view_one_Page);
module.exports = router; 