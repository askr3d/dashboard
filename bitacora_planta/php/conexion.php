<?php
    $servidor = "servidores.guadalajara.gob.mx";
    $usuario = "cmillanc";
    $pass = "municipal2020.,";
    $base = "nocserversgdlgobmx";

    //Crear conexion
    $conn = new mysqli($servidor, $usuario, $pass, $base);
    if($conn->connect_error){
        die("Error No.: ".$conn->connect_errno." | ".$conn->connect_error);
    }
/*     if($conn){
        echo "conexion";
    } */
?>