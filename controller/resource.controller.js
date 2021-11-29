


const resourceDao = require('../dao/resource.dao');
var resourceController = {
    addResource: addResource,
    findResources: findResources,
    findResourceById: findResourceById,
    updateResource: updateResource,
    deleteById: deleteById
}
//it uses promise in a different way 
//promise
 //.then
  //error

function addResource(req, res) { //function to create data
    let resource = req.body;   //acessing the data from the body of postman  
    resourceDao.create(resource). //calling the create function defined in dao and passing the data
        then((data) => {   
            res.send(data); //if true then send the data
        })
        .catch((error) => {   
            console.log(error); //else show the error
        });
}

function findResourceById(req, res) {     
    resourceDao.findById(req.params.id).  //call the function from dao
                                    //obtain the datafrom the url where req.params.id ie gigs/1
    then((data) => {
            res.send(data);    //if true send data
        })
        .catch((error) => {
            console.log(error);  //else show the error
        });
}

function deleteById(req, res) {
    resourceDao.deleteById(req.params.id). 
        then((data) => {
            res.status(200).json({
                message: "Resource deleted successfully",
                resource: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateResource(req, res) {
    resourceDao.updateResource(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: " Resource updated successfully",
                resource: data           //no.of data updated
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findResources(req, res) {
    resourceDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = resourceController;