const staffDao = require('../dao/staff.dao');
const bcrypt = require('bcrypt');
const { findEmail } = require('../dao/staff.dao');

var staffController = {
    addStaff: addStaff,
    findStaffs: findStaffs,
    findStaffById: findStaffById,
    updateStaff: updateStaff,
    deleteById: deleteById,
    authenticateStaff: authenticateStaff
}

async function addStaff(req, res) {
    let staff = req.body;
    const hashedPassword = await bcrypt.hash(req.body.staffPassword, 10);
    staff.staffPassword = hashedPassword;
    staffDao.create(staff).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findStaffById(req, res) {
    staffDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    staffDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Staff deleted successfully",
                staff: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateStaff(req, res) {
    staffDao.updateStaff(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Staff updated successfully",
                staff: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findStaffs(req, res) {
    staffDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function authenticateStaff(req, res){
    const user = await staffDao.findEmail(req.body);
    if(user == null) return res.status(400).send('Cannot find user');
    console.log(user)

    try{
        if(await bcrypt.compare(req.body.staffPassword, user.staffPassword)){
            res.send('Success')
        }else{
            res.send('Not allowed')
        }
    }
    catch{
        res.status(500).send()
    }
}



module.exports = staffController;