!function(){var t,e=document.querySelector("body"),n=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");function d(){a.setAttribute("disabled","disabled-btn")}n.addEventListener("click",(function(){t=setInterval((function(){e.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3),n.setAttribute("disabled","disabled-btn"),a.removeAttribute("disabled")})),a.addEventListener("click",(function(){clearInterval(t),n.removeAttribute("disabled"),d()})),d()}();
//# sourceMappingURL=01-color-switcher.f5853b64.js.map
