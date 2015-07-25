CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE Rooms (
  roomId INT(4),
  roomname VARCHAR(20),
  PRIMARY KEY (roomId)
);

CREATE TABLE Users (
  userId INT(4),
  username VARCHAR(20),
  PRIMARY KEY (userId)
);

CREATE TABLE Messages (
  -- text might throw error
  /* Describe your table here.*/
  userId INT(4),
  roomId INT(4),
  objectId VARCHAR(20),
  text VARCHAR(150), 
  time DATE,
  PRIMARY KEY (objectId),
  FOREIGN KEY (userId) REFERENCES Users(userId),
  FOREIGN KEY (roomId) REFERENCES Rooms(roomId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

insert into Rooms (roomId, roomname) values (0, 'Hack Reactor');
insert into Rooms (roomId, roomname) values (1, 'Maker Square');
insert into Rooms (roomId, roomname) values (2, 'App Academy');

insert into Users (userId, username) values (0, 'Mr Zuniga');
insert into Users (userId, username) values (1, 'Mr Koch');
insert into Users (userId, username) values (2, 'Mr Linus');

insert into Messages (userId, roomId, objectId, text, time) values (0,0,0,'bruhh', '1994-03-16');
insert into Messages (userId, roomId, objectId, text, time) values (0,0,1,'yeeee', '1994-02-28');
insert into Messages (userId, roomId, objectId, text, time) values (1,2,2,'Yuuuup','2004-02-12');
insert into Messages (userId, roomId, objectId, text, time) values (2,2,3,'I wish I was as cool as Mychael', '2015-07-25');

