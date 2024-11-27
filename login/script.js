const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const login = document.getElementById('login');

function log()
{
    if ((userEmail.value == false) && (userPassword.value == false))
    {
       userEmail.style.border = 'solid red';
       userPassword.style.border = 'solid red';
    }else
    {
        userEmail.style.border = 'none';
        userPassword.style.border = 'none';
        console.log(userEmail.value);
        console.log(userPassword.value);
        login.href='../About/index.html';
    }
}