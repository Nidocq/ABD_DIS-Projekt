DROP TABLE IF EXISTS Sells;
DROP TABLE IF EXISTS Favorites;
DROP TABLE IF EXISTS Follows;
DROP TABLE IF EXISTS Listings;
DROP TABLE IF EXISTS Users;


CREATE TABLE Users (
    username VARCHAR(28) PRIMARY KEY,
    passhash VARCHAR NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    location VARCHAR(150) UNIQUE NOT NULL,
    bio VARCHAR(300),
    Usersince DATE NOT NULL,
    picture VARCHAR
);

CREATE TABLE Listings (
    lid SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(300),
    price INTEGER NOT NULL,
    categories text[],
    img text[],
    sold BOOLEAN NOT NULL,
    timelisted DATE NOT NULL,
    username VARCHAR(28) NOT NULL,
    location  VARCHAR(150),
    CONSTRAINT fk_user
        FOREIGN KEY (username) 
            REFERENCES Users(username)
        ON DELETE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY (location) 
            REFERENCES Users(location) 
        ON DELETE NO ACTION
);


CREATE TABLE Sells (
username VARCHAR(28) NOT NULL,
lid SERIAL,
since DATE NOT NULL,
CONSTRAINT fk_lid
    FOREIGN KEY (lid)
        REFERENCES Listings(lid),
CONSTRAINT fk_username
    FOREIGN KEY (username)
        REFERENCES Users(username)
);


CREATE TABLE Favorites (
    username VARCHAR(28) NOT NULL,
    lid SERIAL,
    CONSTRAINT fk_username
        FOREIGN KEY (username)
            REFERENCES Users(username),
    CONSTRAINT fk_id
        FOREIGN KEY (lid)
            REFERENCES Listings(lid)
);

CREATE TABLE Follows (
    follower_username VARCHAR(28),
    followed_username VARCHAR(28),
    CONSTRAINT fk_follower_username
        FOREIGN KEY (follower_username)
            REFERENCES Users(username),
    CONSTRAINT fk_followed_username
        FOREIGN KEY (followed_username)
            REFERENCES Users(username)
);

-- dummy data
INSERT INTO Users VALUES (
    'username', 
    '$2b$10$m0YIOcDUylFimtsbGs11HuoErdxfD9eO6WA/pvOu6CfImUj/PqFmm', 
    'philphil', 
    'Hvidovrevej',
    'This is bio',
    Now(),
    'https://randomuser.me/api/portraits/women/87.jpg'
);
INSERT INTO Users VALUES (
    'anotherUser', 
    '$2b$10$m0YIOcDUylFimtsbGs11HuoErdxfD9eO6WA/pvOu6CfImUj/PqFmm', 
    'hanzomain', 
    'Kokkedal',
    'This is bio',
    Now(),
    'https://randomuser.me/api/portraits/women/63.jpg'
);


INSERT INTO Listings VALUES (
    123,
    'Toy train', 
    'This is toy train very beautiful', 
    20, 
    '{toy, games}',
    '{https://m.media-amazon.com/images/I/71PKOF8Gz3L._AC_UF894\,1000_QL80_.jpg?w=2000}', 
    false, 
    Now(),
    'username', 
    'Hvidovrevej'
);
INSERT INTO Listings VALUES (
    344, 
    'Astronaut', 
    'Spaaaaace', 
    200000, 
    '{service}',
    '{https://img.freepik.com/free-photo/astronaut-explores-outer-dark-space-generative-al_169016-28607.jpg?w=2000}',
    false, 
    Now(),
    'username', 
    'Hvidovrevej'
);

INSERT INTO Listings VALUES (
    333,
    'Western saloon',
    'Old western saloon in the old western. Up for sale because the sherif was shot. Get it for cheap',
    130000,
    '{Building}',
    '{https://upload.wikimedia.org/wikipedia/commons/f/f8/Judge_Roy_Bean.jpg?2=2000}',
    false,
    Now(),
    'anotherUser',
    'Kokkedal'
);

INSERT INTO Follows VALUES (
    'anotherUser',
    'username'
);

INSERT INTO Favorites VALUES (
    'anotherUser',
    123
);
