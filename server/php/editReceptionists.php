<?php
    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);
    $recepName = $data->recepName;
    $recepSurname= $data->recepSurn;
    $status= $data->recepStat;
    $email = $data->mail;
    $special = $data->special;
    $number = $data-> num;
  

    $sql = "UPDATE Receptionists SET name='$recepName', surname='$recepSurname', phoneNumber='$number',email='$email', rank='$special',Status='$status' WHERE name='$recepName' AND surname='$recepSurname' AND email='$email';";
    $result = mysqli_query($connection, $sql);

    if(!$result){
        echo ("Err Desc:". mysqli_error($connection));
    } else{
        echo 'True'; 
    }
?>