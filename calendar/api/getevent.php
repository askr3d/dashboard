<?php
    require_once("../config.php");

    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $script = "SELECT * FROM events WHERE id = '$id'";
        $consulta = $conexion->query($script);
        $row = $consulta->fetch_assoc();
        $consulta->free_result();
        $conexion->close();
        $data = [
            'id' => $row['id'],
            'title' => $row['title'],
            'start' => date('d-m-Y H:i:s', strtotime($row['start_event'])),
            'end' => date('d-m-Y H:i:s', strtotime($row['end_event'])),
            'color' => $row['color'],
            'textColor' => $row['text_color']
        ];
        echo json_encode($data);
    }
?>