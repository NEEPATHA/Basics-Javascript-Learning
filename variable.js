//using var variable
var name = 'Satyam';
var name = 'Neelesh'; // It can be redeclared
name = 'Shyam';       // It can be updated
console.log(name); 

if(true){
  var name1 = 'Say my name';
  console.log(name1);
}
console.log(name1); // Accessible outside the block

function testvar(){
  var y = 10;
}
console.log(y);  // Not accessible outside the function


