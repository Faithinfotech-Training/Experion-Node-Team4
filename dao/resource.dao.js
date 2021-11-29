
//defining the operations


const Resource= require('../models/Resource');

var resourceDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateResource: updateResource
}

function findAll() {   //inbuilt method to find  all the elemnts in a database
    return  Resource.findAll();     
}

function findById(id) {        
    return Resource.findByPk(id);     //inbuilt method find elemnts by particular id
}

function deleteById(id) {
    return Resource.destroy({ where: { id: id } });   //inbuilt method to delelte elemnts with particular id
}

function create(resource) {  //inbuilt method to create elemnts
    var newResource = new Resource(resource);
    return newResource.save();    //saving the newWresource
}

function updateResource(resource, id) {
    var updateResource = {
        resource_code: resource.resource_code,
        resource_name: resource.resource_name,
        resource_availability: resource.resource_availability,
        resource_price : resource.resource_price
        
    };
    return Resource.update(updateResource, { where: { id: id } });
}
module.exports = resourceDao;