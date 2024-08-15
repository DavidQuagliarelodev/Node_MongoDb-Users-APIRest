const mongoose = require("mongoose");
const urlConnect = "mongodb+srv://quagliarelodev:<password>@david.abfu0.mongodb.net/?retryWrites=true&w=majority&appName=David";
const connect = mongoose.connect(urlConnect);

module.exports = connect;
