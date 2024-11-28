// when we know in advance how many times the loop will run 
for(let count=1; count<=5; count++)
{
  console.log("Say my Name")
}

// calculate sum of 1 to 100
let sum = 0;
for (let i=1;i<=100;i++)
{
  sum = sum+i;
}
console.log("Sum: "+ sum);
// print 1 to 5

for(let i=1; i<=5;i++)
{
  console.log(i);
}

//while loop
let i =1
while(i<=5)
  {
     console.log(i);
     i++;
}


let n =20;
do{
  console.log("Lets Go!")
  i++
} while(i<=10)

//for of loop
let str = "Neeelsh"
let size =0;
for(let i of str)
{
  console.log("i ="+i)
  size++;
}
console.log("String size =", size)

//for in

let student = {
  name: "Neelesh Pathak",
  age: 23,
  cgpa:7.5,
  isPass: true
}

for(let i in student){
  console.log("Key ",i ,"value",student[i]);
}


for(let i=1; i<=100;i++)
{
  console.log(i);
}

let num1 =1
while(num1<=100)
{
  console.log(num1);
  num1++;
  
}
console.log(num1);

let num2 =1;
do{
  console.log(num2)
  num2++
} while(num2<=100);


let gameNum = 25;
let userNum = prompt("Guess the game number : ") 
console.log(userNum);
while(userNum != gameNum){
 userNum = prompt("You entered the wrong number, Guess again");    
}
console.log("Congratulation you entered the right number");

// Step 1: Create an array of student objects
const students = [
  { name: "Alice", scores: [95, 88, 92] },
  { name: "Bob", scores: [70, 75, 80] },
  { name: "Charlie", scores: [50, 58, 60] }
];

// Step 2: Function to calculate average score
function calculateAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i]; // Add each score to total
  }
  return total / scores.length; // Return average
}

// Step 3: Function to determine grade based on average score
function getGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Step 4: Loop through each student and calculate grade
for (let i = 0; i < students.length; i++) {
  const student = students[i]; // Get current student object
  const averageScore = calculateAverage(student.scores); // Calculate average
  const grade = getGrade(averageScore); // Determine grade

  // Display the result for each student
  console.log(
    `Name: ${student.name}, Average Score: ${averageScore}, Grade: ${grade}`
  );
}

for(let i=1;i<=10;i++){
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i + " is an even number");
  } else {
    console.log(i + " is an odd number");
  }
}

const numberss =[10,20,30,40,50]

for(let i=0;i<numberss.length;i++)
{
  console.log(numberss[i]);
}

const student1 ={
  fullName:"Neelesh Pathak",
  age: 24,
  subjects:["Math", "Physics","English"]
}   

for(let i=0;i<student1.subjects.length;i++){
  console.log(student1.subjects[i]);
}



for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

for(let i=0;i<=100;i++){
  if(i%2==0){
     console.log("All Even Numbers are "+i);
  }
}


