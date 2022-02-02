<?php
    require_once("../../conexion.php");
    setlocale(LC_TIME, 'es_ES.UTF-8');

    $opcion = $_POST['data'];

    $script = "SELECT id, start_event, title FROM events ORDER BY start_event ASC";
    $consulta = $conexion->query($script);
    $current_date = new DateTime();
    $current_date = $current_date->format('Y-m-d');
    $utlimoDiaMes = date('t');
    $current_date = explode('-', $current_date);
    $contador = 0;
    $error = false;

    $result = null;
    $a = <<<_END
        <a class="dropdown-item d-flex align-items-center" href="calendario.php">
        <div class="mr-3">
        <div class="icon-circle bg-primary">
            <i class="fas fa-file-alt text-white"></i>
        </div>
        </div>
    _END;
    $div = <<<_END
        <div class="small text-gray-500">
    _END;
    $span = <<<_END
        <span class="font-weight-bold">A new monthly report is ready to download!
    _END;

    while($data = $consulta->fetch_assoc()){
        $temp_a = $a;
        $temp_div = $div;
        $temp_span = $span;

        $different_date = date('Y-m-d', strtotime($data['start_event']));
        $different_date = explode('-', $different_date);
        $dias_restantes = (int) $different_date[2] - $current_date[2];
        $temp_a .= "<div>".$temp_div.strftime("%B %d, %Y", strtotime($data['start_event']))."</div>";
        if($current_date[0] == $different_date[0] || (($current_date[0]+1)==$different_date[0])){
            if($current_date[1]==$different_date[1] || (($current_date[1]+1)==$different_date[1]+12)){
                if($dias_restantes>0){
                    $temp_a .= "Falta ".$dias_restantes." dia(s) para el evento: ".$data['title']."</span></div></a>";
                }else if(!$dias_restantes){
                    $temp_a .= "Hoy es el evento: ".$data['title']."</span></div></a>";
                }else if($dias_restantes<0 && (($current_date[1]+1) == $different_date[1]+12)){
                    $dias_restantes = (int) $utlimoDiaMes - $current_date[2];
                    $dias_restantes += $different_date[2];
                    $temp_a .= "Falta ".$dias_restantes." dia(s) para el evento: ".$data['title']."</span></div></a>";
                }else{
                    $error = true;
                    $temp_a="";
                    $contador--;
                }
                if(!$error){
                    $id = $data['id'];
                    $script = "UPDATE events SET notificacion = 0 WHERE id='$id'";
                    $conexion->query($script);
                }
                $error=false;
                $contador++;
                $result .= $temp_a;
            }
        }
    }
    if($opcion=="contador") $result=null;

    $consulta->free_result();
    $conexion->close();

    $array = [
            'contador' => $contador,
            'resultado' => $result
    ];
    echo json_encode($array);
?>