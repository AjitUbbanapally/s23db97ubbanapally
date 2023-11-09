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


// Handle Giraffe delete form on DELETE.
exports.Giraffe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Giraffe delete DELETE ' + req.params.id);
};
// Handle Giraffe update form on PUT.
exports.Giraffe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Giraffe update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.Giraffe_view_all_Page = async function(req, res) {
    try{
    theGiraffe = await Giraffe.find();
    res.render('Giraffe', { title: 'Giraffe Search Results', results: theGiraffe });
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
    exports.Giraffe_create_post = async function(req, res) {
        console.log(req.body)
        let document = new Giraffe();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"Giraffe_type":"goat", "cost":12, "size":"large"}
        document.Giraffe_breed = req.body.Giraffe_breed;
        document.Giraffe_age = req.body.Giraffe_age;
        document.Giraffe_heightfeet = req.body.Giraffe_heightfeet;
        try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };