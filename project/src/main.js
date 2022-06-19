
// background
const imgFile = ['1.jpg','2.jpeg','3.jpg','4.jpg','5.jpg','6.png','7.JPG','8.jpg','9.png','10.jpeg','11.jpg','12.jpg','13.jpg',];
const bgFile = imgFile[Math.floor(Math.random()*imgFile.length)];
const imgSrc = `image/${bgFile}`;
document.body.style.backgroundImage = `url(${imgSrc})`;

// clock
const clock = document.querySelector(".date .clock");
const p = document.createElement('p');
const span = document.createElement('span');
clock.appendChild(p);
clock.appendChild(span);

function getClock(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let ampm = "AM";
    if(hours > 13){
            hours = hours - 12;
            ampm = "PM"
    }else if(hours == 00){
        hours = 12;
    }
    const minute = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    p.innerText = `${hours}:${minute}`;
    span.innerHTML = `${ampm}<br>${seconds}`;
}
getClock();
setInterval(getClock,1000);

// today 
const todayDate = document.querySelector('.date .today');
function getToday(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    todayDate.innerText = `${year}년 ${month}월 ${day}일`
}
getToday();
setInterval(getToday,1000);


// login
const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginOn = document.querySelector('.login_on');
const loginOn2 = document.querySelector('.login_on2');
const loginOnMember = document.querySelector('.login_on #member');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e){
    e.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY,username)
    loginOnPage(username)
}

function loginOnPage(username){
    loginOnMember.innerHTML = `hello <strong>${username}</strong>`;
    loginOn.classList.remove(HIDDEN_CLASSNAME)
    loginOn2.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit',onLoginSubmit)
}else{
    loginOnPage(savedUsername)
}

// weather
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7691789f2fbfc9e35200ddba7d51ee06&units=metric`
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector('#weather');
        const temp = Math.floor(data.main.temp);
        weather.innerText = `${data.weather[0].main} / ${temp}° / ${data.name}`
    });

}
function onGeoError(){
    alert("Can't finde you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)


// todo
const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement('li');
    li.id = newTodoObj.id
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;

    const button = document.createElement('button');
    button.innerText = "X"
    button.addEventListener('click',deleteToDo)

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
}

toDoForm.addEventListener('submit',handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}

