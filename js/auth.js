const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');

const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

/* console.log(buttonOut); 
console.log(userName); */

const login = (user) =>{

    buttonAuth.style.display = 'none';

    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';

    userName.textContent = user.login;    
    modalAuth.style.display = 'none';
    
}

const logaut = () =>{

    buttonAuth.style.display = 'flex'

    buttonOut.style.display = 'none';
    userName.style.display = 'none';

    userName.textContent = ' ';

    localStorage.removeItem('user')//удаляем, передав название созданное через setItem
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
    inputLogin.style.background = '#c4f5dc'
    inputPassword.style.background = 'rgb(251 145 73)'
})
closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
    
    logaut()
    
})

logInForm.addEventListener('submit', (event) => {

    event.preventDefault()     
       
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }
    
    localStorage.setItem('user', JSON.stringify(user))

    login(user)       
})

if(localStorage.getItem('user')){

    login(JSON.parse( localStorage.getItem('user')));// страница перегружается, но ты остаешься авторизованным
}
