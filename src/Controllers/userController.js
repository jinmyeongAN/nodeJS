export const handleEdit = (req, res) => {
    const videos = [
        {
            title: "movie_1",
            views: 54,
            rating: 3
        },
        {
            title: "movie_2",
            views: 84,
            rating: 7
        },
        {
            title: "movie_3",
            views: 9,
            rating: 6
        }
    ]
    res.render("home", {pageName:"home", videos}); 
}