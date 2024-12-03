// for each run only on array
var a = [1,2,3,4,5,6,7,7,9];
a.forEach(function(num){
  console.log(num*2)
})

const array = [1,2,3,4,5,6,7]
array.forEach(function(value){
    
    console.log( value+2)
})

var a = [1,2,3,5,6];
a.forEach(function(val){
    console.log( "Number is"+(val+2));

})

var a = [1,2,3,5,6];
a.forEach(function(val){
  console.log( "Number is"+val+2);

})

var Number = [2,4,6,8,10];
Number.forEach(function(num){
   console.log(`Orginal Number:${num}, Now Adding 3: ${num+3}`)
})

const num = [1,2,3,4,5,6,7,8,8,9,9,9,101,1].forEach(function(num){
  if(num<4){
    console.log(`Number lesser then 4: ${num}` )
  }
})

//sum all the element in array
var a = [1,2,3,4,5,5];
var sum =0
a.forEach(function(val){
  sum = sum+val;
  console.log("Sum are:"+sum);
})


//add all number and remove if any string  is there

var a = [1,3,6,'3',true,false,4,2,4];
var sum = 0;
a.forEach(function(val){
  if(typeof val === "number"){
      sum = sum+val;
  }
})
console.log("Total sum of all Numbers "+sum);