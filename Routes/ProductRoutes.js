const express = require('express')
const router = express.Router()
const Product = require('../Models/Products')

router.post('/admin', async (req, res) => {
    const productData = new Product({
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        image4: req.body.image4,
        title: req.body.title,
        code: req.body.code,
        rate: req.body.rate,
        // original: req.body.original,
        // offer: req.body.offer,
        description: req.body.description,
        category: req.body.category,
        subcategory: req.body.subcategory,
        // requirement: req.body.requirement,
        color1: req.body.color1,
        color2: req.body.color2,
        color3: req.body.color3,
        color4: req.body.color4,
        color5: req.body.color5,
        color6: req.body.color6,
        colorf1: req.body.colorf1,
        colorf2: req.body.colorf2,
        colorf3: req.body.colorf3,
        colorf4: req.body.colorf4,
        fabric1: req.body.fabric1,
        fabric2: req.body.fabric2,
        fabric3: req.body.fabric3,
        fabric4: req.body.fabric4,
        fabric5: req.body.fabric5,
        fabric6: req.body.fabric6,
        specification1: req.body.specification1,
        specification2: req.body.specification2,
        specification3: req.body.specification3,
        specification4: req.body.specification4,
        specification5: req.body.specification5,
        specification6: req.body.specification6,
        craft1: req.body.craft1,
        craft2: req.body.craft2,
        craft3: req.body.craft3,
        measurement:req.body.measurement,
        size:req.body.size,
        careInstruction:req.body.careInstruction,
        disclaimer:req.body.disclaimer,
        length:req.body.length,
        width:req.body.width,
        height:req.body.height,
        weight:req.body.weight
    })
    await productData.save().then((data) => {
        res.status(200).send({
            status: true,
            data: data
        })
    }).catch((err) => {
        res.status(400).send({
            status: false,
            message: "Error while adding Product"
        })
    })
})

router.get('/category/:category', async (req, res) => {
    try {
        const product = await Product.find({ subcategory: req.params.category });
        const data = product.map((e) => {
            return ({ image1: e.image1,  image2: e.image2, title: e.title, rate: e.rate, id: e._id })
        })
        if (product.length == 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.send({
            data
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id });
        if (product) {
            res.send(product[0])
        } else {
            res.send("Product not find")
        }
    } catch (err) {
        res.status(500).send("Error from backend")
    }
})

module.exports = router