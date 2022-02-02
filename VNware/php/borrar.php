<?php
	include_once("../../conexion.php");

    $id = $_POST['id'];
    $script = "DELETE FROM vmware_datos WHERE id='$id'";

	if(!$conexion->query($script)){
		return 1;
	}
	
	$conexion->close();

	return 0;
    
?>