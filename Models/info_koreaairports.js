var mongoose = require("mongoose");

var KoreaAirportInfoSchema = new mongoose.Schema({
    airport_name: String,
    airport_district: String,
    latitude: Number,
    longitude: Number
});

mongoose.model('info_koreaairports', KoreaAirportInfoSchema);

module.exports = mongoose.model('info_koreaairports');