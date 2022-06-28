<?php

    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $id = $data;
    $sql = "DELETE FROM AvailableAppointments WHERE id = '$id';";
    $result = mysqli_query($connection, $sql);

    if(!$result){
        echo ("Err desc:". mysqli_error($connection));
    }else{
        echo "Appointment has been deleted";
    }
?>