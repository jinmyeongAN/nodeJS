import express from "express";
import { getEdit, handleWatchId, postEdit, getUpload, postUpload } from "../Controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)/edit', getEdit);
videoRouter.post('/:id(\\d+)/edit', postEdit)
videoRouter.get('/:id(\\d+)', handleWatchId);
videoRouter.route('/upload').get(getUpload).post(postUpload)

export default videoRouter;