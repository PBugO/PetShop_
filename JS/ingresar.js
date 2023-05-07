$(document).ready(function() {
    $('form').submit(function(event) {
      var email = $('#inputCorreoVerifi').val();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        event.preventDefault();
        $('#error-message').text('El correo electrónico no es válido.');
      }
    });
  });
  

  $(document).ready(function() {
    $('form').submit(function(event) {
      var password = $('#InputPassword').val();
      if (password.length < 8) {
        event.preventDefault();
        $('#error-message').text('La contraseña debe tener al menos 8 caracteres.');
      } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        event.preventDefault();
        $('#error-message').text('La contraseña debe incluir al menos un carácter especial.');
      }
    });
  });
  