<?php
    require_once 'conexion.php';
    $consulta = "select * from dashboard_usuarios";
    $resultado = mysqli_query($conn,$consulta);

    if(!$resultado){
        die("Error");
    }else{
        while($data = mysqli_fetch_assoc($resultado)){
            if($data["nivel"] or $data["nivel"]==null or $data["nivel"]==0){
                switch($data["nivel"]){
                    case 1:
                        $data["nivel"]="Administrador";
                        break;
                    case 2:
                        $data["nivel"]="Editor";
                        break;
                    case 3:
                        $data["nivel"]="Lector";
                        break;
                    default:
                        $data["nivel"]="Sin nivel";
                        break;
                }
            }
            $arreglo["data"][] = array_map('utf8_encode', $data);
        }
        echo json_encode($arreglo);
    }

    mysqli_free_result($resultado);
    mysqli_close($conn);
?>
