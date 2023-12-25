import Food from "../db/models/foodModel.js";

export const createFood = async (req, res) => {
    try {
        const food = new Food(req.body);
        await food.save();

        res.status(201).send({
            succeeded: true,
            message: "Kayıt işlemi başarılı",
            food
        })

    } catch (error) {
        res.status(201).send({
            succeeded: true,
            message: "Kayıt işlemi başarısız",
            error
        })
    }
}

export const getFood = async (req, res) => {
    try {
        const foodArray = await Food.find({});
        console.log('Food Array:', foodArray);

        res.status(201).send({
            succeeded: true,
            message: "Yemekler listelendi",
            foodArray
        })

    } catch (error) {
        res.status(201).send({
            succeeded: true,
            message: "Yemekler getirilemedi",
            error
        })
    }
}