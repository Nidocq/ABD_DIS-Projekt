const express = require('express')
const app = express()
const port = 3001
const authRouter = require('./routers/authrouters')

const abd_model = require('./abd_model')
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  res.setHeader('Access-Control-Allow-Credentials', "true");
  next();
});
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  abd_model.getItems()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/item', (req, res) => {
  console.log("Hello i am req.body: " + req.body.email);
  abd_model.createItem(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    console.log("I get a server errror!!!");
    res.status(500).send(error);
  })
})


app.post('/auth/register', (req, res) => {
  //console.log("Hello i am req.body: " + req.body.email);
  console.log("Name of user: " + req.body.name)
  abd_model.registerUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    console.log("I get a server errror!!!", error);
  })
})    


// app.delete('/Items/:id', (req, res) => {
//   abd_model.deleteItem(req.params.id)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
