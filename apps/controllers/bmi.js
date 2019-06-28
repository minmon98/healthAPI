var express = require("express");

var router = express.Router();

router.get("/", function (req,res) {
	res.json({message: "This is bmi page"});
})

router.post("/", function (req,res) {
	// calculate bmi
	var height = req.body.height;
	var weight = req.body.weight;
	var bmi = weight/(height*height);
	
	// comment
	var cmt = "";
	if (bmi > 40) {
		cmt = "Béo phì cấp 3";
	} else if (bmi > 35 && bmi <= 40) {
		cmt = "Béo phì cấp 2";
	} else if (bmi > 30 && bmi <= 35) {
		cmt = "Béo phì cấp 1";
	} else if (bmi > 25 && bmi <= 30) {
		cmt = "Hơi béo";
	} else if (bmi > 18.5 && bmi <= 25) {
		cmt = "Bình thường";
	} else {
		cmt = "Gầy";
	}
	if (bmi != null) {
		res.json({message: "successfully", bmi: bmi, comment: cmt});
	} else {
		res.json({message: "Fail"});
	}
})

module.exports = router; 