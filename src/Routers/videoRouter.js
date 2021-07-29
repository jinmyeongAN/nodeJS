import express from "express";
import { handleWatch, handleWatchId } from "../Controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/watch', handleWatch);
videoRouter.get('/watch/:id(\\d+)', handleWatchId);

export default videoRouter;