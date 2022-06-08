
const title = document.querySelector('.title h1');

function handleTitleClick(){
    title.classList.toggle('active');
    /*
    const clickedClass = 'active'
    if(title.classList.contains(clickedClass)){
        title.classList.remove(clickedClass)
    }else{
        title.classList.add(clickedClass)
    }
    */
}


title.addEventListener('click',handleTitleClick)