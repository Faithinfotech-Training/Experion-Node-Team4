const Sequelize = require('sequelize');
const db = require('../config/database');

const Course = db.define('Course', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    coursecode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    coursename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    coursefee: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isIn: [["Web Dev", "ML", "IOT"]],
        }
    },
    
},
{
    initialAutoIncrement: 1000
});

module.exports = Course;