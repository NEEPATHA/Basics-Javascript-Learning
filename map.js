var array = ['Apple','Bananna','Ram','Lion','harsh'];

var ans = array.map(function(val){
 if(val.length===5){
  return `<p>${val}</p>`;
 } else return `<span>${val}</span>`
})

var arr = [
  {name:"Neelesh", age:"23"},
  {name:"Anshul",age:"26"},
  {name:"Shyam",age:"30"}
]

var newA=arr.map(function(val){
   return val.name;
})


let arr1 = [2,3,4,5,6,7];
let newarray = arr1.map(function(val){
  return val*2;
})

let arr2 = [10, 20, 30, 40, 50, 60, 70, 70, 80, 90, 100];

let modifiedArr = arr2.map(function (val, index) {
  if (index % 2 === 0) {
    return val * 2;
  } else {
    return val;
  }
});

let unmodifiedArr = arr2.map(function (val, index) {
  if (index % 2 !== 0) {
    return val * 2;
  } else {
    return val;
  }
});
console.log("Modified Array:", modifiedArr); 
console.log("Unmodified Array:", unmodifiedArr); 

