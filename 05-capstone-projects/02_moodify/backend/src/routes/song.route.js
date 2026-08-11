import { Router } from "express";
import { getSong, uploadSongController } from "../controller/song.controller.js";
import upload from "../middleware/multer.middleware.js";

const songRouter = Router();

songRouter.post("/song", upload.single("song"), uploadSongController);
songRouter.get("/song", getSong);

export default songRouter;
