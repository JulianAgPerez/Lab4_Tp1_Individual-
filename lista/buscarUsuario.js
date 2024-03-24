function searchUser() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var filteredData = gridData.filter(function(row) {
        return row.some(function(cell) {
            return String(cell).toLowerCase().includes(searchInput);
        });
    });
    if (filteredData.length === 0) {
        // No se encontraron coincidencias, mostrar mensaje
        gridContainer.innerHTML = '<p>No se encontraron coincidencias.</p>' + generateGrid(filteredData);
    } else {
        // Se encontraron coincidencias, generar la tabla HTML
        gridContainer.innerHTML = generateGrid(filteredData);
    }
}