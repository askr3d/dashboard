$(document).ready(function(){
    $('.datetimepicker').datetimepicker();
    $('.colorpicker').colorpicker();
    var url = 'calendar/';
    var id;

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {

        //Formato de la fecha y hora: yyyy-mm-dd hh:mm:ss

        //Editar botones del calendario
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        navLinks: true,
        businessHours: true,
        editable: true,

        //Extrae los eventos desde la base de datos
        events: url+'api/load.php',

        //---Cambios en los eventos---//
        //Actualiza cuando el evento es arrojado a otra fecha
        eventDrop: function(arg) {
            //Obtiene la fecha y hora de inicio
            var start = arg.event.start.toDateString()+' '+arg.event.start.getHours()+':'+arg.event.start.getMinutes()+':'+arg.event.start.getSeconds();
            //Si no hay fecha y hora de fin, se asigna la misma fecha, por ende un evento de todo el dia
            if (arg.event.end == null) {
                end = start;
            } else {
                //Se obtiene la fecha y hora de fin
                var end = arg.event.end.toDateString()+' '+arg.event.end.getHours()+':'+arg.event.end.getMinutes()+':'+arg.event.end.getSeconds();
            }

            //Envia la peticion a update.php de tipo POST
            $.ajax({
              url: url+"api/update.php",
              type:"POST",
              /*
                Se envia los datos
                    {
                        id: id_del_evento,
                        start: fecha_hora_inicio,
                        end: fecha_hora_fin
                    }
              */
              data:{
                  editEventId:arg.event.id,
                  editStartDate:start,
                  editEndDate:end,
                  editEventTitle: arg.event.title,
                  editColor: arg.event.backgroundColor,
                  editTextColor: arg.event.textColor
                },
            });
        },

        //Actualiza los datos cuando se hace un cambio de hora desde el mouse
        eventResize: function(arg){
            //Obtiene la fehca y hora de inicio ej: '24-12-2021 12:00:00'
            var start = arg.event.start.toDateString()+' '+arg.event.start.getHours()+':'+arg.event.start.getMinutes()+':'+arg.event.start.getSeconds();
            //Obtiene la fecha y hora de fin ej: 25-12-2021 24:00:00
            var end = arg.event.end.toDateString()+' '+arg.event.end.getHours()+':'+arg.event.end.getMinutes()+':'+arg.event.end.getSeconds();

            //Envia una peticion ajax (Jquery) a update.php de tipo POST
            $.ajax({
                url: url+"api/update.php",
                type: "POST",
                /*
                    Envia los datos:
                    {
                        id: id_del_evento,
                        start: fecha_hora_inicio,
                        end: fecha_hora_fin
                    }
                */
                data:{
                    editEventId:arg.event.id,
                    editStartDate:start,
                    editEndDate:end,
                    editEventTitle: arg.event.title,
                    editColor: arg.event.backgroundColor,
                    editTextColor: arg.event.textColor
                },
            });
        },
        /*Se muestra el modal junto con los datos del evento
          y añade un evento-Js si se deasea borrar el evento seleccionado
        */
        eventClick: function(arg){
            //Obtiene y almacena el id del evento
            id = arg.event.id;

            /*
                Asigna el valor del id: 
                    1. Input hidde en su atributo: val
                    2. Boton eliminar en su atributo: data-id
            */
            $('#editEventId').val(id);
            $('#deleteEvent').attr('data-id', id);

            //Envia una peticion de tipo POST a getevent.php
            $.ajax({
                url: url+"api/getevent.php",
                type: "POST",
                dataType: 'json',
                //Los datos a evviar es el id, ya que este es unico y no se ocupa otro mas
                data: {id:id},
                success: function(data){
                    /* Asigna los valor a los inputs*/
                    $("#editEventTitle").val(data.title);
                    $("#editStartDate").val(data.start);
                    $("#editEndDate").val(data.end);
                    $("#editColor").val(data.color);
                    $("#editTextColor").val(data.textColor);
                    /* Muestra el modal */
                    $("#editeventmodal").modal();
                }
            });

            calendar.refetchEvents();
        }
    });
    calendar.setOption('locale', 'es');
    calendar.render();

    //Agrega evento al boton delete
    $(document).on('click', '#deleteEvent', function(){
        alert(id);
        //Confirma la desicion del usuario
        if(confirm("¿Estas seguro que quieres remover este evento?")){
            //Envia una peticion ajax tipo POST a delete.php
            $.ajax({
                url: url+"api/delete.php",
                type: "POST",
                //Se envia el id: id_evento_seleccionado (dato unico)
                data:{id:id},
                success: function(){
                    //Cierra el modal
                    $('#editeventmodal').modal('hide');

                    //Refresca el calendario
                    calendar.refetchEvents();
                }
            });

        }
    });

    $('#createEvent').submit(function(event){
        //Evita que se refresque la pagina cuando se presiona el boton de submit
        event.preventDefault();

        $('.form-group').removeClass('has-error'); //Elimina la clase has-error
        $('.help-block').remove(); //Eliminca el texto-error

        //Procesa el formulario
        //Envia una peticion ajax de tipo POST a insert.php
        $.ajax({
            url: url+"api/insert.php",
            type: "POST",
            //Obtiene los valores de los input del formulario
            data: $(this).serialize(),
            dataType: "JSON",
            encode: true
        }).done(function(data){
            if(data.success){
                //Remueve los valores de los input del formulario (Resetea el formulario)
                $('#createEvent').trigger("reset");
                //Cierra el modal
                $('#addeventmodal').modal('hide');
                $('.modal-backdrop').remove();

                //Refresca el calendario
                calendar.refetchEvents();
            }else{
                /*Si existe un error entonces*/
                //Error de fecha
                if(data.errors.date){
                    /*Añade la clase has-error y un div mostrando el texto*/
                    $('#date-group').addClass('has-error');
                    $('#date-group').append('<div class="help-block">' + data.erorrs.date + '</div>');
                }

                //Error de texto
                if(data.errors.title){
                    $('#title-group').addClass('has-error');
                    $('#title-group').append('<div class="help-block">' + data.errors.title + '</div>');
                }
            }
        });
    });

    $('#editEvent').submit(function(event){
        //Evita refrescar la pagina
        event.preventDefault();

        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        $.ajax({
            url: url+"api/update.php",
            type: "POST",
            data: $(this).serialize(),
            dataType: "JSON",
            encode: true
        }).done(function(data){
            if(data.success){
                //Remueve los valores de los inputs del formulario
                $('#editEvent').trigger('reset');
                //Cierra el modal
                $('#editeventmodal').modal('hide');
                //Refresca el calendario
                calendar.refetchEvents();
            }else{
                //Si hay errores en los datos,entonces

                //Error en la fecha
                if(data.errors.date){
                    $('#date-group').addClass('has-error');
                    $('#date-group').append('<div class="help-block">' +data.errors.date+ '</div>');
                }

                //Error en el texto
                if(data.erorrs.title){
                    $('#title-group').addClass('has-error');
                    $('#title-group').append('<div class="help-block">' +data.errors.title+ '</div>');
                }
            }
        });
    });
    
});