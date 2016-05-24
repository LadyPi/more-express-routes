'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();



app.listen (port, function() {
	console.log('Server runnin at localhost: 3000/');
});

app.get("/color/:choice", function(request, response) {
	const choice = req.params.choice;
	res.send("Your color is: " + choice);
});
