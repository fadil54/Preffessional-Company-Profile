import { collections } from "./data/collections.js";

const nav = document.querySelector(".nav");

const toggleDropdown = function(e){
    const icons = document.querySelectorAll(".nav-icon");
    const dropdown = document.querySelector(".nav-items");
    const iconMenu = document.querySelector(".nav-icon-menu");
    const iconX = document.querySelector(".nav-icon-x");

    icons.forEach(icon => icon.classList.remove("hidden"));
    console.log(e.target.classList.contains("nav-icon"));
    if(dropdown.classList.contains("hidden") && e.target.classList.contains("nav-icon")){
        dropdown.classList.remove("hidden");
        iconMenu.classList.add("hidden");
    }else{
        dropdown.classList.add("hidden");
        iconX.classList.add("hidden");
    }
}

const renderCollections = function(){
    const cardsCollections = document.querySelector(".cards-collections");

    collections.forEach(collection =>{
        cardsCollections.insertAdjacentHTML("afterbegin",
            `<div class="card">
                <img class="card-img" src="${collection.img}" alt="">
                <p class="card-title">${collection.title}</p>
                <p class="card-price">${collection.price}</p>
            </div>
            `
        )
    })
}

const scroll = function(e){
    e.preventDefault();
  
    if (e.target.classList.contains('nav-item')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
}

nav.addEventListener("click", toggleDropdown);
document.addEventListener("DOMContentLoaded", renderCollections);
document.querySelector('.nav-items').addEventListener('click', scroll);