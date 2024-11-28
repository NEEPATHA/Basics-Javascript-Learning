//using let variable
let name = 'Satyam';
// let name = 'Neelesh'; //cannot be redeclared
 name = 'Shyam';       // It can be updated
console.log(name); 

if(true){
  let name1 = 'Say my name';
  console.log(name1);
}
// console.log(name1); //Not Accessible outside the block

function testvar(){
  let y = 10;
  console.log(y);
}
// console.log(y);  // Not accessible outside the function