export const handleWatch = (req, res) => {
    res.send("Let's watch some videos");
}

export const handleWatchId = (req, res) => {
    console.log(req.params);
    res.send(`Watch the ${req.params.id} video`);
}