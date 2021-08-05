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
export const handleEdit = (req, res) => {
    res.render("home", {pageName:"home", videos}); 
}