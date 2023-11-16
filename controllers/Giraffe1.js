var Giraffe = require('../models/Giraffe');
const mongoose = require("mongoose")
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

      // Handle building the view for updating a Giraffe.
// query provides the id
exports.Giraffe_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await Giraffe.findById(req.query.id)
  res.render('Giraffeupdate', { title: 'Giraffe Update', toShow: result });
  }
  catch(err){
  res.status(500)
  console.log("hi")
  res.send(`{'error': '${err}'}`);
  }
  };


  // Handle a delete one view with id from query
exports.Giraffe_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
    
  result = await Giraffe.findById(req.query.id);
  console.log(result);
  res.render('Giraffedelete', { title: 'Giraffe Delete', toShow:
  result });
  }
  catch(err){
   
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };
      