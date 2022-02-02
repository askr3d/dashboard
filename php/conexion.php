<?php 
	$usuario = "desparza"; 
	$contra = "davides20";
	$base = "nocserversgdlgobmx";
	$servidor = "192.168.66.171";

	$conexion = mysqli_connect($servidor,$usuario,$contra) or die("error2");

	$db = mysqli_select_db($conexion,$base) or die("error3");


 ?>