<?php
	inlude("conexion.php");

	$nombre = $_POST['nombre'];
	$cl1 = $_POST['cl1'];
	$cl2 = $_POST['cl2'];
	$cl3 = $_POST['cl3'];
	$pl1 = $_POST['pl1'];
	$pl2 = $_POST['pl2'];
	$pl3 = $_POST['pl3'];
	$frecuencia = $_POST['frecuencia'];
	$rpm = $_POST['rpm'];
	$horasu = $_POST['horasu'];
	$minu = $_POST['minu'];
	$carga = $_POST['carga'];
	$salida = $_POST['salida'];
	$temperatura = $_POST['temperatura'];
	$horai = $_POST['horai'];
	$horat = $_POST['horat'];
	$bar = $_POST['bar'];
	$psi = $_POST['psi'];
	$kpa = $_POST['kpa'];
	$nivel = $_POST['nivel'];
	$imagen = $_FILES["imagen"]["name"];
	$comentarios = $_POST['comentarios'];
	$ruta = $_FILES["imagen"]["tmp_name"];
	$destino = "fotos/" . $imagen;


	$requisitos = array("image/png");



	function modificar($nombre, $cl1, $cl2, $cl3, $pl1, $pl2, $pl3, $frecuencia, $rpm, $horasu, $minu, $carga, $salida, $temperatura, $horai, $horat, $bar, $psi, $kpa, $nivel, $imagen, $comentarios, $ruta, $destino){ 

			if(in_array($_FILES['imagen']['type'], $requisitos))
				{
					move_uploaded_file($ruta, $destino);
				}

		$query= "UPDATE ingresar SET nombre='$nombre', cl1='$cl1', cl2='$cl2', cl3='$cl3' pl1='$pl1', pl2='$pl2', pl3='$pl3', frecuencia='$frecuencia', rpm='$rpm', horauso='$horasu', horai='$horai', horat='$horat', minuso='$minuso', carga='$carga', salida='$salida', temperatura='$temperatura', bar='$bar', psi='$psi', kpa='$kpa', imagen='$imagen', nivel='$nivel', comentarios='$comentarios',
		WHERE idusuario=$idusuario";
		$resultado = mysqli_query($conexion, $query);
		verificar_resultado( $resultado );
		cerrar( $conexion );
		}

	function eliminar($idusuario, $conexion){
		$query = "UPDATE usuario SET estado = 0 WHERE idusuario = $idusuario";
		$resultado = mysqli_query($conexion, $query);
		verificar_resultado( $resultado );
		cerrar( $conexion );
		}
?>