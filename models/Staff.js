const Sequelize = require('sequelize');
const db = require('../config/database');

const Staff = db.define('staff', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    staffName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    staffMail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    staffPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    joiningDate: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Staff;