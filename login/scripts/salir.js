$(document).ready(function(){
    $('#salirSesion').click(function(){
        $.ajax({
            url: 'login/php/salir.php',
            success: function(response){
                if(response==1){
                    location.href ="login.html";
                }
            }
        });
    });
});