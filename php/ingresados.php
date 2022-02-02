<?php 
	include("conexion.php");
 ?>
<?php 
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

	if(in_array($_FILES['imagen']['type'], $requisitos))
	{
		move_uploaded_file($ruta, $destino);
	}

	function insertar(){
		$insertar = "INSERT INTO ingresar(nombre,cl1,cl2,cl3,pl1,pl2,pl3,frecuencia,rpm,horasuso,horai,horat,minuso,carga,salida,temperatura,bar,psi,kpa,imagen,nivel,comentarios)values('$nombre','$cl1','$cl2','$cl3','$pl1','$pl2','$pl3','$frecuencia','$rpm','$horasu','$horai','$horat','$minu','$carga','$salida','$temperatura','$bar','$psi','$kpa','$destino','$nivel','$comentarios')";
		$resultado = mysqli_query($conexion,$insertar);
		if(!resultado){
			echo"a ocurrido un error";
		}
	}
	
	header("Location:../index.php");
?>