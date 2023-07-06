const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        image1: {
            type: String,
        },
        image2: {
            type: String,
        },
        image3: {
            type: String,
        },
        image4: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
        subcategory: {
            type: String,
            required: true,
        },
        color1: {
            type: String,
            required: true,
        },
        color2: String,
        color3: String,
        color4: String,
        color5: String,
        color6: String,
        colorf1: {
            type: String,
            required: true,
        },
        colorf2: String,
        colorf3: String,
        colorf4: String,
        length:{
            type: Number,
            required: true,
        },
        width:{
            type: Number,
            required: true,
        },
        height:{
            type: Number,
            required: true,
        },
        weight:{
            type: Number,
            required: true,
        },
        fabric1:{
            type: String,
            required: true,
        },
        fabric2:String,
        fabric3:String,
        fabric4:String,
        fabric5:String,
        fabric6:String,
        craft1:{
            type: String,
            required: true,
        },
        craft2:String,
        craft3:String,
        specification1:{
            type: String,
            required: true,
        },
        specification2:String,
        specification3:String,
        specification4:String,
        specification5:String,
        specification6:String,
        measurement:{
            type: String,
            required: true,
        },
        size:{
            type: String,
            required: true,
        },
        careInstruction:{
            type: String,
            required: true,
        },
        disclaimer:{
            type: String,
            required: true,
        },
    },
)

module.exports = mongoose.model("Product", productSchema);