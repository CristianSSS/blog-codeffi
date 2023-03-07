const switchInput=document.getElementById("select-theme");
const html=document.querySelector("html")
const icon=document.getElementById("icon-theme");

switchInput.addEventListener("change",(e)=>{

    if(e.target.checked){
        html.setAttribute("data-theme","dark");
        icon.setAttribute("src","./assets/sol.png");
    }else{
        html.setAttribute("data-theme","light");
        icon.setAttribute("src","./assets/creciente.png");
    }
    
});