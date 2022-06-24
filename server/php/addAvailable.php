<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}
    include 'db_connection.php';
    // header('Access-Control-Origin: *');
    // header('Access-Control-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body); 
    $doctor = $data -> name;
    $start = $data -> startTime;
    $end = $data -> endTime;
    $date = $data -> date;
    $special = $data -> specialisation; 


    if($data === !''){
        echo 'there is no data';
    } else{
        $sql = "INSERT INTO AvailableAppointments(id, DoctorName, Date, TimeStart, TimeEnd, Speciality) VALUES (NULL,'$doctor','$date',' $start','$end ','$special');";
        $result = mysqli_query($connection, $sql);

        if(!$result){
            echo "error" .(mysqli_error($connection));
        } else{
            echo "true";
        }
    }
    
?>