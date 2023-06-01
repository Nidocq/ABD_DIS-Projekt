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
        } else {
            res.json({ loggedIn: false });
        }
    })
    .post(async (req, res) => {
        validateForm(req, res);

        const potentialLogin = await abd_model.getUser(req.body.username);
        if (potentialLogin.rowCount > 0) {
            const isSamePass = await bcrypt.compare(
                req.body.password,
                potentialLogin.rows[0].passhash
            );
            if (isSamePass) {
                req.session.user = {
                    username: req.body.username,
                    id: potentialLogin.rows[0].id,
                };
                res.json({ loggedIn: true, username: req.body.username });
            } else {
                res.json({ loggedIn: false, status: "Wrong username or password!" });
                console.log("not good");
            }
        } else {
            console.log("not good");
            res.json({ loggedIn: false, status: "Wrong username or password!" });
        }
    });

router.post("/signup", async (req, res) => {
    validateForm(req, res);

    const existingUser = await abd_model.getUser(req.body.username);

    if (existingUser.rowCount === 0) {
        // register
        const hashedPass = await bcrypt.hash(req.body.password, 10);
    
        const newUserQuery = await abd_model.registerUser(req.body, hashedPass);
        req.session.user = {
            username: req.body.username,
            id: newUserQuery.rows[0].id,
        };
        res.json({ loggedIn: true, username: req.body.username });
    } else {
        res.json({ loggedIn: false, status: "Username taken" });
    }
});
module.exports = router;