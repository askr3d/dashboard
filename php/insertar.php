<?php 
    //incluimos el  archivo de conexion a la base de datos
	include_once("conexion.php");
 ?>
<?php 
  //pedimos por medio del metodo post que nos ebnvie los datos que haya en el formulario 
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
	$imagen = $_FILES['image']['name'];
	$comentarios = $_POST['comentarios'];

  //aqui definimos el nombre temporal de la imagen
    $ruta = $_FILES['image']['tmp_name'];
   //aqui esta la ruta que la imagen tomara para llegar a la carpeta fotos
	$directorio = "fotos/".$imagen;
	//guardamos el tipo de imgaen (jpg, jepg, gif, etc)
    $img_type = $_FILE['image']['type'];
    //esta parte funciona como filtro, practicamente nos dice que si el archivo
    //tiene una extension que concuerde con jpg, jepg, gif o png lo suba o lo mueva a la carpeta
	if(((strpos($img_type, "gif") || strpos($img_type, "jpeg") ||
 strpos($img_type, "jpg")) || strpos($img_type, "png"))){
       //aqui movemos la imagen con el comando move_upload_file
         move_uploaded_file($ruta,$directorio);
	}
       //hacemos el proceso de insercion de los datos que esten en las variables a la base de datos
		$insertar = "INSERT INTO ingresar(nombre,cl1,cl2,cl3,pl1,pl2,pl3,frecuencia,rpm,horasuso,horai,horat,minuso,carga,salida,temperatura,bar,psi,kpa,nivel,imagen,comentarios)VALUES('$nombre','$cl1','$cl2','$cl3','$pl1','$pl2','$pl3','$frecuencia','$rpm','$horasu','$horai','$horat','$minu','$carga','$salida','$temperatura','$bar','$psi','$kpa','$nivel','$directorio','$comentarios')";
      //ejecutamos la insercion
		$resultado = mysqli_query($conexion,$insertar);
      //una excepcion por si falla la consulta
		if(!$resultado){
			echo"a ocurrido un error";
	}
	//nos envia a la pagina de bitacora.php despues de ejecutar lo que debia ejecutar
	header("location:../bitacora.php");
?>