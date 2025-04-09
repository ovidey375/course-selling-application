import express from "express";
import {
  login,
  logout,
  purchases,
  signUp,
} from "../controller/user.controller.js";
import userMiddleware from "../middleware/user.mid.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", login);
router.get("/logout", logout);

router.get("/purchased", userMiddleware, purchases);

export default router;
