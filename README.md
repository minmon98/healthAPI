# healthAPI
API calculate BMI and BMR

## Calculate BMI

1. URL: localhost:3000/bmi
2. Request body 
`
{
	"weight": 80,
	"height": 1.64
}
`
3. Response
`
{
    "message": "successfully",
    "bmi": 29.744199881023206,
    "comment": "Hơi béo"
}
`

## Calculate BMR

1. URL: localhost:3000/bmr
2. Request body
`
{
	"height": 1.64,
	"weight": 64,
	"age": 21
}
`
3.Response
`
{
    "message": "Successfully",
    "bmr": 1173.652
}
`
