import { createImg } from "./page-load-main";
import imgSrcMenu from "./coffe.jpg";

function createMenuItem(titleFood, img, description){
    let div = document.createElement("div");
    div.classList.add("menu-item");
    
    let title = document.createElement("h3");
    title.classList.add("menu-item__title");
    title.textContent = titleFood;

    let descrip = document.createElement("p");
    descrip.classList.add("menu-item__desc");
    descrip.textContent = description;

   
    div.appendChild(title);
    div.appendChild(descrip)
    div.appendChild(img);
    return div;
}