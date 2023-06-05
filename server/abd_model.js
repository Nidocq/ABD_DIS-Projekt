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

module.exports = {
  registerUser,
  getUser
}