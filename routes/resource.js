var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Giraffe_controller = require('../controllers/Giraffe');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Giraffe ROUTES ///
// POST request for creating a Giraffe.
router.post('/Giraffe', Giraffe_controller.Giraffe_create_post);
// DELETE request to delete Giraffe.
router.delete('/Giraffe/:id', Giraffe_controller.Giraffe_delete);
// PUT request to update Giraffe.
router.put('/Giraffe/:id', Giraffe_controller.Giraffe_update_put);
// GET request for one Giraffe.
router.get('/Giraffe/:id', Giraffe_controller.Giraffe_detail);
// GET request for list of all Giraffe items.
router.get('/Giraffe', Giraffe_controller.Giraffe_list);
module.exports = router;