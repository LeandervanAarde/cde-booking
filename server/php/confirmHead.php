<?php
    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $headEm = $data->em; 
    $headPass= $data->pas;
   
    $sql = "SELECT email AND password FROM Receptionists WHERE email='$headEm' AND password ='$headPass';";
    $result = mysqli_query($connection, $sql);
    $resultChecker = mysqli_num_rows($result);

    if($resultChecker == 1){
        echo "true";
    } else{
        echo "false";
    }
?>