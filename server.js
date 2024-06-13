//run nodemon server.js
//runs on http://localhost:3000/
//npm install -g nodemon
//npm install express
//npm init


//include dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    console.log("Hello world");
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var sum = num1 + num2;
    res.send("The result is " + sum);
});

//http://localhost:3000/bmiCalculator
app.get("/bmicalculator", function(req, res){
    console.log("BMI page");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    console.log("BMI Calculated");

    var bmi = 703 * (weight / (height * height));
    res.send("Your BMI is " + bmi.toFixed(2));
});

app.listen(3000, function(){
  console.log("Port on 3000");
});
