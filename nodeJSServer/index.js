const express = require('express')
const app = express()
const port = 3001
const validateForm = require('./controllers/validateForm')
const abd_model = require('./abd_model')
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  res.setHeader('Access-Control-Allow-Credentials', "true");
  next();
});

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
  abd_model.createItem(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.post("/auth/login", async (req, res) => {
  validateForm(req, res)

  const potentialLogin = await abd_model.getUser(req.body.username);
  if (potentialLogin && potentialLogin.rowCount > 0) {
    const isSamePass = req.body.password === potentialLogin.rows[0].password

    if (isSamePass) {
      req.user = {
        username: req.body.username,
        //id: potentialLogin.rows[0].id,
      };
      res.json({ loggedIn: true, username: req.body.username });
    } else {
      res.json({ loggedIn: false, status: "Wrong username or password!" });
      console.log("Not good");
    }
  } else {
    console.log("Not good");
    res.json({ loggedIn: false, status: "Wrong username or password!" });
  }
});

app.post('/auth/register', async (req, res) => {
  validateForm(req, res);
  const existingUser = await abd_model.getUser(req.body.username);
  if (existingUser.rowCount === 0) {
    // register
    abd_model.registerUser(req.body);
    res.json({ loggedIn: true, username: req.body.username });
  } else {
    res.json({ loggedIn: false, status: "Username taken" });
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
