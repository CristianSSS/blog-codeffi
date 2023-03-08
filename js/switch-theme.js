const switchInput=document.getElementById("select-theme");
const html=document.querySelector("html")
const icon=document.getElementById("icon-theme");
const header=document.querySelector("header");
switchInput.addEventListener("change",(e)=>{

    if(e.target.checked){
        html.setAttribute("data-theme","dark");
        icon.setAttribute("src","./assets/sol.png");
        icon.style.filter="invert(1)";
        header.style.backgroundColor="#11191F";
    }else{
        html.setAttribute("data-theme","light");
        icon.setAttribute("src","./assets/creciente.png");
        icon.style.filter="invert(0)";
        header.style.backgroundColor="#FFF";
    }
    
});