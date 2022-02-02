<?php 
	include_once("conexion.php");
 ?>
<?php 
    $id = $_POST['id'];
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
	$nivel = $_POST['nl'];
	$imagen = $_FILES["imagen"]]["name"];
	$comentarios = $_POST['comentario'];
	
  //aqui definimos el nombre temporal de la imagen
    $ruta = $_FILES['imagen']['tmp_name'];
   //aqui esta la ruta que la imagen tomara para llegar a la carpeta fotos
	$directorio = "fotos/".$imagen;
	//guardamos el tipo de imgaen (jpg, jepg, gif, etc)
    $img_type = $_FILE['imagen']['type'];
    //esta parte funciona como filtro, practicamente nos dice que si el archivo
    //tiene una extension que concuerde con jpg, jepg, gif o png lo suba o lo mueva a la carpeta
	if(((strpos($img_type, "gif") || strpos($img_type, "jpeg") ||
 strpos($img_type, "jpg")) || strpos($img_type, "png"))){
       //aqui movemos la imagen con el comando move_upload_file
         move_uploaded_file($ruta,$directorio);
	}

		$modificar = "UPDATE ingresar SET nombre='$nombre',cl1='$cl1',cl2='$cl2',cl3='$cl3',pl1='$pl1',pl2='$pl2',pl3='$pl3',frecuencia='$frecuencia',rpm='$rpm',horasuso='$horasu',horai='$horai',horat='$horat',minuso='$minu',carga='$carga',salida='$salida',temperatura='$temperatura',bar='$bar',psi='$psi',kpa='$kpa',imagen='$destino',nivel='$nivel',comentarios='$comentarios' WHERE id='$id'";

		$resultado = mysqli_query($conexion,$modificar);

		if(!$resultado){
			echo"a ocurrido un error";
	}
	//header("location:../bitacora.php");
?>