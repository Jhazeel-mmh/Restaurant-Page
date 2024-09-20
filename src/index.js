import "./normalize.css";
import "./style.css";
import { pagueLoadMainContent } from "./page-load-main.js";

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

nav.addEventListener("click", e => {
    if (!e.target.classList.contains("nav-item")) return;
    setNavItemActive(e);
});

mainBtnToMenu.addEventListener("click", () => setNavItemActive(null, "menu"));

