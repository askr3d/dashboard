
$(document).ready(function(){

    var regresarTexto, placeHolder, celda;
    var resetContenedor = $("#contenedorFotos").html();

    $(document).on("click", ".editarTexto", function(){
        fila = $(this).closest("td");
        celda = fila.find("input").val();
        regresarTexto = fila.html();
        placeHolder = fila.find("label").text();
        input = document.createElement("input");
        input.setAttribute("id", "inputModificar");
        input.setAttribute("value", placeHolder);
        input.setAttribute("class", "form-control col-12");
        fila.text("");
        fila.append(input);
        inputFocus = fila.find("input");
        inputFocus.focus();
    });
    $(document).on("click", ".editarArea", function(){
        fila = $(this).closest("td");
        celda = fila.find("input").val();
        regresarTexto = fila.html();
        placeHolder = fila.find("label").text();
        input = document.createElement("textarea");
        input.setAttribute("id", "inputModificar");
        input.append(placeHolder);
        input.setAttribute("class", "");
        fila.text("");
        fila.append(input);
        inputFocus = fila.find("textarea");
        inputFocus.focus();
    });

    $(document).on("click", ".editarHora", function(){
        fila = $(this).closest("td");
        celda = fila.find("input").val();
        regresarTexto = fila.html();
        placeHolder = fila.find("label").text();
        input = document.createElement("input");
        input.setAttribute("type", "time");
        input.setAttribute("id", "inputModificar");
        input.setAttribute("class", "form-control form-control-sm col-12");
        input.setAttribute("value", placeHolder);
        fila.text("");
        fila.append(input);
        inputFocus = fila.find("input");
        inputFocus.focus();
    });

    $(document).on("click", ".editarOpcion", function(){
        fila = $(this).closest("td");
        celda = fila.find("input").val();
        regresarTexto = fila.html();
        placeHolder = fila.find("label").text();

        select = document.createElement("select");
        select.setAttribute("class", "");
        select.setAttribute("id", "inputModificar");

        optionDefault= document.createElement("option");
        optionAlta = document.createElement("option");
        optionMedia = document.createElement("option");
        optionBaja = document.createElement("option");
        optionDefault.setAttribute("value", "");
        optionDefault.append("Nivel...");
        optionAlta.setAttribute("value", "alta");
        optionAlta.append("Alta");
        optionMedia.setAttribute("value", "media");
        optionMedia.append("Media");
        optionBaja.setAttribute("value", "baja");
        optionBaja.append("Baja");
        
        switch(placeHolder){
            case "alta":
                optionAlta.setAttribute("selected", "selected");
                break;
            case "media":
                optionMedia.setAttribute("selected", "selected");
                break;
            case "baja":
                optionBaja.setAttribute("selected", "selected");
                break;
            default:
                optionDefault.setAttribute("selected", "selected");
                break;
        }

        select.append(optionDefault);
        select.append(optionAlta);
        select.append(optionMedia);
        select.append(optionBaja);
        
        fila.text("");
        fila.append(select);
        
        selectFocus = fila.find("select");
        selectFocus.focus();
    });

    $(document).one("focusin", "#inputModificar", function(){
        $(document).on("focusout", "#inputModificar", function(){
            fila = $(this).closest("td");
            fila = fila.html(regresarTexto);
        });
        $(document).on("keypress", "#inputModificar", function(e){
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code==13){
                fila = $(this).closest("td");
                $(this).remove();
                fila = fila.html(regresarTexto);
                valor = $(this).val();
                console.log(valor, placeHolder);
                if(valor!==placeHolder && valor!=""){
                    tr = fila.closest("tr");
                    id = parseInt(tr.find("td:eq(0)").text());
                    console.log("Ingreso algo");
                    var parametros = {
                        "id": id,
                        "celda": celda,
                        "valor": valor
                    }
                    $.ajax({
                        url: "bitacora_planta/php/modificar.php",
                        type: "post",
                        data: parametros,
                        success: function(data){
                            if(data){
                                $('#myTable').DataTable().ajax.reload();
                            }
                        }
                    });
                }
            }
        });
    });

    $(document).on("click","#editar",function(){
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        $("#id").val(id);
        $("#contenedorFotos").html(resetContenedor);
        $("#agregarImagen").val("");
    });


    $( "#modificarFormulario" ).submit(function( event ){
        event.preventDefault();
        var parametros = new FormData($(this)[0]);
        var imagenes = document.getElementById('agregarImagen').files.length;
        for(var index = 0;index<imagenes;index++){
            parametros.append("agregarImagen[]",document.getElementById('agregarImagen').files[index]);
        }

        $.ajax({
            url: 'bitacora_planta/php/agregarImagen.php',
            type: 'post',
            data: parametros,
            datatype: 'json',
            contentType: false,
            processData: false,
            success: function(data){
                data = $.parseJSON(data);
                console.log(data);
                var aceptadas="<ol>", existentes="<ol>", noAceptadas="<ol>";
                for(let imagen of data[0]){
                    aceptadas+="<li>"+imagen+"</li>";
                }
                for(let imagen of data[1]){
                    existentes+="<li>"+imagen+"</li>";
                }
                for(let imagen of data[2]){
                    noAceptadas+="<li>"+imagen+"</li>";
                }
                aceptadas+="</ol>";
                existentes+="</ol>";
                noAceptadas+="</ol>";
                if(data[3]==1){
                    $('#myTable').DataTable().ajax.reload();
                    $.toast({
                        heading: 'Modificacion exitosa',
                        text: 'Registro: '+ id,
                        showHideTransition: 'slide',
                        hideAfter: 20000,
                        icon: 'success'
                    });
                    $.toast({
                        heading: 'Imagenes subidas: '+data[0].length,
                        text: aceptadas,
                        showHideTransition: 'slide',
                        hideAfter: 20000,
                        icon: 'success'
                    });
                }
                if(data[1].length){
                    $.toast({
                        heading: 'Imagenes existentes: '+data[1].length,
                        text: existentes,
                        showHideTransition: 'plain',
                        hideAfter: 20000,
                        icon: 'warning'
                    }); 
                }
                if(data[2].length){
                    $.toast({
                        heading: 'Imagenes no subidas: '+data[2].length,
                        text: noAceptadas,
                        showHideTransition: 'fade',
                        hideAfter: 20000,
                        icon: 'error'
                    });
                }
                $("#contenedorFotos").html(resetContenedor);
                $("#agregarImagen").val("");
            }
        });
    });

});
