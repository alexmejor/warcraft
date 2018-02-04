<?php
header('Access-Control-Allow-Origin: *');  

class Database extends PDO {

	function __construct(){

		$dsn = "mysql:dbname=viajes";
		$username = "root";
		$password = "asd";

		try {  
			parent::__construct( $dsn, $username, $password );  
			$this->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );  
	
		}
		catch(PDOException $e) {  

        echo 'ERROR: ' . $e->getMessage();
		}   
	}
}

function checkNombre($nombre){
    $gbd = new PDO("mysql:host=localhost;dbname=prueba", "root", "asd");
    $gsent = $gbd->prepare("SELECT nombre FROM nombres WHERE nombre like ?");
    $gsent->bindValue(1,"%".$nombre."%");
    //$gsent->bindValue(":apellido",$apellido);
    $gsent->execute();
    $numero_registro = $gsent->fetchAll();
    return $numero_registro;
}

function insertarNombre($nombre){
    $gbd = new PDO("mysql:host=localhost;dbname=prueba", "root", "asd");
    $gsent = $gbd->prepare("INSERT INTO nombres (nombre) VALUES (?)");
    $gsent->bindValue(1,$nombre);
    $gsent->execute();
    $numero_registro = $gsent->fetchAll();
    return $numero_registro;
}

function editarNombre($nombre,$nuevonombre){
    $gbd = new PDO("mysql:host=localhost;dbname=prueba", "root", "asd");
    $gsent = $gbd->prepare("UPDATE nombres SET nombre = ? WHERE nombre = ?");
    $gsent->bindValue(1,$nuevonombre);
    $gsent->bindValue(2,$nombre);
    $gsent->execute();
    $numero_registro = $gsent->fetchAll();
    return $numero_registro;
}
//$el_array = checknombre($_GET['usuario']);
//$json = json_encode($el_array);
//echo $json;

$nombre = $_POST['nombre'];
$apellido = $_POST['apellidos'];


if(empty($nombre) || empty($apellido)) {
    echo "<br><p style='color:red'>Por favor ingrese un nombre</p>";
}
else {
    $nombre = checkNombre($nombre);
    if (count($nombre)>0) {
        echo "<br><p style='color:green'>Usuario encontrado:</p>";
        for($i = 0; $i < count($nombre); $i++) {
            echo "<p>";
            for($j = 0; $j < 1; $j++) {
                echo ucfirst($nombre[$i][$j]) . " ";
            }
            echo "</p>";
        }
    }
    else {
        echo "<br><p style='color:red'>Usuario inexistente</p>";
    }
}

//para insertar nombres
if(isset($_POST['boton'])){
    echo json_encode( insertarNombre($nombre) );
}
else {
    
}

//para editar los nombres
if(isset($_POST['editar'])){
    echo json_encode( editarNombre($_POST['nombreAntiguo'],$_POST['nombreNuevo']) );
}
else {
    
}
