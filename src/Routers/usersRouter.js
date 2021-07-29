import express from "express";
import { handleEdit } from "../Controllers/userController";

const usersRouter = express.Router();

usersRouter.get('/edit', handleEdit);

export default usersRouter;