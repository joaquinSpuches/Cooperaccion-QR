const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
const form = document.getElementById('form')
const answer = document.getElementById('answer')
const card = document.getElementById('card-inner')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        
        password: password.value
    }
    if(password.value === 'cooperaccion'){
        console.log('bienvenido');
        
        card.classList.add('rotate')

    }else{
        console.log('denegados')
        window.alert('Contraseña incorrecta. No hagas trampa!')
    }

    console.log(data)
})