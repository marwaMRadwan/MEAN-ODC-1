// name , age, salary, tasks =[] , show data, add task, show emp tasks 
//task => title, content, date
import {Task} from "./task"
const t1:Task = {title:"task1"}
class User{
    private date:string="cgfc"
    constructor(
    protected name:string, 
    protected age:number,
    )
    {}
    show(){
        console.log(this.name)
    }
}
class Student extends User{
    constructor(x:string, y: number, private grade: string){
        super(x, y)
    }
    show(): void {
        super.show()
        // console.log(this.date)
    }
}

const s1 = new Student("x", 10, "hgg")
console.log(s1)
s1.show()
// class Employee{
//     constructor(
//         private name:string, 
//         private age:number, 
//         private salary:number, 
//         private tasks:Task[]=[], 
//         private status:boolean = false
//         ){ }

//     showData():string{
//         const data:string = `name: ${this.name} - age: ${this.age} - salary: ${this.salary}`
//         return data
//     }
//     addTask(task:Task):string{
//         let result : string
//         try{
//             this.tasks.push(task)
//             result="task added successfully"
//         }
//         catch(e){
//             result="error adding your task"
//         }
//         return result
//     }
//     showTasks():void{
//         this.tasks.forEach(task=>{
//             console.log(task)
//         })
//     }
//     //getters and setters
//     get _name(): string{ return this.name}
//     set _name(val:string){ this.name = val} 
// }

// const emp1 = new Employee("marwa", 37, 1000)
// console.log(emp1.showData())
// const task:Task = {title:"t1", content: "c1"}
// console.log(emp1.addTask(task))
// emp1._name="ahmed"
// console.log(emp1._name)


/*
teacher => name, age, email, subjects => [ {name, className}]
student=> name, age, email, grades => [{name, value}]
*/