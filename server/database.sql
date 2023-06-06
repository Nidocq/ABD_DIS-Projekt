DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS follows;


CREATE TABLE users(
    username VARCHAR(28) PRIMARY KEY,
    id SERIAL UNIQUE, 
    passhash VARCHAR NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    location VARCHAR(150) NOT NULL,
    bio VARCHAR(300) NOT NULL
);

CREATE TABLE listings (
    id SERIAL UNIQUE,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price INTEGER NOT NULL,
    img VARCHAR(300) NOT NULL,
    sold BOOLEAN NOT NULL,
    username VARCHAR(28) NOT NULL,
    location VARCHAR(150) REFERENCES users ON DELETE CASCADE,
    CONSTRAINT fk_user
        FOREIGN KEY (username) 
        REFERENCES users(username)
            ON DELETE CASCADE
);