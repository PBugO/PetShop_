//ID
$(document).ready(function () {
    $('#id').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//Nombres
$(document).ready(function () {
    $('#Nombre').on('keypress', function (event) {
        var regex = new RegExp("^[a-zA-Z]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
});

//Precio
$(document).ready(function () {
    $("#precio").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//Descuento subscriptor
$(document).ready(function () {
    $('#Descuento_subscriptor').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//Descuento por oferta
$(document).ready(function () {
    $("#precio, #Descuento\\ subscriptor, #Descuento\\ por\\ oferta").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});


