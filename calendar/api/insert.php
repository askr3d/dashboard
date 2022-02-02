<?php
    require_once("../config.php");

    if(isset($_POST['title'])){
        //Datos recibidos $_POST
        $error = null;
        $title = $_POST['title'];
        $start = $_POST['startDate'];
        $end = $_POST['endDate'];
        $color = $_POST['color'];
        $text_color = $_POST['text_color'];

        //Validacion
        if($title == ''){
            $error['title'] = 'Titulo requerido';
        }
        if($start == ''){
            $error['start'] = 'Fecha de inicio requerida';
        }
        if($end == ''){
            $error['end'] = 'Fecha de fin requerida';
        }

        if(!isset($error)){

            //Formato de la fecha
            $start = date('Y-m-d H:i:s', strtotime($start));
            $end = date('Y-m-d H:i:s', strtotime($end));

            $data['success'] = true;
            $data['message'] = 'Success!';

            $script = "INSERT INTO events(title, start_event, end_event, color, text_color, aviso) 
                            VALUES('$title', '$start', '$end', '$color', '$text_color', 1)";
            $conexion->query($script);
            $conexion->close();

        }else{
            $data['success'] = false;
            $data['errors'] = $error;
        }

        echo json_encode($data);
    }
?>