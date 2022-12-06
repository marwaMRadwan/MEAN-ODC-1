const btnWrap = document.querySelector("#btnWrap")
const apiBaseURL ="https://dummyjson.com/"
const apis = ["posts", "products", "carts"]

const apiReq = async(url, cb)=>{
    try{
        const res = await(await fetch(url)).json()
        cb(res, null)
    }
    catch(e){
        cb(null, e)
    }
}
apis.forEach(a=>{
    const btn = document.createElement("button")
    btnWrap.appendChild(btn)
    btn.innerText = a
    btn.addEventListener("click", (e)=>{
        apiReq(apiBaseURL+a, (res, err)=>{
            if(err)console.log("boom")
            else console.log(res);
        })
    })
   
})