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
      var userId;
      var roomId;
      
      var postData = function (userId, roomId) {
        query('INSERT into Messages (userId, roomId, objectId, text, time) values (' + userId + ',' + roomId + ',' + objectId + ',' + JSON.stringify(text) + ',' + JSON.stringify(time) + ')')
          .then(function () {
            console.log(arguments);
          });
      };

      query('SELECT userId from users where username = ' + JSON.stringify(username))
        .then(function (data) {
          userId = data[0][0].userId;
        })
        .then(function () {
          if (userId !== undefined && roomId !== undefined) postData(userId, roomId);
        });

      query('SELECT roomId from Rooms where roomname = ' + JSON.stringify(roomname))
        .then(function (data) {
          roomId = data[0][0].roomId;
        })
        .then(function () {
          if (userId !== undefined && roomId !== undefined) postData(userId, roomId);
        });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {
      return query('SELECT * from Users');
    },
    post: function (username) {
      query('SELECT MAX(userId) from Users').then(function(data){
        query('INSERT into Users (userId, username) values (' + ( data[0][0]['MAX(userId)'] + 1 ) + ',' + JSON.stringify(username) + ')');
      });
    }
  }
};


// var valuesIntoMessages = [userID, roomId, objectId, text, time];
      // query('INSERT into Messages 
      //   (userID, roomId, objectId, text, time)
      //   values (' + valuesIntoMessages.toString() + ')');