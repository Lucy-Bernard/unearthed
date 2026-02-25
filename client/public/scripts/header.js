// <header></header>
const header = document.querySelector("header");
// creates <div class='header-container'></div>
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

// <div class="header-left"></div>
const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

// <img src="" />
const headerLogo = document.createElement("img");
headerLogo.src = "logo.png";

//<h1>unEarthed</h1>
const title = document.createElement("h1");
title.textContent = "unEarthed";
title.innerHTML = "<em>un</em>Earthed";

// append elements to headerLeft div
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(title);

// <div className="header-right"></div>
const headerRight = document.createElement("div");
headerRight.className = "header-right";

// button that sends user to root page
const headerButton = document.createElement("button");
headerButton.textContent = "Home";

function handleClick() {
  window.location = "/";
}
headerButton.addEventListener("click", handleClick);

// append button to headerRight div
headerRight.appendChild(headerButton);
// append elements to headerContainer div
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
//append to <header></header>
header.appendChild(headerContainer);
