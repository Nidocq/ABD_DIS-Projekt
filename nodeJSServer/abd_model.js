const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my_database',
  password: '',
  port: 5432,
});



const getItems = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM item ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      // console.log(results)
      resolve(results.rows);
    })
  })
}

const createItem = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO item (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      console.log(name)
      console.log(email)
      if (error) {
        console.log("Rejecting promise from CreateItem.");
        reject(error)
      }
      console.log(results)
      resolve(`A new Item has been added added \n name:  ${results.rows[0].name}\n email: ${results.rows[0].email}]`);
    })
  })
}



const registerUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { username, password } = body
    pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password], (error, results) => {
      console.log(username)
      console.log(password)
      if (error) {
        console.log("Rejecting promise from registerUser.");
        reject(error)
      }
      console.log(results)
      resolve(`A new user has been added added \n username:  ${results.rows[0].username}\n password: ${results.rows[0].password}]`);
    })
  })
}

// const deleteItem = () => {
//   return new Promise(function(resolve, reject) {
//     const id = parseInt(request.params.id)
//     pool.query('DELETE FROM Item WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Item deleted with ID: ${id}`)
//     })
//       })
// }

module.exports = {
  getItems,
  createItem,
  registerUser,
  // deleteItem,
}