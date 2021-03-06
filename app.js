/* express App 생성 */
import express from "express";
//const express = require('express'); // import express
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//import { userRouter } from "./routers/userRouter"; // not default export
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";

const app = express(); // app 변수 선언하여 express 실행

app.use(helmet()); // 옵션 X
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // 옵션 지정

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use("/uploads", express.static("uploads")); //dir에서 file을 보내주는 middleware
app.use("/static", express.static("static"));
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
