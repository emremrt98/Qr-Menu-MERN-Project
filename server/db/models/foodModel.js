import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }
});


const Food = mongoose.model('Food', foodSchema);


export default Food;