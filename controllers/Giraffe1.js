var Giraffe = require('../models/Giraffe');
// Handle a show one view with id specified by query
exports.Giraffe_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Giraffe.findById( req.query.id)
    res.render('Giraffedetail',
    { title: 'Giraffe Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a Giraffe.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Giraffe_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Giraffecreate', { title: 'Giraffe Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    exports.Giraffe_view_all_Page = async function (req, res) {
        try {
          theGiraffe = await Giraffe.find();
          //console.log(theGiraffe);
          res.render('Giraffe', { title: 'Giraffe Search Results', results: theGiraffe });
        }
        catch (err) {
          res.status(500);
          res.send(`{"error": ${err}}`);
        }
      };
      