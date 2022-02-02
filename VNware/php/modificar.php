<?php 
	include_once("../../conexion.php");
 
	$Vnware = $_POST['VNware'];
	$power = $_POST['power'];
	$DNS = $_POST['DNS'];
	$conection = $_POST['conection'];
	$cpu = $_POST['CPUs'];
	$memoria = $_POST['memory'];
	$IP = $_POST['IPadress'];
	
	$id=$_POST['id'];

	$script = "UPDATE vmware_datos SET vmware='$Vnware',power='$power',dns='$DNS',conection='$conection',cpus='$cpu',memoria='$memoria',primario='$IP' WHERE id='$id'";
	$resultado = $conexion->query($script);

	if(!$resultado){
		echo "0";
	}else{
		echo "1";
	}
	
	$conexion->close();
?>
