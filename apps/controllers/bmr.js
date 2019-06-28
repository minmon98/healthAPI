var express = require("express");

var router = express.Router();

router.get("/", function (req,res) {
	res.json({message: "This is bmr page"});
})

router.post("/", function (req,res) {
	
	// calculate bmr
	var gender = req.body.gender;
	var height = req.body.height;
	var weight = req.body.weight;
	var age = req.body.age;

	var bmr = 0;
	if (gender == "male") {
		bmr = 66 + (13.7*weight) + (5*height) - (6.76*age);
	} else {
		bmr = 655 + (9.6*weight) + (1.8*height) - (4.7*age);
	}

	if (bmr != null) {
		res.json({message: "Successfully", bmr: bmr});
	} else {
		res.json({message: "Fail"});
	}
})

module.exports = router;