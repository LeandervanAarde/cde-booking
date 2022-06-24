<?php
//This file is the connection being established for the database. 
$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "root";
$dbname = "medInfo";

//establish the connection through the connection variable my my sql improved
$connection = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);

//If there is a connection error then echo our that her has been an error, what the error is and then exit.
if( $mysqli -> connect_error){
    echo 'Database connection has failed' . $mysqli -> connect_error;
    exit();
}
//php connection ends here
?>