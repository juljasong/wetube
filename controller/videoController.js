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

export const postUpload = (req, res) => {
    const {
        body: {
            file, title, description
        }
    } = req;
    // To Do : Upload and Save Video
    res.redirect(routes.videoDetail(123456));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});