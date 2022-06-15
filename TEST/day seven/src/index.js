const userNumber = document.querySelector(".user_number");
const rangeNumber = document.querySelector(".range_number");
const userForm = document.querySelector("form");
const resultValue = document.querySelector(".result_value");
const result = document.querySelector(".result");

function submitBtnClick(e) {
  e.preventDefault();

  const rangenum = parseInt(rangeNumber.value, 10);
  const usernum = parseInt(userNumber.value, 10);

  if (usernum < 0 || rangenum < 0) {
    alert("0이상의 값을 입력해주세요");
    console.log(userNumber, rangeNumber);
  } else if (usernum > rangenum) {
    alert("입력값을 범위값 이하로 지정해주세요");
  } else {
    const randomnum = Math.ceil(Math.random() * rangenum);
    resultValue.innerHTML = `<p>You chose: ${usernum}, the machine choose: ${randomnum} </p>`;

    if (usernum === randomnum) {
      result.innerHTML = `<h4>You Won!</h4>`;
    } else {
      result.innerHTML = `<h4>You lost!</h4>`;
    }
  }
}

userForm.addEventListener("submit", submitBtnClick);
