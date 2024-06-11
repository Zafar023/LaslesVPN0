let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  //e.preventDefault() = этот метод отключает перезагрузку сайта
  e.preventDefault();

  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  if (username.value === "" || email.value === "" || password.value === "") {
    alert('Please enter info')
  } else {
    sessionStorage.setItem('username', username.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('password', password.value);

    let confirmStatus = confirm('Congrats! Account has been created | Do you want login now')
    if(confirmStatus === true) {
      location.assign('../signin/signin.html');
    }
  };
});
