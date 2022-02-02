<?php  
	include("conexion.php");

	$consulta = "SELECT * FROM ingresar";
	$resultado = mysqli_query($conexion,$consulta);

	if (!$resultado) {
		die("Error");
	}
	else{
			while($data = mysqli_fetch_assoc($resultado)) {
					$arreglo["data"][] = array_map('utf8_encode', $data);
			}
			echo json_encode($arreglo);

		}
	
	mysqli_free_result($resultado);
	mysqli_close($conexion);
	
?>