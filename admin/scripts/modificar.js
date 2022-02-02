
$(document).ready(function(){
    function inputValor(input, elemento){
        input.val(elemento.text());
    }
    function removerAtributo(elemento, atributo){
        elemento.removeAttr(atributo);
    }
    //Obtiene los datos de los usuarios de la tabla
    $(document).on("click", "#editar", function(){
        //Se acceden a los elementos
        fila = $(this).closest("tr");
        id = $("#idModificar");
        nombre = $("#nombreModificar");
        apellido = $("#apellidoModificar");
        correo = $("#correoModificar");
        nivel = $("#nivelModificar");

        //Se pasan los datos de la tabla al formulario
        inputValor(id, fila.find("td:eq(0)"));
        inputValor(nombre, fila.find("td:eq(1)"));
        inputValor(apellido, fila.find("td:eq(2)"));
        inputValor(correo, fila.find("td:eq(3)"));
        removerAtributo($("#administrador"), 'selected');
        removerAtributo($("#editor"), 'selected');
        removerAtributo($("#lector"), 'selected');
        removerAtributo($("#sinNivel"), 'selected');
        switch(fila.find("td:eq(4)").text()){
            case "Administrador":
                $("#administrador").attr('selected','selected');
                break;
            case "Editor":
                $("#editor").attr('selected', 'selected');
                break;
            case "Lector":
                $("#lector").attr('selected', 'selected');
                break;
            case "Sin nivel":
                $("#sinNivel").attr('selected', 'selected');
                break;
            default:
                break;
        }
    });


    //Modificar los usuarios
    $(document).on("submit", "#modificarFormulario", function(event){//Evento cuando se presiona el submit del formulario
        event.preventDefault();//Se cancela los eventos por default del formulario
        var parametros = new FormData($("#modificarFormulario")[0]);//Obtiene los datos que se escrbio en los inputs del formulario por su 'name'
        $.ajax({
            url: "admin/php/modificar.php", //Documento donde se van a mandar los paramatros
            type: 'post',                   //Tipo de envio GET o POST
            data: parametros,
            datatype: 'json',
            contentType: false,
            processData: false,             //Se cancela en processData para poder mandar objetos
            success: function(data){
                data = $.parseJSON(data);
                if(data[0]==0){
                    alert("Error");
                }else if(data[0]==4 && data[2]==data[3]){
                    location.href ="login.html";
                }else if(data[0]==2 && data[2]==data[3]){
                    location.href ="index.php";
                }else{
                    $.toast({
                        heading: 'Modificacion exitosa',
                        text: 'Registro: '+parametros.get("idModificar"),
                        showHideTransition: 'slide',
                        icon: 'success'
                    });
                    $("nombrePerfil").text(data[1]); //Actualiza el nombre (esquina superios izquierda)
                    $("#myTable").DataTable().ajax.reload(); //Actualiza la tabla 
                }
            }
        });
    });
});