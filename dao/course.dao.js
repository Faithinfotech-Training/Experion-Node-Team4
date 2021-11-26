const Course = require('../models/Course');
var courseDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateCourse: updateCourse
}

function findAll() {
    return Course.findAll();
}


function findById(id) {
    return Course.findByPk(id);
}

function deleteById(id) {
    return Course.destroy({ where: { id: id } });
}

function create(course) {
    var newCourse = new Course(course);
    return newCourse.save();
}

function updateCourse(course, id) {
    var updateCourse = {
        coursename: course.coursename,
        coursecode: course.coursecode,
        coursefee: course.coursefee,
        category: course.category
        
        
    };
    return Course.update(updateCourse, { where: { id: id } });
}
module.exports = courseDao;