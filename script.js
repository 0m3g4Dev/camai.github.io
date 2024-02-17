document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let codeInputs = document.querySelectorAll('.code-inputs input');
    let code = '';
    codeInputs.forEach(input => {
        code += input.value;
    });
    
    if (code === '200780') { // Reemplaza '123456' con el cÃ³digo correcto
        window.location.href = '/model.html'; // Cambia 'pagina1.html' con la URL de destino
    } else if (code === '000000') { // Puedes agregar mÃ¡s cÃ³digos segÃºn sea necesario
        window.location.href = 'getcode.html';
    } else {
    ; // Mostrar alerta para cÃ³digos incorrectos
        codeInputs.forEach(input => {
            input.value = ''; // Limpiar los campos en caso de cÃ³digo incorrecto
        });
    }
});

function showAlert(message) {
    let alertPopup = document.createElement('div');
    alertPopup.className = 'alert-popup';
    alertPopup.textContent = message;

    document.body.appendChild(alertPopup);

    setTimeout(function() {
        alertPopup.remove();
    }, 3000); // La alerta desaparecerÃ¡ despuÃ©s de 3 segundos
}

let codeInputs = document.querySelectorAll('.code-inputs input');
codeInputs.forEach(function(input, index) {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && index > 0) {
            codeInputs[index - 1].focus();
        }
    });
});