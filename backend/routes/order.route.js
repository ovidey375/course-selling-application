import express from "express";
import { makeOrder } from "../controller/order.controller.js";

const router = express.Router();

router.post("/", makeOrder);

export default router;
