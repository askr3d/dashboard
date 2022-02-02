<?php
    require_once("../config.php");
    $data = [];

        $script = "SELECT * FROM events";
        $consulta = $conexion->query($script);
        while($row = $consulta->fetch_assoc()){
            $data[] = [
                'id' =>$row["id"],
                'title' => $row["title"],
                'start' => $row["start_event"],
                'end' => $row["end_event"],
                'backgroundColor' => $row["color"],
                'textColor' => $row["text_color"]
            ];
        }
        $consulta->free_result();
        $conexion->close();

    echo json_encode($data);
?>