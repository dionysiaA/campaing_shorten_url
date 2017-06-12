'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var counter = require('./counter')

module.exports = db.define('url', {
  _id: { type: Sequelize.INTEGER, defaultValue: 1000 },
  long_url: Sequelize.STRING,
  created_at:  { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
  }, {
  hooks: {
    afterCreate: (url, options) => {
      console.log('i am in this hook now')
      counter.findOne({ where: {_id: 'url_count'}})
        .then((counter) => {
          console.log('counter', counter)
          return counter.increment('seq')
        })
        .then((updatedCounter) => {
        console.log('this is where i am failing!!!')
          url.created_at = new Date();
          url._id = updatedCounter.seq;
        })
    }
  },
  indexes: [
    // Create a unique index on poem
    {
      unique: true,
      fields: ['_id']
    }
    ]
  }
)

