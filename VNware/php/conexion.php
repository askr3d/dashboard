<?php 
	
	$usuario = "palopez"; 
	$contra = "municipal2020.,";
	$base = "nocserversgdlgobmx";
	$servidor = "servidores.guadalajara.gob.mx";

	$conexion = mysqli_connect($servidor,$usuario,$contra,$base);
	
	if(!$conexion){
		  echo"a ocurrido un error";
		}
 ?>
