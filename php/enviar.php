<?php
	$destino="matia.draper@gmail.com";
	$nombre=$_POST["nombre"];
	$correo=$_POST["correo"];
	$consulta=$_POST["consulta"];
	$asunto="Consulta de - " . $nombre;
	$contenido= "Nombre: " .$nombre . "\n" . "Correo: " . $correo ."\n" . "Consulta: " . $consulta;


	'Reply-To:'.$_POST['correo']."\r\n".
	'X-Mailer: PHP/'.phpversion();

    if (mail($destino, $asunto, $nombre, $correo)) {
    	//VOLVER AL DIRECTORIO Y PAGINA PRINCIPAL

    	 $file = fopen("archivo.txt", "a");

		fwrite($file, "Destino: ". $destino . PHP_EOL);
		fwrite($file, "Nombre: " . $nombre . PHP_EOL);
		fwrite($file,"Correo: " . $correo . PHP_EOL);
		fwrite($file,"Asunto: " . $asunto . PHP_EOL);
		fwrite($file, $contenido . PHP_EOL);
		fclose($file);
         echo "<script language='javascript'>  
          	alert('Mensaje enviado!, muchas gracias.'); window.location='../index.html';
         </script>";
         

    } else {
    	//REINTENTAR CORREO
         echo "<script language='javascript'>
            alert('Mensaje Fallido reintente nuevamente');window.location='../Contacto.html';
         </script>";
    }
?>