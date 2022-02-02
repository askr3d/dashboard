<?php  
	include("conexion.php");
?>
<?php 
	$id = $_POST['id'];

	$borrar = "DELETE FROM ingresar WHERE id='$id'";

	$resultado = mysqli_query($conexion,$borrar);

	header("Location:../bitacora.php");
?>