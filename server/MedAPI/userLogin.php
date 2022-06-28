<?php
include "db_connection.php";

//To prevent CORS errors 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

//Getting the data 
$username = $data->user;
$password = $data->password;
$encryptedPassword = md5($password);

if($username === "" && $password === ""){
    echo "Error!";
} else{
    $sql = "SELECT * FROM Receptionists WHERE email = '$username' AND password = '$password';";
    $result = mysqli_query($connection, $sql);
    $resultCheck = mysqli_num_rows($result);
    

    if($resultCheck > 0){
        echo 'true';
   
    } else{
        echo 'false';
    }
}


?>