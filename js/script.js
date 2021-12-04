let btn_menu=document.querySelector(".btn-menu > button");
let side_bar=document.querySelector(".side-bar ")

btn_menu.onclick=()=>{
    side_bar.classList.toggle("active");
}