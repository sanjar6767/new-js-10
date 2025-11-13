let li = document.getElementById("li")

let da = document.getElementById("da")

let body = document.getElementById("body")

li.onclick = () =>{
    if(body.className = "LightMode"){
        body.className = "LightMode"
    }
    else{
        body.className = "DarkMode"
    }
}
da.onclick = () =>{
    if(body.className = "DarkMode"){
        body.className = "DarkMode"
    }
    else{
        body.className = "LightMode"
    }
}