<?php
    require_once '../../conexion.php';
    $id = $_POST['id'];

    $consulta= "SELECT * FROM bitacora_imagenes WHERE id_img='$id'";
    $resultado = $conexion->query($consulta);
    $primero=1;

    while($datos=$resultado->fetch_assoc()){
      if($primero==1){
          echo "
          <div class='carousel-item active'>
          <img src='bitacora_planta/".$datos['ruta']."' class='d-block w-100' alt='...'></br>
          <p>Creacion: ".$datos['creado']."</p>
          <input type='hidden' value='".$datos['id_img']."'>
          <input type='hidden' value='".$datos['nombre']."'>
          <button id='borrarImagen' class='btn btn-danger container'>Borrar</button>
          </div>";
          $primero=0;
      }else{
          echo "
          <div class='carousel-item'>
          <img src='bitacora_planta/".$datos['ruta']."' class='d-block w-100' alt='...'></br>
          <p>Creacion: ".$datos['creado']."</p>
          <input type='hidden' value='".$datos['id_img']."'>
          <input type='hidden' value='".$datos['nombre']."'>
          <button id='borrarImagen' class='btn btn-danger container'>Borrar</button>
          </div>";
      }
    }

    $resultado->free_result();
    $conexion->close();
    
    if($primero==1){
    	echo "<center><h1>No existen imagenes en este registro</h1></center>";
    }
?>
