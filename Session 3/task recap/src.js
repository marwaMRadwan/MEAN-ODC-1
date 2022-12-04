const addUser = document.querySelector("#addUser")

const addNewUser = (e) =>{
    e.preventDefault()
    const user = { 
        id: Date.now(), 
        status: false  
    }
    user.name= addUser.elements.name.value
    user.age= addUser.elements.age.value
    console.log(user)
}

const createMyElement = (
    parent, 
    el, 
    txt=null, 
    classes=null, 
    attr=null)=>{
        const myElement = document.createElement(el)
        parent.appendChild(myElement)
        if(txt) 
            myElement.innerText=txt
        if(classes)
            myElement.classList = classes
        if(attr) 
            attr.forEach(at=> 
                myElement.setAttribute(at.key, at.val)
                )
        return myElement
    }
const body = document.querySelector("body")
const myAttr = [
    {key: "id", val:1},
    {key: "dataSrc", val: "hello"}
]
createMyElement(body, "div", "hello", "x", myAttr)

addUser.addEventListener("submit", (e)=> addNewUser(e))

at = {
    "id":"5",
    "name":"data",
    "datasrc":"xyz"
}