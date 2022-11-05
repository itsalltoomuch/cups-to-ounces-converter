### This is a simple page that uses HTML + JS to to convert cups to ounces.

## Briefly introduction: 
Reference: https://www.calculatorful.com/cups-to-ounces

The cup is a volume measurement equivalent to 16 tablespoons or 8 fluid ounces. The cup should not be confused with the metric cup or the teacup, which are both volume units. One cup is around 236.6 millilitres, although in nutrition labeling, one cup is 240 millilitres.

One ounce is a mass/weight unit equal to 1/16 of a pound. The ounce is a customary and imperial weight unit in the United States.

So, [how many ounces in a cup?](https://www.calculatorful.com/cups-to-ounces)? 

We can use this formular to convert cups to ounces
```
ounces= cups ×8.345404× ingredient density 
```
## Steps to create the website
1. Create a html file with the content
```
<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="script.js"></script>
</head>

<body>
	<h1><b>Cups to Ounces</b></h1>
	<input placeholder="Number of Cups" id="cups"></input>
	<button>Convert to Ounces</button>
	<p id="result"> ounces </p>

</body>

</html>
```
2. Create js file to define the function
```
$(document).ready(function () {

	$("button").click(function () {
		var cup = $("#cups").val();
		var factor = 8.345404;
		var density = 1; // density of water
		var ounce = cup * factor * density;
		console.log(ounce);
		$("#result").text(ounce);
	});
});

```