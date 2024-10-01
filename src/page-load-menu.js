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

export function loadMenuContent(){
    const content = document.querySelector("#content");
    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    div.classList.add("menu-container");
    for (let i = 0; i < 10; i++){
        let img = createImg(imgSrcMenu, "Cafe XXXX", "menu-item__img");
        let menuItem = createMenuItem("Café", img, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt quod!")
        fragment.appendChild(menuItem)  
    }
    div.appendChild(fragment);
    content.appendChild(div);
}