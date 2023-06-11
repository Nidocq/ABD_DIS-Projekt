const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const bcrypt = require("bcrypt");
const abd_model = require("../abd_model");

router
    .route("/login")
    .get(async (req, res) => {
        if (req.session.user && req.session.user.username) {
            res.json({ loggedIn: true, username: req.session.user.username });
            res.json({
                loggedIn: true,
                username: req.session.user.username,
            });
        } else {
            res.json({ loggedIn: false });
        }
    })
    .post(async (req, res) => {
        validateForm(req, res);

        const potentialLogin = await abd_model.getUserByUsername(req.body);
        if (potentialLogin.rowCount > 0) {
            const isSamePass = await bcrypt.compare(
                req.body.password,
                potentialLogin.rows[0].passhash
            );
            if (isSamePass) {
                req.session.user = {
                    username: req.body.username,
                };

                res.json({
                    loggedIn: true,
                    username: req.body.username,
                    fullname: potentialLogin.rows[0].fullname,
                    location: potentialLogin.rows[0].location,
                    bio: potentialLogin.rows[0].bio,
                    picture: potentialLogin.rows[0].picture
                });
            } else {
                res.json({ loggedIn: false, status: "Wrong username or password!" });
                console.log("Password does not match");
            }
        } else {
            console.log("Username does not exist");
            res.json({ loggedIn: false, status: "Wrong username or password!" });
        }
    });

router.post("/signup", async (req, res) => {
    validateForm(req, res);

    const existingUser = await abd_model.getUserByUsername(req.body.username);

    if (existingUser.rowCount === 0) {
        // register
        const hashedPass = await bcrypt.hash(req.body.password, 10);

        await abd_model.registerUser(req.body, hashedPass);

        req.session.user = {
            username: req.body.username,
        };
        res.json({
            loggedIn: true,
            username: req.body.username,
            fullname: req.body.fullname,
            location: req.body.location,
            bio: req.body.bio,
            picture: req.body.picture
        });
    } else {
        res.json({ loggedIn: false, status: "Username taken" });
    }
});

/* router.post("/createlistingitem", async (req, res) => {    */
    
    

router.post("/updateuser", async (req, res) => {
    const updateUserQuery = await abd_model.updateUser(req.body);

    res.json({
        loggedIn: true,
        fullname: req.body.fullname,
        location: req.body.location,
        bio: req.body.bio,
    });
});

router.get("/listingitems", async (req, res) => {
    const listingItems = await abd_model.getListingItems();

    const newListingItems = await Promise.all(
      listingItems.rows.map(async (item) => {
        const sellerUser = await abd_model.getUserByUsername({ username: item.username });
        item.sellerPicture = sellerUser.rows[0].picture;
        return item;
      })
    );
  
    res.json(newListingItems);
})

router.post("/item-preview", async (req, res) => {
    const listingItems = await abd_model.getListingItemsById(req.body);
    res.json(listingItems.rows);
})

router.post("/getuser", async (req, res) => {
    const getUser = await abd_model.getUserByUsername(req.body);
    res.json(getUser.rows[0]);
})

module.exports = router;