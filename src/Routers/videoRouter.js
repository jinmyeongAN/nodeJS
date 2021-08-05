import express from "express";
import { getEdit, handleWatchId, postEdit } from "../Controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)/edit', getEdit);
videoRouter.post('/:id(\\d+)/edit', postEdit)
videoRouter.get('/:id(\\d+)', handleWatchId);

export default videoRouter;