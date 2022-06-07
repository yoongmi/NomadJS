
// #2.2 변수
// #2.3 const(상수) : 값 재할당 불가능. - 항상쓰기
// #2.3 let : 값 재할당 가능 - 가끔
// #2.3 var : - 쓰지않기
const a = 5;
const b = 2;
let myName = "yoom";

console.log(a+b)
console.log(a*b)
console.log(a/b)
console.log("hello " + myName)

myName = "yoom mi"
console.log("your name is " + myName)

// #2.4 
// undefined : 값이 들어가있지 않은 것.
// null = 비어있음
// undefined = 값이 아직없음.
// null, undefined 둘은 같지 않음.
const amIFat = true;
let something;
console.log(something, amIFat)

// #2.5 Array
const dayOfWeek = ["mon","tue","wed","thu","fri","sat"];
console.log(dayOfWeek)
console.log(dayOfWeek[5])
dayOfWeek.push("sun")
console.log(dayOfWeek)

// #2.6 Objects
// const 안의 무언가를 바꾸려고 할때는 괜찮음.
const player = {
    name:"yoon",
    points:10,
    fat:true,
}
console.log(player.name)
console.log(player["name"])
console.log(player.points)
console.log(player.fat)
player.fat = false; //수정
console.log(player.fat)

player.lastName = "potato"  //새로운값 추가
console.log(player)

player.points = player.points + 15  //update
console.log(player.points)

// #2.7~2.8 function
function sayHello(nameOfPerson, age){
    console.log("Hello my name is"+nameOfPerson+" and i'm "+age)
}
sayHello("yoon",10)
sayHello("dal",23)
sayHello("lynn",21)

function plus(a,b){
    console.log(a+b);
}
function divide(a,b){
    console.log(a/b)
}
plus(2,89)
divide(98,30)


const player2 = {
    name:"yoon",
    sayHello:function(personName){
        console.log("Hello "+personName)
    }
}
console.log(player2.name)
player2.sayHello("lynn");


// 계산기
const carculator = {
    plus:function(a,b){
        console.log(a+b)
    },
    minus:function(a,b){
        console.log(a-b)
    },
    divide:function(a,b){
        console.log(a/b)
    },
    multiple:function(a,b){
        console.log(a*b)
    },
    power:function(a,b){
        console.log(a**b)
    }
}

carculator.plus(3,5)
carculator.minus(13,5)
carculator.divide(34,5)
carculator.multiple(3,6)
carculator.power(3,4)


// #2.11 Returns
// return 을 하면 함수가 종료됨. 
const age = 27;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 1;
}

const krAge = calculateKrAge(age)
console.log(krAge)

const carculator2 = {
    plus:function(a,b){
        return a+b
    },
    minus:function(a,b){
        return a-b
    },
    divide:function(a,b){
        return a/b
    },
    multiple:function(a,b){
        return a*b
    },
    power:function(a,b){
        return a**b
    }
}
const plusResult = carculator2.plus(3,5)
const minusResult = carculator2.minus(36,5)
const diviResult = carculator2.divide(37,5)
const multiResult = carculator2.multiple(2,9)
const powerResult = carculator2.power(3,2)
console.log(plusResult)
console.log(minusResult)
console.log(diviResult)
console.log(multiResult)
console.log(powerResult)

// #2.13 conditional (조건문)
// parseInt : 문자>숫자로 type 변환
// #2.14 
// NaN : not of number 
// #2.15 
// else if , and operator, or operator
const ages = parseInt(prompt("how old are you?"))

// console.log(typeof ages, typeof parseInt(ages))
if(isNaN(ages) || ages<0){
    console.log("Please write a real positive number")
}else if(ages<18){
    console.log("you are too young")
}else if(ages>=18 && ages<=50){
    console.log("you can drink")
}else if(ages>50 && ages <=80){
    console.log("you should exercise")
}else if(ages>80){
    console.log("you can do whatever you want")
}