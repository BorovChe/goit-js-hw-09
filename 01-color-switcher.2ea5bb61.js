const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let r;function a(){d.setAttribute("disabled","disabled-btn")}e.addEventListener("click",(function(){r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled","disabled-btn"),d.removeAttribute("disabled")})),d.addEventListener("click",(function(){clearInterval(r),e.removeAttribute("disabled"),a()})),a();
//# sourceMappingURL=01-color-switcher.2ea5bb61.js.map