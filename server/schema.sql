CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE Rooms (
  roomID INT(4),
  name VARCHAR(20),
  PRIMARY KEY (roomID)
);

CREATE TABLE Users (
  userID INT(4),
  username VARCHAR(20),
  PRIMARY KEY (userID)
);

CREATE TABLE Messages (
  -- text might throw error
  /* Describe your table here.*/
  userID INT(4),
  roomID INT(4),
  objectId VARCHAR(20),
  text VARCHAR(150), 
  time DATE,
  PRIMARY KEY (objectId),
  FOREIGN KEY (userID) REFERENCES Users(userID),
  FOREIGN KEY (roomID) REFERENCES Rooms(roomID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

