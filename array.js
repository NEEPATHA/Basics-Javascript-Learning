let marks_student1 = 97;
let marks_student2 = 97;
let marks_student3 = 97;
let marks_student4 = 97;
let marks_student5 = 97;

let marks = {
  stu1:97,
  stu2:82,
  stu3:83,
  stu4:56,
  stu5:92
}

let array = [34,43,43,32,54,64]

console.log("Let start man!");
console.log(array.length)

for(let i=1;i<=40;i++){
  console.log("Say my nane");
}

let companies = ["Bloomberg","Microsoft","Uber","Ibm","Google"]
  console.log(companies)
companies.shift()
//Remove the first element from array return the remove element

let arr =[2,3,4,5,6,7,8];
arr.push(7);
arr.pop(3);
console.log(arr);

const hobby =["Cricket","Camping","Hiking"]
for(i=0;i<hobby.length;i++){
  console.log(hobby[i]);
}

let heroes = ["Ironman","Thor","Antman","Spiderman","Shaktimaan"];

// for Loop
for(let i =0; i<heroes.length;i++)
{
  console.log(heroes[i]);
}

//for of

for(let i of heroes){
  console.log(i);
}


let cities =["Delhi","Pune","Bangalore","Mumbai","Satna"]

for(let i of cities){
  console.log(i.toUpperCase());
}

let number = [85,97,44,37,76,60];

let sum =0

for(let val of number){
   console.log(val)
   sum = sum + val;
}
console.log(sum);

let avg = sum/number.length;
console.log(`avg marks of the class = ${avg}`)


let item = ["Potato","Tomato","Apple"];
console.log(item);
item.push("chips","Panner","Bannana")
console.log(item.toString());








