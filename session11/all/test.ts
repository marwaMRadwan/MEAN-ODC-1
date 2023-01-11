// class X{
//     static a = 5
//     z=3
//     static counter = 0
//     constructor(){
//         X.counter++
//     }
//     static show(){
//         console.log("hi")
//     }
// }

// const a = new X()
// const b = new X()
// console.log(a.z)
// console.log(b.z)
// X.counter


abstract class A{
    a:number
    constructor(a){
        this.a=a

    }
    abstract test()
    abc(){
        console.log("hi")
    }
}
class Z extends A{
    constructor(a:number,b:number){
        super(a)

    }
    test(){
        super.abc()
    }
}

interface TT{
    a:string
    b:Function 
    // t: (){
    //     console.log("hello")
    // }
}
// const zzzz:TT
class ZZ implements TT{

}