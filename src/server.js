import express from "express";
import morgan from "morgan";
import globalRouter from "./Routers/globalRouter";
import usersRouter from "./Routers/usersRouter";
import videoRouter from "./Routers/videoRouter";

const PORT = 8080; 

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true}));
app.use('/', globalRouter);
app.use('/users', usersRouter);
app.use('/videos', videoRouter);

const handleListening = () => {
    console.log("Your server is listening!")
}

app.listen(PORT, handleListening);