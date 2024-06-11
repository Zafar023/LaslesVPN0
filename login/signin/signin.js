const login = () =>{
   let usernameInput = document.querySelector('#username');
   let passwordInput = document.querySelector('#password');
   // let body = document.body;

   // получаем данные с кеша
   let username = sessionStorage.getItem('username')
   let password = sessionStorage.getItem('password')
   if (username === usernameInput.value && password === passwordInput.value) {
      alert('Login Successfully');
    } else {
      alert('Incorrect info');
    }
};