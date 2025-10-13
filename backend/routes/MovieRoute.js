import express from "express";
import {
  getMovie,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controller/movieController.js";

const router = express.Router();

router.get("/movies", getMovie);
router.get("/movies/:id", getMovieById);
router.post("/movies", createMovie);
router.patch("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default router;
