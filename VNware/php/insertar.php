<?php 
	include "../../conexion.php";
 ?>
<?php 
	$Vnware = $_POST['VNware'];
	$power = $_POST['power'];
	$DNS = $_POST['DNS'];
	$conection = $_POST['conection'];
	$cpu = $_POST['CPUs'];
	$memoria = $_POST['memory'];
	$IP = $_POST['IPadress'];
	$respuesta=0;

	$script = "INSERT INTO vmware_datos(vmware,power,dns,conection,cpus,memoria,primario)
	values('$Vnware','$power','$DNS','$conection','$cpu','$memoria','$IP')";
	
	if($conexion->query($script)){
		$respuesta=1;
	}
	
	$conexion->close();
	echo $respuesta;
	
?>
