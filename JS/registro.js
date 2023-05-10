//RUT
$(document).ready(function () {
    $('#rut').Rut({
        formatOn: 'keyup',
        validateOn: 'keyup',
        useThousandsSeparator: true
    });
});


//Nombres
$(document).ready(function () {
    $('#nombres').on('keypress', function (event) {
        var regex = new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
});

//Apellidos
$(document).ready(function () {
    $('#apellidos').on('input', function () {
        $(this).val($(this).val().replace(/[^a-zA-Z]/g, ''));
    });
});

//Correo
$(document).ready(function () {
    $('#correo').on('input', function () {
        var input = $(this);
        var re = /\S+@\S+\.\S+/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("is-invalid").addClass("is-valid");
        }
        else {
            input.removeClass("is-valid").addClass("is-invalid");
        }
    });
});

//Contraseña
$(document).ready(function () {
    $('#password1').on('input', function () {
        var password = $(this).val();
        var regex = /^[a-zA-Z0-9@\-]{8,20}$/;
        if (!regex.test(password)) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });
});
