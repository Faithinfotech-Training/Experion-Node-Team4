const Staff = require('../models/Staff');
var staffDao = {
    findAll: findAll,
    findEmail: findEmail,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateStaff: updateStaff
}

function findAll() {
    return Staff.findAll();
}

function findEmail(body){
    return Staff.findAll({
        where: {
          staffMail: body.staffMail
        }
      });
   
      // SELECT * FROM post WHERE authorId = 2;
}

function findById(id) {
    return Staff.findByPk(id);
}

function deleteById(id) {
    return Staff.destroy({ where: { id: id } });
}

function create(staff) {
    var newStaff = new Staff(staff);
    return newStaff.save();
}

function updateStaff(staff, id) {
    var updateStaff = {
        staffName: staff.staffName,
        staffMail: staff.staffMail,
        staffPassword: staff.staffPassword,
        joiningDate: staff.joiningDate,
        
    };
    return Staff.update(updateStaff, { where: { id: id } });
}
module.exports = staffDao;