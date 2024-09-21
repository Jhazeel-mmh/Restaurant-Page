import "./normalize.css";
import "./style.css";
import { pagueLoadMainContent } from "./page-load-main.js";
import { loadMenuContent } from "./page-load-menu.js";

pagueLoadMainContent();
console.log("Bienvenidos al cafe");

const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

let nav = document.querySelector("nav");
let mainBtnToMenu = $(".mainbtn");

function setNavItemActive(e, fixedId = ""){
    let navItems = $$(".nav-item");
    navItems.forEach(btn => btn.classList.remove("nav-item-selected"));
    let navItemId;

    (!e) ? navItemId = fixedId : navItemId = e.target.id; 

    $(`#${navItemId}`).classList.add("nav-item-selected");
}

function loadSpecificPage(e, fixedPageName = "menu"){
    let content = $("#content");
    content.textContent = "";
    let pageName;

    (e) ? pageName = e.target.id : pageName = fixedPageName;

    switch (pageName) {
        case "home":
            pagueLoadMainContent();
            break;
        case "menu":
            loadMenuContent();
            break;
        case "about":
            // loadAboutContent();
            break;
        default:
            break;
    }
};

nav.addEventListener("click", e => {
    if (!e.target.classList.contains("nav-item")) return;
    setNavItemActive(e);
    loadSpecificPage(e);
});

mainBtnToMenu.addEventListener("click", () => {
    setNavItemActive(null, "menu");
    loadSpecificPage(null);
});

