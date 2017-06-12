'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('dress', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  designer: Sequelize.STRING,
  image: {
    //link to the image
    type: Sequelize.STRING
  }
}
)
