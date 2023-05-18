const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});



const getItems = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM item ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      // console.log(results)
      resolve(results.rows);
    })
  }) 
}

// const createItem = (body) => {
//   return new Promise(function(resolve, reject) {
//     const { name, email } = body
//     pool.query('INSERT INTO Item (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`A new Item has been added added: ${results.rows[0]}`)
//     })
//   })
// }
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
  // createItem,
  // deleteItem,
}