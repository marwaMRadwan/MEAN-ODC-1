// let var
// var c
// let a
// a=
//operators
// let x= 5
// console.log(x++)
// console.log(++x);
// conditional statements
// let c = 15;
// c==5 ? console.log("hello"): console.log("hi")
// if()
// else if()
// else
// switch(){

// }
// data = ["x","y", "z"]
// data[year%12]
// loops
// do while for
// while(true){

// }
// for(;;){}
// functions
// function f1(){

// }
// const f2 = function(){}
// const f3 = () => {}
// const f4 = () => 5
// const x = f4()
// objects
// const user = {
//     name:"marwa",
//     age:37,
//     job:"developer"
// }
// arrays
// higher order methods
//forEach find findIndex filter
// clousers
// const newClouser = (x, y) =>{
//     return {
//         x,
//         y,
//         add() { return x+y},
//         sub() { return x-b}
//     }
// }
// const c1 = newClouser(5,3)
// c1.add()
// const f1 = () => {
//     return {()=>{
//         console.log("hello")
//     }}
// }
// f1()

// call back
// data.forEach((el)=> {
    //     console.log(el)
    // })
    
// data = [1,2,3,4,5]
// const myCB = (data) => {
//     return 8
// }
// myCB(data)
// test = (x, y,cb) => {
//     (()=>{
//         (()=>{
//             cb(5,9,5,3)
//         })()
//     })()
// }
// test(3,4, (x,a,b,c)=>{
// })
// promises
// console.log(1)
// setTimeout(()=> {console.log(2)}, 2000)
// setTimeout(()=> {console.log(3)}, 1500)
// setTimeout(()=> {console.log(4)}, 1000)
// console.log(5)
const myPro = (x) => new Promise (
    (resolve, reject)=>{
        setTimeout(()=>{
            typeof x == "number"?
            resolve(x*3) :
            reject("error")
        }, 2000)
    }
)

const myPro1 = (x) => new Promise (
    (resolve, reject)=>{
        setTimeout(()=>{
            typeof x == "number"?
            resolve(x*3) :
            reject("error")
        }, 1000)
    }
)
// then catch
// myPro(5)
// .then( res=> console.log(res) ) //15
// .then(
//     myPro1(2)
//     .then(result=> console.log(result)) //6
// )
// .catch(err=>{
//     console.log(err)
// })
// async await
// async function test(){
// const test = async function()
// const test = async(cb) =>{
//     try{
//         x= await myPro(5)
//         y = await myPro(x)
//         cb(y)
//     }
//     catch(err){
//         cb(err)
//     }
// }
// test(res=> console.log(res))

// exception
// fetch
// oop







