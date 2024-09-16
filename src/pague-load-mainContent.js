import mainOne from "./main-restaurante.jpg";
import mainTwo from "./main2-restaurante.jpg";
import logo from "./logo-restaurante.jpg";

export function pagueLoadMainContent(){
    let p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt quod! Odio sapiente tenetur iste molestias dolores, inventore placeat accusantium quibusdam mollitia quo dignissimos, doloremque perspiciatis totam. Ipsum, soluta.";
    p.classList.add("content__maintext")

    let logoImg = new Image();
    logoImg.src = logo;

    let mainImgOne = new Image();
    mainImgOne.src = mainOne;

    let mainImgTwo = new Image();
    mainImgTwo.src = mainTwo;

    let elements = {
        p, 
        logoImg,
        mainImgTwo,
    };

    const appendMainContent = () => {
        let content = document.querySelector("#content");
        for (let key in elements){
            content.appendChild(elements[key])
        }
    };

    appendMainContent()
}   

