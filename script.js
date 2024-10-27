document.getElementById('loginForm').addEventListener('submit', function(event) {
   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage').value;
     
    if (username === 'admin' && password === '123456') {
        alert('Login realizado com sucesso');
        errorMessage.style.display = 'none';

    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
    }

});