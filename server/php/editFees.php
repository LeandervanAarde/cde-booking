<?php
    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);
    $update = $data;
    $sql = "UPDATE Patients SET feesOut='0.00' WHERE id='$update';";

    
    $result = mysqli_query($connection, $sql);
    echo $result;
    if(!$result){
        echo ("Err Desc:". mysqli_error($connection));
    } else{
        echo 'True'; 
    }
?>