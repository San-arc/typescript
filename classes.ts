class Employee{
    name:String;
    age:number;
    department:String;
    phoneNumber:number;

    constructor(name:string,age:number,department:string,phoneNumber:number){
        this.name=name;
        this.age=age;
        this.department=department;
        this.phoneNumber = phoneNumber;
         
        
    }
    employeeDetails(){
        console.log(`employee name is ${this.name} from ${this.department} department`)
    }
}

const employee=new Employee("mahesh",30,"testing",987557)
employee.employeeDetails()

const anotherEmp=new Employee("suresh",32,"accounts",8658975)
anotherEmp.employeeDetails()