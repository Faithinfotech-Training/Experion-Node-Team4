

const Sequelize = require('sequelize');
const db = require('../config/database');

const Resource = db.define('Resource', {
   id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resource_code: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   
    resource_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resource_availability: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resource_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
  
},
{
    initialAutoIncrement: 3000
});

module.exports = Resource