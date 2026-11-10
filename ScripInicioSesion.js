const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const correo = document.querySelector('input[name="correo"]').value;
    const contraseña = document.querySelector('input[name="contraseña"]').value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.correo === correo &&
        usuario.contraseña === contraseña
    );

    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso");

        console.log(usuarioEncontrado);

       

    } else {
        alert("Correo o contraseña incorrectos");
    }
});