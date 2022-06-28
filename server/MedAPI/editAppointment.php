<?php
    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);
    $id = $data->id;
    $special = $data-> Speciality;
    $timeStart = $data->timeStart;
    $timeEnd = $data->timeEnd;
    $day = $data->date;

    $sql = "UPDATE AvailableAppointments SET Date='$day',TimeStart='$timeStart',TimeEnd='$timeEnd',Speciality='$special' WHERE id='$id';";

    $result = mysqli_query($connection, $sql);
    echo $result;
    if(!$result){
        echo ("Err Desc:". mysqli_error($connection));
    } else{
        echo 'True'; 
    }
?>