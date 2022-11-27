const heads = ["title", "content", "date"]

const addTask = document.querySelector("#addTask")
const dataWrap = document.querySelector("#dataWrap")

const readDataFromStorage = (itemKey="tasks",resType="json") =>{
    let data = localStorage.getItem(itemKey)
    if(resType=="json") {
        try{
            data = JSON.parse(data)||[]
        }
        catch(e){
            data = []
        }
    }
    return data
}
const writeDataToStorage = (data,itemKey="tasks")=> localStorage.setItem(itemKey, JSON.stringify(data))
if(addTask)
addTask.addEventListener("submit", (e)=>{
    e.preventDefault()
    const task = {}
    heads.forEach(h=> task[h]= addTask.elements[h].value)
    const data = readDataFromStorage()
    data.push(task)
    writeDataToStorage(data)
})
if(dataWrap){
    const data = readDataFromStorage()
    data.forEach(d=>{
        const p = document.createElement("p")
        p.innerText = d.title
        dataWrap.appendChild(p)
    })
}



