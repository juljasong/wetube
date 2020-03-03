import express from "express";
import routes from "../routes";
import {uploadVideo} from "../middlewares";
import {getUpload, postUpload, videoDetail, editVideo, deleteVideo } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); /* upload -> videos/ 폴더에 postUpload 함수 실행*/

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter; 
