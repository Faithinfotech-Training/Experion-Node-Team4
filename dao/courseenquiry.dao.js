const CourseEnquiry = require('../models/CourseEnquiry');
var courseEnquiryDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateCourseEnquiry: updateCourseEnquiry
}

function findAll() {
    return CourseEnquiry.findAll();
}


function findById(id) {
    return CourseEnquiry.findByPk(id);
}

function deleteById(id) {
    return CourseEnquiry.destroy({ where: { id: id } });
}

function create(courseEnquiry) {
    var newCourseEnquiry = new CourseEnquiry(courseEnquiry);
    return newCourseEnquiry.save();
}

function updateCourseEnquiry(courseEnquiry, id) {
    var updateCourseEnquiry = {
        userid: courseEnquiry.userid,
        userstatus: courseEnquiry.userstatus,
        CourseId: courseEnquiry.CourseId
        
        
    };
    return CourseEnquiry.update(updateCourseEnquiry, { where: { id: id } });
}
module.exports = courseEnquiryDao;