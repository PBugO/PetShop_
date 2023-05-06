$(document).ready(function(){
    $.get('https://fakestoreapi.com/products', 
    function(data){ 
        $('#tabla-ropas tbody').empty();
        $.each(data, function(i, item){
            var fila ='';
            fila += '<tr>';
            fila += '      <td>'+ item.id +'</td>';
            fila += '      <td>'+ item.title +'</td>';
            fila += '      <td> $'+ item.price + '</td>';
            fila += '      <td>'+ item.description +'</td>';
            fila += '      <td> <img src="'+ item.image +'" height="200px"> </td>';
            fila += '</tr>';
            $('#tabla-ropas').append(fila);
        });

    });

});
