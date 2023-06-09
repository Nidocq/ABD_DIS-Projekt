const pool = require("./db");

const registerUser = (body, passhash) => {
  return new Promise(function (resolve, reject) {
    const { username, fullname, location, bio, picture } = body

// TODO ADD QUERY TO CHECK IF USERNAME EXISTS

// TODO ADD QUERY TO INSERT INTO Uses_ABD TABLE WITH USERNAME AND DATE

    pool.query("INSERT INTO Users(username, passhash, fullname, location, bio, picture) values($1,$2,$3,$4,$5,$6) RETURNING username",
      [username, passhash, fullname, location, bio, picture], (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results);
        }
      })
  })
}

const updateUser = (body) => {
  return new Promise(function (resolve, reject) {

    const { username, fullname, location, bio } = body
    pool.query("UPDATE Users SET fullname=$2, location=$3, bio=$4 WHERE username=$1 RETURNING username",
      [username, fullname, location, bio], (error, results) => {
        if (error) {
          reject(error)
        } else {
          resolve(results);
        }
      })
  })
}

const getListingItems = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM Listings", (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}

const getListingItemsById = (body) => {

  return new Promise(function (resolve, reject) {
    const { itemId } = body

    pool.query("SELECT * FROM Listings WHERE lid=$1", [itemId], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}

const getUserByUsername = (body) => {
  return new Promise(function (resolve, reject) {
    const { username } = body
    pool.query("SELECT * FROM Users u WHERE u.username=$1", [username], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}


// TODO ADD QUERY TO CREATE A NEW LISTING

module.exports = {
  registerUser,
  updateUser,
  getListingItems,
  getListingItemsById,
  getUserByUsername
}