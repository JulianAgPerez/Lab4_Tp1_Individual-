function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    // Construye la URL con los parámetros de usuario y contraseña
    const url = `http://168.194.207.98:8081/tp/login.php?user=${encodeURIComponent(usuario)}&pass=${encodeURIComponent(clave)}`;    //enconde sirve para que los caracteres especiales se codifiquen correctamente

    // Realiza la solicitud utilizando fetch
    fetch(url)  // realiza una solicitud GET a la URL, aunque al ser datos deberia ser POST por tema seguridad
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al realizar la solicitud: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.respuesta === "OK") {
                // Redirige a la página "lista.html"
                window.location.href = "../lista/lista.html";
            } else {
                // Muestra el mensaje de error al usuario
                alert(data.mje);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
