import mainOne from "./main-restaurante.jpg";
import mainTwo from "./main2-restaurante.jpg";
import logo from "./logo-restaurante.jpg";
import cafe from "./coffe.jpg";

export function createImg(src, alt = "", clss = ""){
    let img = new Image();
    img.src = src;
    img.alt = alt;
    if (clss) img.classList.add(clss);
    return img;
};

export function pagueLoadMainContent(){
    let div = document.createElement("div");
    div.classList.add("maincontent");

    let btnMenu = document.createElement("button");
    let p = document.createElement("p");
    let subTitle =  document.createElement("h2");

    subTitle.textContent = "Coffe";
    subTitle.classList.add("maintitle");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt quod! Odio sapiente tenetur iste molestias dolores, inventore placeat accusantium quibusdam mollitia quo dignissimos, doloremque perspiciatis totam. Ipsum, soluta.";
    p.classList.add("maintext")
    btnMenu.classList.add("mainbtn");
    btnMenu.type = "button";
    btnMenu.textContent = "Menú"
    div.appendChild(subTitle);
    div.appendChild(p)
    div.appendChild(btnMenu)

    let cafeImg = createImg(cafe, "Café", "mainImg");
    
    const fragment = document.createDocumentFragment();
    fragment.appendChild(div);
    fragment.appendChild(cafeImg);

    const content = document.querySelector("#content");
    content.appendChild(fragment);
}   

