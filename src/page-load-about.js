import { createImg } from "./page-load-main";

function loadInfoSection(divClassName, titleContent, paragrafContent){
    let div = document.createElement("div");
    div.classList.add(divClassName);

    let title = document.createElement("h2");
    title.classList.add(divClassName + "__title");
    title.textContent = titleContent;

    let p = document.createElement("p");
    p.classList.add(divClassName + "__paragraf");
    p.textContent = paragrafContent;

    div.appendChild(title);
    div.appendChild(p);
    return div;
};

export function loadAboutContent(){
    const content = document.querySelector("#content");
    let div = document.createElement("div");
    div.classList.add("about-container");

    let aboutUs = loadInfoSection("about-us", "About Us", "Contact us via Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt quod! Odio sapiente tenetur iste molestias dolores, inventore placeat accusantium quibusdam mollitia quo dignissimos, doloremque perspiciatis totam. Ipsum, soluta.");
    let openHours = loadInfoSection("open-hours", "Open Hours","We work form Tuestady to Sunday, in the horary of 6pm to 11pm");
    let direction = loadInfoSection("direction", "Direction", "We are located in Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    div.appendChild(aboutUs);
    div.appendChild(openHours);
    div.appendChild(direction);
    content.appendChild(div);
};