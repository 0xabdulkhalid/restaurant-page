(()=>{"use strict";const e=function(){const e=document.querySelector("main");e.textContent="",e.append(function(){const e=document.createElement("div");e.classList.add("main__home");const t=document.createElement("p");t.innerHTML='Best fast foods in your country <span class="main__line-break"></span> Made with passion since 1923';const n=document.createElement("div");return n.classList.add("main__home-image"),e.append(t,n),e}())};function t(e){const t=document.createElement("div");t.classList.add("main__menu-items");const n=document.createElement("img");n.src=`./images/${e}.webp`,n.alt="";const c=document.createElement("p");return c.classList.add("menu__item-name"),c.textContent=e,t.append(n,c),t}function n(e){const t=document.createElement("p");return t.textContent=e,t}function c(c){const o=document.createElement("button");return o.textContent=c,o.addEventListener("click",(c=>{c.target.classList.contains("active")||(function(e){document.querySelectorAll("button").forEach((e=>{e!=this&&e.classList.remove("btn--active")})),e.classList.add("btn--active")}(c.target),"Home"==c.target.textContent&&e(),"Menu"==c.target.textContent&&function(){const e=document.querySelector("main");e.textContent="",e.append(function(){const e=document.createElement("div");return e.classList.add("main__menu"),e.append(t("burger"),t("buritto"),t("fries"),t("pizza"),t("taco")),e}())}(),"Contact"==c.target.textContent&&function(){const e=document.querySelector("main");e.textContent="",e.append(function(){const e=document.createElement("div");e.classList.add("main__contact");const t=document.createElement("img");return t.src="./images/map.webp",t.alt="",e.append(n("Phone ☎: 123 456 789"),n("Location 🏠: Hollywood Boulevard 42, Los Angeles, USA"),t),e}())}())})),o}document.querySelector("body").append(function(){const e=document.createElement("header"),t=document.createElement("img");t.src="./images/header.webp",t.alt="Junkier Foodies";const n=document.createElement("nav");return n.append(c("Home"),c("Menu"),c("Contact")),e.append(t,n),e}(),document.createElement("main"),function(){const e=document.createElement("footer");return e.innerHTML='Copyright &copy; 2023 - <a class="attribution__link" href="https://github.com/0xabdulkhalid" target="_blank" rel="noopener noreferrer">0xabdulkhalid</a>',e}()),e()})();