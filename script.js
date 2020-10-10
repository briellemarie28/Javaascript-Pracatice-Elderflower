//declare variable and concatenate string
var greeting = 'Howdy ';
var name = 'Brielle';
var message = ', Please view your order';
var welcome = greeting + name + message;

var sign = "Montague House";
var titles = sign.length;
var subTotal = titles *5;
var shipping = 7;
var grandTotal = shipping + subTotal;

//get the element that has the ID of greeting
var el = document.getElementById('greeting');
//replace the content of that element with a welcome message
el.textContent = welcome;
//get the element with the ID of userSign and update the content 
var elSign = document.getElementById('userSign');
elSign.textContent = sign;
//get the element that has the ID of titles and update its content
var elTitles = document.getElementById('titles');
elTitles.textContent = titles;
//get hte element that has a Id of subTotal and update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal;
//get the element that has the ID of shipping and update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;
//get the element that has the ID of grand total and update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal;

