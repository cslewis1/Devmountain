console.log("Theme.js is connected");

//Cet HTML Element
let themeBtns = document.querySelectorAll(".theme-buttons");
let main = document.querySelector("main");
let body = document.querySelector("body");
let btn = document.querySelectorAll("button");

//Create Callbacl
let themeSelector = (evnt) => {
  let theme = evnt.target.textContent;
  body.className = theme;
    main.className = theme;
    
    for (let i = 0; i < btn.length; i++) {
        btn[i].className = theme;
    }
};

//Connect Callback with event listener
for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener("click", themeSelector);
}
