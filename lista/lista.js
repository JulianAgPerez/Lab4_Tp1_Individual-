var gridData = []; // Variable global para almacenar los datos
var gridContainer = document.getElementById('grid-container');


// Función para generar la tabla HTML a partir de los datos
function generateGrid(data) {
    var tableHtml = '<table border="1">';
    // Encabezados de la tabla
    tableHtml += '<tr>';
    tableHtml += '<th>ID</th>';
    tableHtml += '<th>Usuario</th>';
    tableHtml += '<th>Bloqueado</th>';
    tableHtml += '<th>Nombre</th>';
    tableHtml += '<th>Apellido</th>';
    tableHtml += '<th>Bloquear</th>'
    tableHtml += '<th>Desbloquear</th>'
    tableHtml += '</tr>';
    
    // Filas de la tabla
    data.forEach(function(row) {
        var bloqueado = row[2] === 'Y'; // Verificar si el usuario está bloqueado
        // Establecer el color de fondo de la fila según el estado del usuario
        var backgroundColor = bloqueado ? '#fd9f8b' : '#cef8c6';

        
        tableHtml += '<tr style="background-color:' + backgroundColor + '">';
        row.forEach(function(cell) {
            tableHtml += '<td>' + cell + '</td>';
        });

        var paramEstado = ','+'\''+row[2]+'\'' + ',';
        var paramBloq = '\'' + 'Y' + '\'';
        var paramDesbloq = '\'' + 'N' + '\'';

        // Columna "Bloqueado" con botón para bloquear
        tableHtml += '<td><button style= "background-color: #fd9f8b;" onclick="verificacionBloq(' + row[0] + paramEstado+ paramBloq + ')"><span class="fas fa-thumbs-up" ></span></button></td>';
        // Columna "Desbloqueado" con botón para desbloquear
        tableHtml += '<td><button style="background-color: #cef8c6;" onclick="verificacionBloq(' + row[0] + paramEstado + paramDesbloq + ')"><span class="fas fa-thumbs-down"></span></button></td>';

        tableHtml += '</tr>';
    });
    
    tableHtml += '</table>';
    return tableHtml;
}

// Función para cargar los datos del archivo JSON
function loadUserData() {
    fetch('usuarios.json')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Almacenar los datos en la variable global
        gridData = data.map(usuario => [
            usuario.id,
            usuario.usuario,
            usuario.bloqueado === 'Y' ? 'Y': 'N',
            usuario.nombre,
            usuario.apellido
        ]);

        // Imprimir los datos en la consola para verificar
        console.log('Datos cargados:', gridData);

// Generar la tabla HTML y agregarla al contenedor
gridContainer.innerHTML = generateGrid(gridData);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}