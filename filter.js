const users = [
  {id:1,name:'Shub',age:23},
  {id:2,name:'Shiv',age:24},
  {id:3,name:'Satyam',age:32},
  {id:4,name:'Shivam',age:28},
  {id:5,name:'Ravi',age:29},
  {id:6,name:'Raj',age:30},
  {id:7,name:'Gyan',age:29},
]

const filteredUsers=users.filter(function(users){
  return users.age>26;
}).map(function(users){
  return users.name
})

console.log(filteredUsers);
