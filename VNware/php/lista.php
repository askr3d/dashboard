<?php  
	include '../../conexion.php';

	//Obtener datos de la tabla VMware
	$script = "SELECT * FROM vmware_datos";
	$resultado = $conexion->query($script);

	if (!$resultado) {
		die("Error");
	}
	else{
		while($data = $resultado->fetch_assoc()) {
				$arreglo["data"][] = array_map('utf8_encode', $data);
		}
		$resultado->free_result();
		echo json_encode($arreglo);
	}
	$conexion->close();
?>
