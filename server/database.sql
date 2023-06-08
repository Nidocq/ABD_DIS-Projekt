DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    username VARCHAR(28) PRIMARY KEY,
    id SERIAL UNIQUE, 
    passhash VARCHAR NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    location VARCHAR(150) UNIQUE NOT NULL,
    bio VARCHAR(300),
    user_since DATE NOT NULL,
    picture VARCHAR
);

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(300),
    price INTEGER NOT NULL,
    categories text[],
    img text[],
    sold BOOLEAN NOT NULL,
    time_listed DATE NOT NULL,
    username VARCHAR(28) NOT NULL,
    location  VARCHAR(150),
    CONSTRAINT fk_user
        FOREIGN KEY (username) 
            REFERENCES users(username)
        ON DELETE CASCADE,
    CONSTRAINT fk_location
        FOREIGN KEY (location) 
            REFERENCES users(location) 
        ON DELETE NO ACTION
);

CREATE TABLE favorites (
    username VARCHAR(28) NOT NULL,
    id SERIAL ,
    CONSTRAINT fk_username
        FOREIGN KEY (username)
            REFERENCES users(username),
    CONSTRAINT fk_id
        FOREIGN KEY (id)
            REFERENCES listings(id)
);

CREATE TABLE follows (
    follower_username VARCHAR(28),
    followed_username VARCHAR(28),
    CONSTRAINT fk_follower_username
        FOREIGN KEY (follower_username)
            REFERENCES users(username),
    CONSTRAINT fk_followed_username
        FOREIGN KEY (followed_username)
            REFERENCES users(username)
);

-- dummy data
INSERT INTO users VALUES (
    'username', 
    11, 
    '$2b$10$m0YIOcDUylFimtsbGs11HuoErdxfD9eO6WA/pvOu6CfImUj/PqFmm', 
    'philphil', 
    'Hvidovrevej',
    'This is bio',
    Now(),
    'https://randomuser.me/api/portraits/women/87.jpg'
);
INSERT INTO users VALUES (
    'anotherUser', 
    12, 
    '$2b$10$m0YIOcDUylFimtsbGs11HuoErdxfD9eO6WA/pvOu6CfImUj/PqFmm', 
    'hanzomain', 
    'Kokkedal',
    'This is bio',
    Now(),
    'https://randomuser.me/api/portraits/women/63.jpg'
);
INSERT INTO listings VALUES (
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
INSERT INTO listings VALUES (
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
INSERT INTO listings VALUES (
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

INSERT INTO follows VALUES (
    'anotherUser',
    'username'
);

INSERT INTO favorites VALUES (
    'anotherUser',
    123
);
