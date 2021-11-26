const courseDao = require('../dao/course.dao');


var courseController = {
    addCourse: addCourse,
    findCourses: findCourses,
    findCourseById: findCourseById,
    updateCourse: updateCourse,
    deleteById: deleteById,
}

async function addCourse(req, res) {
    let course = req.body;
    
    courseDao.create(course).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findCourseById(req, res) {
    courseDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    courseDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Course deleted successfully",
                course: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateCourse(req, res) {
    courseDao.updateCourse(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Course updated successfully",
                course: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findCourses(req, res) {
    courseDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = courseController;