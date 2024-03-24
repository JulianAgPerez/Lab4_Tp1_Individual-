/*
A fines de seguir rigurosamente lo pedido (que solo el id sea la variable XXXX), lo separo en 2 funciones, aunque perfectamente podria ir en una misma funcion pero modificando el json o convirtiendo todos los Y en TRUE para manejar booleanos en vez de string/char

En caso de hacer eso solo bastaria agregar una verificacion en manageUser para que al apretar en bloquear, si ya esta bloqueado, no haga nada, solo notifique al usuario

function manageUser(idUsuario, estado){
    var url = 'http://168.194.207.98:8081/tp/action=BLOQUEAR&idUser=' +idUsuario+ '&estado=' + !estado;
    console.log(url);
    realizarLlamada(url);
}

*/

//Verificacion (podria ser mas optima con switch case o quizas con ternarios)
function verificacionBloq(idUsuario,estadoBase, estadoCambiar){
    if(estadoBase === estadoCambiar){
        alert("El usuario ya se encuentra en ese estado.")
    }else{
        if(estadoCambiar === 'Y')
            bloquearUsuario(idUsuario);
        else
            desbloquearUsuario(idUsuario);
    }
}

// Función para bloquear un usuario
function bloquearUsuario(idUsuario) {
    var url = 'http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=' + idUsuario + '&estado=Y';
    realizarLlamada(url);
}

// Función para desbloquear un usuario
function desbloquearUsuario(idUsuario) {
    var url = 'http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=' + idUsuario + '&estado=N';
    realizarLlamada(url);
}

// Función genérica para realizar una llamada HTTP
function realizarLlamada(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al realizar la llamada: ' + response.status);
        }
        console.log('Llamada exitosa:', response.statusText);
        
    })
    .catch(error => console.error('Error al realizar la llamada:', error));
}