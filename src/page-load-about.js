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

function createForm(){
    const form = document.createElement("form");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let title = document.createElement("h2");
    title.textContent = "Contact Us";

    let inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "Your name";
    let msg = document.createElement("textarea");
    msg.placeholder = "Send us a message";
    let sumbitBtn = document.createElement("input");
    sumbitBtn.type = "submit";
    sumbitBtn.value = "Send";

    p1.appendChild(inp);
    p2.appendChild(msg);
    p3.appendChild(sumbitBtn);
    form.appendChild(title);
    form.appendChild(p1);
    form.appendChild(p2);
    form.appendChild(p3);
    return form;
}

export function loadAboutContent(){
    const content = document.querySelector("#content");
    let div = document.createElement("div");
    div.classList.add("about-container");
    let form = createForm();

    let aboutUs = loadInfoSection("about-us", "About Us", "Contact us via Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores nesciunt quod! Odio sapiente tenetur iste molestias dolores, inventore placeat accusantium quibusdam mollitia quo dignissimos, doloremque perspiciatis totam. Ipsum, soluta.");
    let openHours = loadInfoSection("open-hours", "Open Hours","We work form Tuestady to Sunday, in the horary of 6pm to 11pm");
    let direction = loadInfoSection("direction", "Direction", "We are located in Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    div.appendChild(aboutUs);
    div.appendChild(openHours);
    div.appendChild(direction);
    div.appendChild(form);
    content.appendChild(div);
};