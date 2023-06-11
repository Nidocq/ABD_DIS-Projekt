const pool = require("./db");

const registerUser = (body, passhash) => {
  return new Promise(function (resolve, reject) {
    const { username, fullname, location, bio, picture } = body

    // TODO ADD QUERY TO CHECK IF USERNAME EXISTS

    // TODO ADD QUERY TO INSERT INTO Uses_ABD TABLE WITH USERNAME AND DATE

    pool.query(`
      INSERT INTO Users
        (username, passhash, fullname, location, bio, picture) VALUES 
        ($1,$2,$3,$4,$5,$6) 
          RETURNING username, fullname, location, bio, picture
    `,
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
    pool.query(`
      UPDATE Users 
      SET fullname=$2, location=$3, bio=$4 
      WHERE username=$1 
      RETURNING username
    `,
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

    pool.query(`SELECT * 
                FROM Listings 
                WHERE lid=$1`,
      [itemId], (error, results) => {
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
    pool.query(`
      SELECT * FROM Users u 
      WHERE u.username=$1`, [username], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  })
}

const createListItem = (body) => {
  return new Promise(function (resolve, reject) {
    const { title, description, price, img, categories, username, location} = body;
    pool.query(`
      INSERT INTO Listings 
      (title, description, price, img, categories, username, location) VALUES
      ($1,$2,$3,$4,$5,$6,$7) 
      RETURNING lid`,
       [title, description, price, img, categories, username, location], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      })
  })
}

const updateListItem = (body) => {
return new Promise(function (resolve, reject) {

  const { title, description, price, img, categories, username, location } = body;
  pool.query(`
    UPDATE Listings 
    SET title=$2, description=$3, price=$4, img=$5, categories=$6, username=$1, location=$7 
    WHERE username=$1 
    RETURNING lid
  `,
    [username, title, description, price, img, categories, location], (error, results) => {
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
  updateUser,
  getListingItems,
  getListingItemsById,
  getUserByUsername,
  createListItem,
  updateListItem
}