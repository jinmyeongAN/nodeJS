export const handleEdit = (req, res) => {
    const videos = ['a','b','c','d','e'];
    res.render("home", {pageName:"home", videos}); 
}