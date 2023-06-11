DROP TABLE IF EXISTS Sells;
DROP TABLE IF EXISTS Favors;
DROP TABLE IF EXISTS Follower;
DROP TABLE IF EXISTS Listings;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Uses_ABD;

CREATE TABLE Users (
    username VARCHAR(28) ,
    passhash VARCHAR NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    location VARCHAR(150) UNIQUE NOT NULL,
    bio VARCHAR(300),
    picture VARCHAR,
    PRIMARY KEY(username)
);

CREATE TABLE Listings (
    lid SERIAL,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(300),
    price INTEGER NOT NULL,
    categories VARCHAR(50),
    img text[],
    sold BOOLEAN DEFAULT false,
    username VARCHAR(28) NOT NULL,
    location  VARCHAR(150),
    PRIMARY KEY (lid),
    FOREIGN KEY (username) REFERENCES Users(username),
    FOREIGN KEY (location) REFERENCES Users(location)
);

CREATE TABLE Sells (
username VARCHAR(28) NOT NULL,
lid SERIAL,
since DATE NOT NULL,
PRIMARY KEY (username, lid),
FOREIGN KEY (username) REFERENCES Users(username),
FOREIGN KEY (lid) REFERENCES Listings(lid)
);

CREATE TABLE Uses_ABD (
    username VARCHAR(28) NOT NULL,
    since DATE NOT NULL,    
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES Users(username)
);

CREATE TABLE Favors (
    username VARCHAR(28) NOT NULL,
    lid SERIAL,
    PRIMARY KEY (username, lid), 
    FOREIGN KEY (username) REFERENCES Users(username),
    FOREIGN KEY (lid) REFERENCES Listings(lid)
);

/* TODO: LOOK AT SLIDES FOR TRIGGERS, SO THAT YOU CAN INCREASE UPON FOLLOW */
CREATE TABLE Follower (
    followerid SERIAL,
    username1 VARCHAR(28),
    username2 VARCHAR(28),
    PRIMARY KEY (followerid),
    FOREIGN KEY (username1) REFERENCES Users(username),
    FOREIGN KEY (username2) REFERENCES Users(username)
);

-- dummy data
INSERT INTO Users VALUES (
    'username', 
    '$2b$10$m0YIOcDUylFimtsbGs11HuoErdxfD9eO6WA/pvOu6CfImUj/PqFmm', 
    'philphil', 
    'Hvidovrevej',
    'This is bio',
    'https://randomuser.me/api/portraits/women/87.jpg'
);
INSERT INTO Users VALUES (
    'anotherUser', 
    '$2b$10$m0YIOcDUylFimtsbGs11HuoErdxfD9eO6WA/pvOu6CfImUj/PqFmm', 
    'hanzomain', 
    'Kokkedal',
    'This is bio',
    'https://randomuser.me/api/portraits/women/63.jpg'
);


INSERT INTO Listings VALUES (
    123,
    'Toy train', 
    'This is toy train very beautiful', 
    20, 
    'games',
    '{https://m.media-amazon.com/images/I/71PKOF8Gz3L._AC_UF894\,1000_QL80_.jpg?w=2000}', 
    false, 
    'username', 
    'Hvidovrevej'
);
INSERT INTO Listings VALUES (
    344, 
    'Astronaut', 
    'Spaaaaace', 
    200000, 
    'service',
    '{https://img.freepik.com/free-photo/astronaut-explores-outer-dark-space-generative-al_169016-28607.jpg?w=2000}',
    false, 
    'username', 
    'Hvidovrevej'
);

INSERT INTO Listings VALUES (
    333,
    'Western saloon',
    'Old western saloon in the old western. Up for sale because the sherif was shot. Get it for cheap',
    130000,
    'Building',
    '{https://upload.wikimedia.org/wikipedia/commons/f/f8/Judge_Roy_Bean.jpg?2=2000}',
    false,
    'anotherUser',
    'Kokkedal'
);
