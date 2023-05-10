//Precio sin IVA
$(document).ready(function () {
    $('#texto1, #texto2').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//Valor IVA 19%
$(document).ready(function () {
    $('#texto2').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});


//Total a pagar 
$(document).ready(function () {
    // Permitir solo números en los campos de texto
    $('#texto1, #texto2, #texto3').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});
