//rut
$(document).ready(function () {

    // Agregar método de validación para RUT chileno
    $.validator.addMethod("rutChileno", function (value, element) {
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

    $("#formulario1").validate({
        rules: {
            rut: {
                required: true,
                rutChileno: true
            },
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 5,
            },
            password2: {
                required: true,
                equalTo: "#password",
            },
        }, // --> Fin de reglas
        messages: {
            rut: {
                required: "El rut es un campo obligatorio",
                rutChileno: "El formato del rut no es válido"
            },
            email: {
                required: "El email es un campo requerido",
                email: "El email no cumple el formato de un correo",
            },
            password: {
                required: "La contraseña es una campo obligatorio",
                minlength: "Mínimo 5 caracteres",
            },
            password2: {
                required: "Repita la contraseña anterior",
                equalTo: "Debe ser igual al campo contraseña",
            },
        },
    });
});

//nombres

$(document).ready(function () {
    $('#Nombre').on('input', function () {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });
});

//apellidos

$(document).ready(function () {
    $('#Apellido').on('input', function () {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });
});

//correo

$(document).ready(function () {
    $('#Correo').on('input', function () {
        var email = this.value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.setCustomValidity('');
        } else {
            this.setCustomValidity('Ingrese una dirección de correo electrónico válida.');
        }
    });
});

//contraseña
$(document).ready(function () {
    $('#Contraseña').on('input', function () {
        var password = $(this).val();
        var maskedPassword = '';

        for (var i = 0; i < password.length; i++) {
            maskedPassword += '*';
        }

        $(this).attr('type', 'password');
        $(this).val(maskedPassword);
    });
});


//Repetir contraseña
$(document).ready(function () {
    $('#RepetirContraseña').on('input', function () {
        var password = $(this).val();
        var maskedPassword = '';

        for (var i = 0; i < password.length; i++) {
            maskedPassword += '*';
        }

        $(this).attr('type', 'password');
        $(this).val(maskedPassword);
    });
});


