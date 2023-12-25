import express from "express";
import { createFood, getFood } from "../controller/foodController.js";

const router = express.Router();

router.get('/api/food', getFood);
router.post('/api/food', createFood)


export default router;