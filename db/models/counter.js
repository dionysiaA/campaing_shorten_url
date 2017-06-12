'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('counter', {
    _id: Sequelize.STRING,
    seq: {
      type: Sequelize.INTEGER,
      defaultValue: 1000
    }
  }
)