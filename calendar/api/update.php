<?php
    require_once("../config.php");

    if(isset($_POST['editEventId'])){
        //Datos recibidos del arreglo $_POST
        $error = null;
        $id = $_POST['editEventId'];
        $start = $_POST['editStartDate'];
        $end = $_POST['editEndDate'];

        //Datos opcionales
        $title = isset($_POST['editEventTitle']) ? $_POST['editEventTitle'] : '';
        $color = isset($_POST['editColor']) ? $_POST['editColor'] : '';
        $text_color = isset($_POST['editTextColor']) ? $_POST['editTextColor'] : '';

        //Validacion $start y $end
        if($start == ''){
            $error['start'] = 'Fecha de inicio requerida';
        }

        if($end == ''){
            $error['end'] = 'Fecha de fin requerida';
        }

        if(!isset($error)){
            $start = date('Y-m-d H:i:s', strtotime($start));
            $end = date('Y-m-d H:i:s', strtotime($end));

            $data['success'] = true;
            $data['message'] = 'Success!';

            $script = "UPDATE events SET title='$title',
                    start_event='$start', end_event='$end', color='$color', text_color='$text_color', aviso=1
                    WHERE id='$id'";
            $conexion->query($script);
        }else{
            $data['success'] = false;
            $data['errors'] = $error;
        }

        echo json_encode($data);
    }
?>