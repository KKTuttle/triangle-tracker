var n1 = parseInt(prompt("Give one number"));
var n2 = parseInt(prompt("Give another number"));
var n3 = parseInt(prompt("Give a third number, please"));

// Equilateral
if(n1===n2 && n2===n3){
  alert("This triangle is equilateral!")
}
// Isosceles
else if((n1===n2 && n2!=n3)||(n2===n3 && n3!=n1)||(n1===n3 && n3!=n2)){
  alert("This triangle is isosceles!")
}

// Not a triangle
else if(n1+n2<=n3 || n2+n3<=n1 || n1+n3<=n2){
  alert("This is not a triangle! :[ try again!")
}
// Scalene
else{
  alert("This triangle is scalene!")
}
