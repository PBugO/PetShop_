$(document).ready(function () {
    $('#Correo').on('input', function () {
        var email = this.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Ingrese una dirección de correo electrónico válida.');
        }
    });
});
  

  $(document).ready(function() {
    $('form').submit(function(event) {
      var Contraseña = $('#Contraseña').val();
      if (Contraseña.length < 8) {
        event.preventDefault();
        $('#error-message').text('La contraseña debe tener al menos 8 caracteres.');
      } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(Contraseña)) {
        event.preventDefault();
        $('#error-message').text('La contraseña debe incluir al menos un carácter especial.');
      }
    });
  });
  