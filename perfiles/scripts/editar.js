$(document).ready(function(){
    var nombreColumna, valorLabel, tablaContenido;
    var cuadroImagen =  $("#cuadroImagen").html();

    $(document).on("click", ".cancelarEvento", function(event){
        event.preventDefault();
    });

    $(document).on("click", ".editar",function(){
        fila = $(this).closest("td");
        placeHolder = fila.find("label").text();
        valorLabel = placeHolder;
        nombreColumna = fila.find("input").val();
        fila.find("input").remove();
        fila.find("label").remove();
        fila.find("i").remove();
        //class="form-control form-control-sm"
        input = document.createElement('input');
        input.setAttribute('type',"text");
        input.setAttribute('value', placeHolder);
        input.setAttribute('id', 'confirmarInput');
        input.setAttribute('class','form-control form-control-sm col-4');
        fila.append(input);
        inputFocus = fila.find("input");
        inputFocus.focus();
    });
    //class='bx bx-edit editar' style='color:#00add0'
    $(document).on("focusin", "#confirmarInput",function(){
        $(document).on("focusout", "#confirmarInput", function(){
            fila = $(this).closest("td");
            valorInput = fila.find("input").val();
            var nombrePerfil;
            if(!(valorInput===valorLabel) && $.trim(valorInput)!==""){
                var parametros = {
                    "columna": nombreColumna,
                    "valor": valorInput
                };
                $.ajax({
                    url: "perfiles/php/editar.php",
                    type: 'post',
                    data: parametros,
                    success: function(data){
                        if(!data){
                            alert(error);
                        }else{
                            if(nombreColumna!=="correo"){
                                data = $.parseJSON(data);
                                $(".nombrePerfil").text(data[0]);
                                $(".nombreCompleto").text(data[0]+" "+data[1]);
                            }else{
                                location.href="login.html";
                            }
                        }
                    }
                });
            }else{
                valorInput = valorLabel;
            }
            inputHidden = document.createElement('input');
            inputHidden.setAttribute('type', "hidden");
            inputHidden.setAttribute('value', nombreColumna);
            label = document.createElement('label');
            label.innerText = valorInput;
            icon = document.createElement('i');
            icon.setAttribute('class', "bx bx-edit editar");
            icon.setAttribute('style', "color:#00add0");
            fila.find("input").remove();
            fila.append(inputHidden);
            fila.append(label);
            fila.append(" ");
            fila.append(icon);
        });
        $(document).on("keypress", "#confirmarInput", function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if(code==13){
                fila = $(this).closest("td");
                valorInput = fila.find("input").val();
                var nombrePerfil;
                if(!(valorInput===valorLabel) && $.trim(valorInput)!==""){
                    var parametros = {
                        "columna": nombreColumna,
                        "valor": valorInput
                    };
                    $.ajax({
                        url: "perfiles/php/editar.php",
                        type: 'post',
                        data: parametros,
                        success: function(data){
                            if(!data){
                                alert(error);
                            }else{
                                if(nombreColumna!=="correo"){
                                    data = $.parseJSON(data);
                                    $(".nombrePerfil").text(data[0]);
                                    $(".nombreCompleto").text(data[0]+" "+data[1]);
                                }else{
                                    location.href="login.html";
                                }
                            }
                        }
                    });
                }else{
                    valorInput = valorLabel;
                }
                inputHidden = document.createElement('input');
                inputHidden.setAttribute('type', "hidden");
                inputHidden.setAttribute('value', nombreColumna);
                label = document.createElement('label');
                label.innerText = valorInput;
                icon = document.createElement('i');
                icon.setAttribute('class', "bx bx-edit editar");
                icon.setAttribute('style', "color:#00add0");
                fila.find("input").remove();
                fila.find("button").remove();
                fila.append(inputHidden);
                fila.append(label);
                fila.append(" ");
                fila.append(icon);
            }
        });
    });

    $(document).on("click", "#pass", function(){
        tabla = $("#tablaDatos");
        contenido = tabla.html();
        tablaContenido=contenido;
        tabla.text("");
        tabla.append("<center>");
        tabla = tabla.find("center");


        tr = document.createElement('tr');
        td = document.createElement('td');
        hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', "hidden");
        hiddenInput.setAttribute('id', "columna");
        hiddenInput.setAttribute('value', "pass");
        td.append(hiddenInput);
        tr.append(td);
        tabla.append(tr);

        //class="form-control form-control-sm"
        tr = document.createElement('tr');
        td = document.createElement('td');
        nuevaPass = document.createElement('input');
        nuevaPass.setAttribute('type',"password");
        nuevaPass.setAttribute('id', "nuevaPass");
        nuevaPass.setAttribute('class','d-inline form-control form-control-sm col-6');
        nuevaPass.setAttribute('required', "required");
        td.append("Nueva contraseña: ");
        td.append(nuevaPass);
        tr.append(td);
        tabla.append(tr);

        tr = document.createElement('tr');
        td = document.createElement('td');
        repitePass = document.createElement('input');
        repitePass.setAttribute('type', "password");
        repitePass.setAttribute('id', "repitePass");
        repitePass.setAttribute('class','d-inline form-control form-control-sm col-6');
        repitePass.setAttribute('required', "required");
        td.append("Repite contraseña: ");
        td.append(repitePass);
        tr.append(td);
        tabla.append(tr);
        boton = document.createElement('button');
        boton.setAttribute('id', "confirmarContra");
        //class="btn btn-primary btn-sm"
        boton.setAttribute('class', 'btn btn-primary');
        boton.innerText="Confirmar";
        br = document.createElement("br");
        tabla.append(br);
        tabla.append(boton);
        tabla.append(" ");
        boton = document.createElement('button');
        boton.setAttribute('id', "cancelarPass");
        boton.setAttribute('class', 'btn btn-secondary');
        boton.innerText="Cancelar";
        tabla.append(boton);
    });

    $(document).on("click", "#confirmarContra", function(){
        nuevaPass = $.trim($("#nuevaPass").val());
        repitePass = $.trim($("#repitePass").val());
        if(nuevaPass===repitePass && (nuevaPass!=="") && (repitePass!=="")){
            columna = "pass";
            var parametro = {
                "valor": nuevaPass,
                "columna": columna
            }

            $.ajax({
                url: "perfiles/php/editar.php",
                data: parametro,
                type: 'post',
                success: function(data){
                    if(!data){
                        alert(error);
                    }else{
                        location.href="login.html";
                    }
                }
            });
            
            tabla = $("#tablaDatos");
            tabla.html(tablaContenido);
        }else{
            if((nuevaPass==="") || (repitePass==="")){
                alert("Campos vacios");
            }else{
                alert("Las contraseñas no coinciden");
            }
        }
    });
    $(document).on("click", "#cancelarPass", function(){
        tabla = $("#tablaDatos");
        tabla.html(tablaContenido);
    });
    //<canvas id="canvas" width="800" height="600"></canvas>
    $(document).on("change", "#fotoPerfil", function(){
        $("#cuadroImagen").html(cuadroImagen);
        const imagen = document.querySelector('#fotoPerfil');
        const imagenPreview = document.querySelector('#imagen');
            
        const selectImagen = imagen.files;

        if (!selectImagen || !selectImagen.length) {
            imagenPreview.src = "";
            return;
        }

        const primerArchivo = selectImagen[0];
        const objectURL = URL.createObjectURL(primerArchivo);
        imagenPreview.src = objectURL;

        fila = imagenPreview.closest("div");

        button = document.createElement("button");
        button.setAttribute("id", "confirmarFoto");
        //class="btn btn-primary btn-sm"
        button.setAttribute("class", "btn btn-primary btn-block col-4");
        button.innerText = "Confirmar";
        fila.append(button);
        fila.append(" ");

        button = document.createElement("button");
        button.setAttribute("id", "cancelarFoto");
        button.setAttribute("class", "btn btn-secondary btn-block col-4");
        button.innerText = "Cancelar";
        fila.append(button);
            
    });
    $(document).on("click", "#cancelarFoto", function(){
        $("#cuadroImagen").html(cuadroImagen);
    });
    $(document).on("click", "#confirmarFoto", function(){
        var parametros = new FormData;
        const imagen = document.getElementById('fotoPerfil');
        parametros.append("fotoPerfil[]", imagen.files[0]);
        $("#cuadroImagen").html(cuadroImagen);
        $.ajax({
            url: "perfiles/php/agregarFoto.php",
            type: 'post',
            data: parametros,
            datatype: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                if(data==1){
                    const imagenPreview = document.querySelector('#imagen');
                    imagenPreview.setAttribute("src", "");
                    imagenPreview.src = URL.createObjectURL(imagen.files[0]);
                    $.toast({
                        text: 'Imagen subida',
                        showHideTransition: 'slide',
                        icon: 'success'
                    });
                }else if(data==2){
                    $.toast({
                        text: 'Extension invalida',
                        showHideTransition: 'slide',
                        icon: 'warning'
                    });
                }else{
                    $.toast({
                        text: 'Ha ocurrido un error',
                        showHideTransition: 'fade',
                        icon: 'error'
                    });
                }
            }
        });
    });
});