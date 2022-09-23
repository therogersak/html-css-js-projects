const contextmenu = document.querySelector(".contextMenu");
let ctxPosition = {
  pageX: 0,
  pageY: 0,
};
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const ctxHeight = contextmenu.offsetHeight;
  console.log('ctxHeight : ',ctxHeight);
  const ctxWidth = contextmenu.offsetWidth + 5;
  console.log('ctxWidth : ',ctxWidth);

  const widthOverflow = e.pageX + ctxWidth > window.innerWidth;
  const heightOverflow = e.pageY + ctxHeight > window.innerHeight;
  console.log('PageX : ',e.pageX)
  console.log('PageY :',e.pageY)
 console.log('innerWidth : ',window.innerWidth)
 console.log('innerHeight : ',window.innerHeight)
  ctxPosition = {
    pageX: widthOverflow ? e.pageX - ctxWidth - 5 : e.pageX,
    pageY: heightOverflow ? e.pageY - ctxHeight : e.pageY,
  };

  hideContextMenu();
  setTimeout(showCtxMenu, 50);
});
document.addEventListener("click", hideContextMenu);

function showCtxMenu() {
  contextmenu.style.cssText = `
    opacity: 1;
    transform: scale(1);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}

function hideContextMenu() {
  contextmenu.style.cssText = `
    opacity: 0;
    transform: scale(0);
    top: ${ctxPosition.pageY}px;
    left: ${ctxPosition.pageX}px;
    `;
}
