var models = require('../models');
var bluebird = require('bluebird');
//var models = bluebird.promisifyAll(require('../models'));



module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get()
        .then(function (data) {
          var rows = data[0];
          var fields = data[1];
          res.send(rows);
        });

      // not suppose to be here 

    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post('Mr Zuniga', 'Hack Reactor');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.get()
      //   .then(function (data) {
      //     var rows = data[0];
      //     var fields = data[1];
      //     res.send(rows);
      //   });
      models.users.post('Mr Nick');
    },
    post: function (req, res) {
      //models.users.post('Jose Cuervo');
    }
  }
};