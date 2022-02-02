<?php
    require_once '../../conexion.php';
    $consulta = "select * from ingresar";
    $resultado = $conexion->query($consulta);
    $celdas = array("fechora", "nivel", "horai", "horat", "comentarios", "nombre", "cl1", "cl2", "cl3", "pl1", "pl2", "pl3", "frecuencia", "rpm","horasuso", "minuso", "carga", "salida", "temperatura", "bar", "psi", "kpa", "imagen");
    $contador = 0;

    if(!$resultado){
        die("Error");
    }else{
        while($data = $resultado->fetch_assoc()){
            while($celdas[$contador]){
                if($contador>4){
                    $data[$celdas[$contador]]="<input type='hidden' value='".$celdas[$contador]."'>".
                    "<label>".$data[$celdas[$contador]]."</label>"."<i class='bx bx-edit editarTexto cancelarEvento' style='color:#00add0'></i>";
                }else if($contador>3){
                    $data[$celdas[$contador]]="<input type='hidden' value='".$celdas[$contador]."'>".
                    "<label>".$data[$celdas[$contador]]."</label>"."<i class='bx bx-edit editarArea cancelarEvento' style='color:#00add0'></i>";
                }else if($contador>1){
                    $data[$celdas[$contador]]="<input type='hidden' value='".$celdas[$contador]."'>".
                    "<label>".$data[$celdas[$contador]]."</label>"."<i class='bx bx-edit editarHora cancelarEvento' style='color:#00add0'></i>";
                }else if($contador>0){
                    $data[$celdas[$contador]]="<input type='hidden' value='".$celdas[$contador]."'>".
                    "<label>".$data[$celdas[$contador]]."</label>"."<i class='bx bx-edit editarOpcion cancelarEvento' style='color:#00add0'></i>";
                }
                $contador++;
            }
            $contador=0;
            $arreglo["data"][] = array_map('utf8_encode', $data);
        }
        $resultado->free_result();
        echo json_encode($arreglo);
    }
    $conexion->close();
?>
