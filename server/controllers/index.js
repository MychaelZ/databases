var models = require('../models');
var bluebird = require('bluebird');
//var models = bluebird.promisifyAll(require('../models'));



module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // models.messages.get()
      //   .then(function (data) {
      //     var rows = data[0];
      //     var fields = data[1];
      //     res.send(rows);
      //   });

      // not suppose to be here 
      models.messages.post('mychael');
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post('mychael');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

