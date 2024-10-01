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
};