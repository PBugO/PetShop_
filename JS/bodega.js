$(document).ready(function() {
    $('#cantidad').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode < 48 || keycode > 57) {
            event.preventDefault();
        }
    });
});