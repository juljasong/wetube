import express from "express";
import routes from "../routes"; // .. : 이전 디렉토리

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.join, (req, res) => res.send('Join'));
globalRouter.get(routes.login, (req, res) => res.send('LogIn'));
globalRouter.get(routes.logout, (req, res) => res.send('LogOut'));
globalRouter.get(routes.search, (req, res) => res.send('Search'));


export default globalRouter; 