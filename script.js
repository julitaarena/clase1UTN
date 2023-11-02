let estado = document.getElementById('estado');
let capturaEstado = document.getElementById('capturaEstado');
 
function cambio(){
    capturaEstado.innerHTML = `Estado seleccionado:  ${estado.value}`;
}

estado.addEventListener ('change', cambio);
