var express = require("express");

var router = express.Router();

router.get("/", function (req,res) {
	res.json({message: "This is home page"});
})

router.use("/bmi", require(__dirname + "/bmi"));
router.use("/bmr", require(__dirname + "/bmr"));

module.exports = router;