const Sequelize = require('sequelize');
const db = require('../config/database');
const Course = require('./Course')

const CourseEnquiry = db.define('CourseEnquiry', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // courseid: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    userstatus: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isIn: ["Purchased", "Interested"]
        }
    }
});

Course.hasMany(CourseEnquiry);

module.exports = CourseEnquiry;