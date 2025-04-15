class Employee{
    name:String;
    age:number;
    department:String;

    constructor(name:string,age:number,department:string){
        this.name=name;
        this.age=age;
        this.department=department
         
        
    }
    employeeDetails(){
        console.log(`employee name is ${this.name} from ${this.department} department`)
    }
}

const employee=new Employee("mahesh",30,"testing")
employee.employeeDetails()

const anotherEmp=new Employee("suresh",32,"accounts")
anotherEmp.employeeDetails()