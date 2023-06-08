const pool = require("./db");

const getUser = (username) => {
  return new Promise(function (resolve, reject) {
    pool.query( "SELECT id, username, passhash FROM users u WHERE u.username=$1", [username], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}

const getUserByUsername = (reqUsername) => {
  return new Promise(function (resolve, reject) {
    pool.query( "SELECT * FROM users u WHERE u.username=$1", [reqUsername], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}


const registerUser = (body, passhash) => {
  return new Promise(function (resolve, reject) {
    const { username, fullname, location, bio  } = body
    pool.query("INSERT INTO users(username, passhash, fullname, location, bio) values($1,$2,$3,$4,$5) RETURNING id, username",
      [username, passhash, fullname, location, bio], (error, results) => {
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
    
    const { username, fullname, location, bio  } = body
    console.log(body);
    pool.query("UPDATE users SET fullname=$2, location=$3, bio=$4 WHERE username=$1 RETURNING id, username",
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
    pool.query("SELECT * FROM listings", (error, results) => {
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

    pool.query("SELECT * FROM listings WHERE id=$1", [itemId], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}


module.exports = {
  registerUser,
  getUser,
  updateUser,
  getListingItems,
  getListingItemsById,
  getUserByUsername
}