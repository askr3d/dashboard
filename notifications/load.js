$(document).ready(function(){
    numeroNotificaciones = 0;
    dropDown = $('#dropAlerts');
    notificaciones = $('#notificaciones');

    update("contador");

    $(document).on('click', '#notificaciones_boton', function(){
        $('#dropEvent').toggleClass('show');
        update("notificaciones");
    })
    setInterval(function(){
        update("contador");
        eventoFecha();
    }, 5000);

    function update(data){
        $.ajax({
            url: "notifications/php/load.php",
            data: {data: data},
            type: "POST",
            dataType: "JSON",
            success: function(data){
                if(data.resultado){
                    console.log(data.resultado);
                    dropDown.text("");
                    dropDown.append(data.resultado);
                    notificaciones.text("");
                }else if(numeroNotificaciones != data.contador){
                    numeroNotificaciones = data.contador;
                    notificaciones.text(data.contador);
                }
            }
        });
    }

    function eventoFecha(){
        $.ajax({
            url: "notifications/php/notificaciones_telegram.php",
        });
    }
});