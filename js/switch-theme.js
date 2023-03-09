const switchInput=document.getElementById("select-theme");
const html=document.querySelector("html")
const icon=document.getElementById("icon-theme");
const header=document.querySelector("header");
const logo=document.getElementById("logo");

if(html.getAttribute("data-theme")=="light"){

    logo.style.filter="invert(1)";
    icon.setAttribute("src","./assets/creciente.png");
    icon.style.filter="invert(0)";
    header.style.backgroundColor="#FFF";
    

}else if(html.getAttribute("data-theme")=="dark"){
    logo.style.filter="invert(0)";
    header.style.backgroundColor="#11191F";
    icon.style.filter="invert(1)";
    icon.setAttribute("src","./assets/sol.png");
}

switchInput.addEventListener("change",(e)=>{
    

    if(e.target.checked){
        html.setAttribute("data-theme","dark");
        icon.setAttribute("src","./assets/sol.png");
        icon.style.filter="invert(1)";
        header.style.backgroundColor="#11191F";
        logo.style.filter="invert(0)";
    }else{
        html.setAttribute("data-theme","light");
        icon.setAttribute("src","./assets/creciente.png");
        icon.style.filter="invert(0)";
        header.style.backgroundColor="#FFF";
        logo.style.filter="invert(1)";
    }
    
});