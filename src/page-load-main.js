import mainOne from "./main-restaurante.jpg";
import mainTwo from "./main2-restaurante.jpg";
import logo from "./logo-restaurante.jpg";

export function createImg(src, alt = "", clss = ""){
    let img = new Image();
    img.src = src;
    img.alt = alt;
    if (clss) img.classList.add(clss);
    return img;
};

export function pagueLoadMainContent(){
    let p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt quod! Odio sapiente tenetur iste molestias dolores, inventore placeat accusantium quibusdam mollitia quo dignissimos, doloremque perspiciatis totam. Ipsum, soluta.";
    p.classList.add("content__maintext")

    let logoImg = createImg(logo, "Café Hormiga Logo", "page-logo");
    let mainImgOne = createImg(mainOne, "Café La Hormiga #1", "mainImg");
    let mainImgTwo = createImg(mainTwo, "Café La Hormiga #2", "mainImg");
    
    const fragment = document.createDocumentFragment();
    fragment.appendChild(p);
    fragment.appendChild(logoImg);
    fragment.appendChild(mainImgTwo);

    const content = document.querySelector("#content");
    content.appendChild(fragment);
}   

