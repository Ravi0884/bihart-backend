const express=require('express')
const router=express.Router()
const ProductRoutes = require('./ProductRoutes')
const UserRoutes = require('./UserRoutes')
router.get('/',(req, res) =>{
    res.send("Welcome to stack clone")
});

router.use('/api',ProductRoutes);
router.use('/user',UserRoutes);


module.exports = router;