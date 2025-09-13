import express from "express";
import { createFaculty, getFaculty } from "../controllers/facultyController.js";

const router = express.Router();
router.post("/", createFaculty);
router.get("/", getFaculty);

export default router;
