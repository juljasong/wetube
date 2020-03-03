import express from "express";
import routes from "../routes";
import {uploadVideo} from "../middlewares";
import {getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); /* upload -> videos/ 폴더에 postUpload 함수 실행*/

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter; 
