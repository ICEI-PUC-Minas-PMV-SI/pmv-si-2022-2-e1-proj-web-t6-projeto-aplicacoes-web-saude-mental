






const registrados = {
    "henrique": "pass",
    "alyson": "pass123",
    "giovanni": "pass456",
    "joao": "pass789",
};


function loginSubmit() {
    const usrname = document.getElementById("usrname").value;
    const psw = document.getElementById("psw").value;

    // Valida se o usuario e a senha estão corretos
    if (registrados[usrname] == psw) {
        console.log('Login efetuado!');
        sessionStorage.setItem("usrname", usrname);
        window.location.href = 'index.html';
    } else {
        console.log('Usuario ou Senha incorreto.');
    }

    console.log("oi");

}

// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', loginSubmit);
