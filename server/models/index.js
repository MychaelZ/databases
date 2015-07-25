// added bluebird
var bluebird = require('bluebird');
var db = require('../db');
var query = bluebird.promisify(db.query).bind(db);

/* 

ADD EXAMPLES IN THE DATABASE I DELETED EVERYTHING!!!!
*/

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      return query('SELECT * from Messages'); // removed bind;
    }, 
    post: function (username, roomname, objectId, text, time) { // a function which can be used to insert a message into the database
      var userID;
      var roomID;
      query('SELECT userID from Users where username = ' + username)
        .then(function () {
          console.log(arguments);
        });
      // var valuesIntoMessages = [userID, roomID, objectId, text, time];
      // query('INSERT into Messages 
      //   (userID, roomID, objectId, text, time)
      //   values (' + valuesIntoMessages.toString() + ')');
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
