import { reset } from "nodemon";
import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => { // async() - await()
    try {
        const videos = await Video.find({}); // DB에 저장된 모든 video 가져올 때 까지 대기
        console.log(videos);
        res.render("home", { pageTitle: "Home", videos}); 
    } catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: []}); 
    }
};

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    const{
        query: {term: searchingBy}
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos});
}

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload"});
};

export const postUpload = async(req, res) => {
    const { 
        body: {title, description},
        file: {path}
    } = req;
    // To Do : Upload and Save Video
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req, res) => {
    const {
        params: {id}
    } =req;
    try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: "Video Detail", video /*:video*/});
    } catch(error) {
        res.redirect(routes.home);
    }
};

export const getEditVideo = async(req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
    }catch(error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async(req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
        await Video.findOneAndUpdate({ id }, {title, description }); // findOneAndUpdate(조건, SET 값)
        res.redirect(routes.videoDetail(id));
    try {

    }catch(error) {
        res.redirect(routes.home);
    }
};

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});