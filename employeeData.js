const employee = [
  {id:1, name:"Neelesh",department:"Tech",salary:"30000"},
  {id:2,name:"Priya",department:"Hr",salary:"50000"},
  {id:3,name:"Rahul",department:"Techlead",salary:"75000"}
];


function listEmployess(){
  console.log("Employee Details");
  employee.forEach(function(emp){
    console.log("ID:"+ emp.id +" Name: "+emp.name + " Department: "+emp.department + " Salary: "+emp.salary );
  })
}

function getEmployeeByDepartment(department){
  var filteredEmployee = employee.filter(function(emp){
    return emp.department ===department;
  })
  return filteredEmployee;
}

listEmployess();

console.log(getEmployeeByDepartment("Hr"));