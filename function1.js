
const countVow = (str) =>
{
  let count = 0;
  for(const char of str)
  {
   if(char==="a" || char==="e"|| char==="i" ||char==="o"||char==="u"){
     count++;
   }
  }
  return count;  
}

let array = [1,2,3,4,5];
array.forEach(function printVal(val)//
{
    console.log(val);
})

let array1 = ["Pune", "Mumbai", "Satna"];
array1.forEach((val) => {
  console.log(val.toUpperCase());
});

let arr2 = ["Bhopal","Indore","GandhiNagar"]
arr2.forEach((val,indx) =>{
  console.log(val.toLowerCase(),indx)
}
);

let nums = [2,3,4,5,6]
nums.forEach((nums) => {
  console.log(nums*nums);
})

let nums2 = [67,78,87,780]

nums2.map((val) =>{
  return (val)
}
)

for (let i=1;i<50;i++)
{
  if(i/3===0){
    console.log("Fizz")
  } else if(i/5===0){
    console.log("Fizz")
  } else if(i/3===0 & i/5===0){
    console.log("Fizz")
  } else if (!i/3===0 & !i/5===0){
    console.log(i)
  }
}