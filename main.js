let circles = document.querySelectorAll(".menu-item")
let menu = document.querySelector(".menu")
let openMenuBtn = document.querySelector("#open-menu-btn")



menu.addEventListener("click",(e)=>{
    if(e.target.nodeName == "UL"){
        openMenu()
    }
})
openMenuBtn.addEventListener("click",(e)=>{
    if(e.target.nodeName == "I"){
        openMenu()
    }
})
function openMenu(){
    if(menu.getAttribute("style") === "--pos:0"){
        menu.setAttribute("style","--pos:-50vh")
    }else if(menu.getAttribute("style") === "--pos:-50vh"){
       setTimeout(()=>{
        menu.setAttribute("style","--pos:0")
       },200)
        
    }
    circles.forEach((ele,i)=>{
        if(ele.getAttribute("data-open") === "false"){
            setTimeout(()=>{
                ele.classList.toggle("un-show")
                ele.setAttribute("data-open", "true")
                ele.setAttribute("style",`--degree:${(i) * 360/8}deg`)
            },450)
        }else if(ele.getAttribute("data-open") === "true"){
            ele.removeAttribute("style")
            ele.setAttribute("data-open", "false")
            ele.classList.toggle("un-show")
        }
    })
}