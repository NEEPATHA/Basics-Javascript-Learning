let mode = "light";
let color;

if(mode === "dark")
{
  color = "black";
} else
 {
   color = "White";
}

console.log(color);

//------------------------------

  //---------------------------
  let num1 = 10;
  let num2 = 20;
  let num3 = 15;
 
  if(num1>num2 && num1>num3)
  {
    console.log("Num1 is the largest")
  }else if(num2>num1 && num2>num3){
    console.log("Num2 is the largest")
  } else{
    console.log("Num3 is the largest")
  }
//------------------------------------
  let value =42;
  if(typeof value=== "number"){
    console.log("The value is number")
  }else if(typeof value==="string"){
    console.log("The number is string")

  }else{
    console.log("Number is boolean")
  }

//-----------------------------
let age2 = 18;
let hasVoterid = true;

 if(age>=18 && hasVoterid){
  console.log("You are eligble to vote");
 } else if (age>=18 && !hasVoterid){
  console.log("You nedd a VoterID to vote")
 } else{
  console.log("You are not eligble to vote")
 }
//-----------------------------

let age = 15;
let isEligibleVoter = age >= 18;

if (isEligibleVoter) {
  console.log("You are an eligible voter.");
} else {
  console.log("You can provide moral support.");
}
//---------------------------------------------
let age1 = 25;
if(age1>18)
{
  console.log("You Can");
}
//-------------------------------------

let input = null;
while (input !== "yes") {
  input = prompt("Do you agree? (yes/no)");
}
console.log("Thank you for agreeing!");
//--------------------------------------------

let age3 = 50;

if (age3>=0 && age3 <= 12){
  console.log("You are child")

} 
else if(age3 >= 13 && age3 <= 19){
  console.log("You are teenager")

} else if(age3>=20 && age3<59)
  {
  console.log("You are adult")
} else if (age3>=60)
  {
   console.log("You are senior citizen")
}







