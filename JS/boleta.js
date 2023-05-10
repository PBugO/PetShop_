//Subtotal
$(document).ready(function () {
    // Permite solo el ingreso de números
    $('#texto1').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//IVA
$(document).ready(function () {
    $("#texto2").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

//Total
$(document).ready(function () {
    $('#texto3').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});
