let str1 = "KGCoding by Prashant Sir";
let str2 = 'Subscribe Now';
let noOfLikes = 100000;
let str3 = `Like this Video, already like by ${noOfLikes}`;
let str4 = 'Like this Video, already like by ' + noOfLikes;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


// Templete literal
let output = `the cost of ${obj.iem} is ${obj.price} rupee`
console.log(output);

// escape character
let str = "Neelesh\tPathak";
let newstr = str.toUpperCase();
console.log(newstr)
console.log(str.length);

let username = "Neelesh@123"
if(username.includes("123")){
  console.log("Username should not contain numbers")
}