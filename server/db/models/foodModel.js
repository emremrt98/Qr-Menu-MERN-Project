import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    title: { String, required },
    description: { String, required },
    price: { String, required }
});


const Food = mongoose.model('Food', foodSchema);


export default Food;