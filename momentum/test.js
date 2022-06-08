
const title = document.querySelector('.title h1');

console.dir(title)

function handleTitleClick(){
    title.style.color="pink"
}
function handleMouseEnter(){
    title.innerText="mouse is here"
}
function handleMouseLeave(){
    title.innerText="mouse is gone"
}

//title.addEventListener('click',handleTitleClick)
title.onclick = handleTitleClick
title.addEventListener('mouseenter',handleMouseEnter)
title.addEventListener('mouseleave',handleMouseLeave)

function handleWindowResize(){
    document.body.style.backgroundColor="tomato"
}
function handleWindowCopy(){
    alert('copier')
}
function handleWindowOffline(){
    alert('sos no wifi')
}
function handleWindowOnline(){
    alert('all goooood')
}


window.addEventListener('resize',handleWindowResize);
window.addEventListener('copy',handleWindowCopy);           //복사했을때
window.addEventListener('offline',handleWindowOffline);     //wifi offline
window.addEventListener('online',handleWindowOnline);       //wifi online