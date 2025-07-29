// const express = require('express');
// const router = express.Router();

// // GET /api/users
// router.get('/', (req, res) => {
//     res.send('All users');
// });

// // POST /api/users
// router.post('/', (req, res) => {
//     res.send('Create user');
// });

// // GET /api/users/:id
// router.get('/:id', (req, res) => {
//     res.send(`User with ID: ${req.params.id}`);
// });

// module.exports = router;

const express = require("express")
const router = express.Router()

router.post("/",(req,res) => {
    const {name,price} = req.body ;
    res.json({name , price})
})

router.get("/",(req,res) => {
    res.send("All Products")
})
router.get("/:id",(req,res) => {
    res.send(`Product with ID ${req.params.id}`)
})
module.exports = router