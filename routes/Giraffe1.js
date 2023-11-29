var express = require('express');
var router = express.Router();
const Giraffe_controlers= require('../controllers/Giraffe1');

/* GET Giraffe */
router.get('/', Giraffe_controlers.Giraffe_view_all_Page );
// GET request for one Giraffe.
//router.get('/Giraffe/:id',Giraffe_controller.Giraffe_detail);

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }



/* GET detail Giraffe page */

router.get('/detail', Giraffe_controlers.Giraffe_view_one_Page);
/* GET create Giraffe page */
router.get('/create',secured, Giraffe_controlers.Giraffe_create_Page);
/* GET create update page */
//router.get('/update', Giraffe_controlers.Giraffe_update_Page);

router.get('/update',secured, Giraffe_controlers.Giraffe_update_Page);
// router.post('/login', passport.authenticate('local'), function(req, res) {
//     res.redirect('/');
//     });
// A little function to check if we have an authorized user and continue on

//or redirect to login.



/* GET update Giraffe page */
router.get('/update', secured, Giraffe_controlers.Giraffe_update_Page);


/* GET delete Giraffe page */
router.get('/delete',secured, Giraffe_controlers.Giraffe_delete_Page);

module.exports = router; 