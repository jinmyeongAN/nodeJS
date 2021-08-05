let videos = [
    {
        title: "movie_1",
        views: 54,
        rating: 3,
        id: 1,
    },
    {
        title: "movie_2",
        views: 84,
        rating: 7,
        id: 2,
    },
    {
        title: "movie_3",
        views: 9,
        rating: 6,
        id: 3,
    }
]

export const handleHome = (req, res) => {
    res.render("home", {pageName:"Home", videos});
}
export const getEdit = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("edit",{pageName: `Edit video ${video.title}`, video});
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    const {title} = req.body;
    video.title = title;
    res.redirect(`/videos/${id}`);
}
export const handleWatchId = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("watch",{pageName: `Watch video ${video.title}`, video});
}
export const getUpload = (req, res) => {
    res.render("upload",{pageName: "Upload"})
}
export const postUpload = (req, res) => {
    //add new video
    const {title} = req.body;
    const newVideo = {
        title,
        views: 1,
        rating: 5,
        id: 4,
    }
    videos.push(newVideo);
    res.redirect('/');
}