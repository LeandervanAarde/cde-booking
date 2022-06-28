<?php
    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);
   
    $id = $data->id;
    
    $first = $data->nm;
    $last = $data->surn;
    $gender = $data->gen;
    $number = $data->nr;
    $email = $data->mail;
    $maNr= $data->medicaNr;
    $sql = "UPDATE Patients SET name='$first',surname='$last',gender='$gender',phoneNumber='$number',email='$email',medicalAidNr='$maNr' WHERE id='$id';";
   
    $result = mysqli_query($connection, $sql);
    echo $result;
    if(!$result){
        echo ("Err Desc:". mysqli_error($connection));
    } else{
        echo 'True'; 
    }
?>