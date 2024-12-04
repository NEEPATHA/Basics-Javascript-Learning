const hobby =["Cricket","Camping","Hiking"]
for(let i=0;i<hobby.length;i++){
  console.log("One of my Hobby is "+hobby[i]);
}

const num =[10,20,30,40,50];

// Sum of array elements
let sum =0;
for(let i=0;i<num.length;i++)
  {
   sum = sum+num[i];
  }
 console.log(sum);

 //Print Largest element in array
 const numArr = [15,22,9,34,8];
  let Largest = numArr[0];
  for(let i=0;i<numArr.length;i++){
    if(numArr[i]>Largest){
      Largest= numArr[i]
    }
  }
 console.log("The largest number :"+ Largest);
 
 
 