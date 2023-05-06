//Validación ID
$(document).ready(function() {
  $('#inputId').keypress(function(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  });
});

//Validación RUT
$(document).ready(function() {
  // Agregar método de validación para RUT chileno
  $.validator.addMethod("rutChileno", function(value, element) {
    // Eliminar puntos y guión del RUT
    value = value.replace(/[.-]/g, "");
    // Validar que el RUT tenga 8 o 9 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }
    // Validar que el último dígito sea un número o una 'K'
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
      return false;
    }
    // Calcular el dígito verificador
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
      digit = rut % 10;
      sum += digit * factor;
      rut = Math.floor(rut / 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
    // Validar que el dígito verificador sea correcto
    return dv === lastChar;
  }, "Por favor ingrese un RUT válido."); 
})

//Validación Nombres
$(document).ready(function() {
  $('#inputNombres').on('keyup', function() {
    var nombres = $(this).val();
    var letras = /^[A-Za-z\s]+$/;

    if (!nombres.match(letras)) {
      $(this).val('');
      alert('Por favor, ingresa solo letras en el campo de nombres.');
    }
  });
});

//Validación Apellidos
$(document).ready(function() {
  $('#inputApellidos').on('keyup', function() {
    var nombres = $(this).val();
    var letras = /^[A-Za-z\s]+$/;

    if (!nombres.match(letras)) {
      $(this).val('');
      alert('Por favor, ingresa solo letras en el campo de nombres.');
    }
  });
});

//Validación correo electrónico
$(document).ready(function() {
  $('#inputCorreo').on('blur', function() {
    var correo = $(this).val();
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!correo.match(emailRegex)) {
      $(this).val('');
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
    }
  });
});

//Validación dirección
$(document).ready(function() {
  $('#exampleFormControlTextarea1').on('blur', function() {
    var direccion = $(this).val();

    if (direccion.trim() === '') {
      alert('Por favor, ingresa una dirección válida.');
    }
  });
});

//Validación contraseña
$(document).ready(function() {
  $('#inlineFormInputGroupUsername2').on('input', function() {
    var password = $(this).val();
    var maskedPassword = '';

    for (var i = 0; i < password.length; i++) {
      maskedPassword += '*';
    }

    $(this).attr('type', 'password');
    $(this).val(maskedPassword);
    
    if (password.trim() === '') {
      $(this).val('');
      alert('Por favor, ingresa una contraseña.');
    }
  });
});








