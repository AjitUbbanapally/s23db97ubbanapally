var Giraffe = require('../models/Giraffe');
// List of all Giraffe
// List of all Costumes
exports.Giraffe_list = async function (req, res) {
  try {
    Giraffe = await Giraffe.find();
    res.send(Giraffe);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};


// Handle Giraffe delete form on DELETE.
exports.Giraffe_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Giraffe delete DELETE ' + req.params.id);
};
// // Handle Giraffe update form on PUT.
// exports.Giraffe_update_put = function (req, res) {
//   res.send('NOT IMPLEMENTED: Giraffe update PUT' + req.params.id);
// };

// Handle Giraffe update form on PUT.
exports.Giraffe_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Giraffe.findById( req.params.id)
// Do updates of properties
if(req.body.Giraffe_breed)toUpdate.Giraffe_breed = req.body.Giraffe_breed;
if(req.body.Giraffe_age) toUpdate.Giraffe_age = req.body.Giraffe_age;
if(req.body.Giraffe_heightfeet) toUpdate.Giraffe_heightfeet = req.body.Giraffe_heightfeet;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};


// VIEWS
// Handle a show all view
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


// for a specific Giraffe.

exports.Giraffe_detail = async function (req, res) {
  //console.log("detail" + req.params.id)
  try {
    result = await Giraffe.findById(req.params.id)
    console.log(result);
    res.send(result)
  } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};



// Handle Giraffe create on POST.
exports.Giraffe_create_post = async function (req, res) {
  console.log(req.body)
  let document = new Giraffe();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"Giraffe_type":"goat", "cost":12, "size":"large"}
  document.Giraffe_breed = req.body.Giraffe_breed;
  document.Giraffe_age = req.body.Giraffe_age;
  document.Giraffe_heightfeet = req.body.Giraffe_heightfeet;
  try {
    let result = await document.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);

  }
  
};
