<?php
    require_once("../../conexion.php");

    $script = "SELECT * FROM events WHERE aviso = 1";
    $consulta = $conexion->query($script);
    $eventoCercano = array();
    //-1001448293407
    $grupo = "926047010";
    $current_date = new DateTime();
    $current_date = $current_date->format('Y-m-d');
    $current_date = explode('-', $current_date);

    while($data = $consulta->fetch_assoc()){
        $different_date = date('Y-m-d', strtotime($data['start_event']));
        $different_date = explode('-', $different_date);
        $dias_restantes = (int) $different_date[2] - $current_date[2];
        echo $dias_restantes."<br>";
        if($current_date[0] == $different_date[0] || (($current_date[0]+1)==$different_date[0])){
            if($current_date[1]==$different_date[1] || (($current_date[1]+1)==$different_date[1]+12)){
                if($dias_restantes<0 && (($current_date[1]+1) == $different_date[1]+12)){
                    $dias_restantes = (int) $utlimoDiaMes - $current_date[2];
                    $dias_restantes += $different_date[2];
                }
                if($dias_restantes==1){
                    $id = $data['id'];
                    $script = "UPDATE events SET aviso = 0 WHERE id='$id'";
                    $conexion->query($script);
                    $title = $data['title'];
                    $fecha = date('d/m/Y', strtotime($data['start_event']));
                    $hora = date('H:i:s', strtotime($data['start_event']));
                    $eventoCercano[] = urlencode("📋 Mañana es el evento: $title
📅 Fecha: $fecha
⏱️ Hora: $hora");
                }
            }
        }
    }

    foreach($eventoCercano as $mensaje){
        file_get_contents("https://api.telegram.org/bot1945749109:AAEJ-ld4yqCkoC4A4yirM7vVWpOz-SGs4to/sendMessage?chat_id=$grupo&text=$mensaje");
    }

    $consulta->free_result();
?>