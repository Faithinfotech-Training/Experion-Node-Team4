const courseEnquiryDao = require('../dao/courseenquiry.dao');


var courseEnquiryController = {
    addCourseEnquiry: addCourseEnquiry,
    findCourseEnquirys: findCourseEnquirys,
    findCourseEnquiryById: findCourseEnquiryById,
    updateCourseEnquiry: updateCourseEnquiry,
    deleteById: deleteById,
}

async function addCourseEnquiry(req, res) {
    let courseEnquiry = req.body;
    
    courseEnquiryDao.create(courseEnquiry).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findCourseEnquiryById(req, res) {
    courseEnquiryDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    courseEnquiryDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "CourseEnquiry deleted successfully",
                courseEnquiry: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateCourseEnquiry(req, res) {
    courseEnquiryDao.updateCourseEnquiry(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "CourseEnquiry updated successfully",
                courseEnquiry: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findCourseEnquirys(req, res) {
    courseEnquiryDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = courseEnquiryController;