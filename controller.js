const path = require("path");

exports.sendLandingPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
}