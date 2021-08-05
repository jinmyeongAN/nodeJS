import express from "express";
import { handleHome } from "../Controllers/videoController";

const globalRouter = express.Router();

globalRouter.get('/', handleHome);

export default globalRouter;