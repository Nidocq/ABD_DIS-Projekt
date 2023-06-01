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
    const { username  } = body
    pool.query("INSERT INTO users(username, passhash) values($1,$2) RETURNING id, username",
      [username, passhash], (error, results) => {
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