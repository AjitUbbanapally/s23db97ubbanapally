var Giraffe = require('../models/Giraffe');
// List of all Giraffe
// List of all Costumes
exports.Giraffe_list=async function(req, res) {
try{
Giraffe = await Giraffe.find();
res.send(Giraffe);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific Giraffe.
exports.Giraffe_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Giraffe detail: ' + req.params.id);
};
// Handle Giraffe create on POST.
exports.Giraffe_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Giraffe create POST');
};
// Handle Giraffe delete form on DELETE.
exports.Giraffe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Giraffe delete DELETE ' + req.params.id);
};
// Handle Giraffe update form on PUT.
exports.Giraffe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Giraffe update PUT' + req.params.id);
};
