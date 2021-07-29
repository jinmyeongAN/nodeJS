import express from "express";

const globalRouter = express.Router();

const handleHome = (req,res) => {
    res.send("Homepage");
}

globalRouter.get('/', handleHome);

export default globalRouter;