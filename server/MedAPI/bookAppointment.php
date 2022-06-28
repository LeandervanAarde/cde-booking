<?php

    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }
       
    include 'db_connection.php'; 

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $patient = $data->patientId;
    $appoint = $data->appointId;
    $sql = "SELECT * FROM Patients WHERE id='$patient';";
    $sqltwo = "SELECT * FROM AvailableAppointments WHERE id='$appoint';";

    $result = mysqli_query($connection, $sql);
    $result2 = mysqli_query($connection, $sqltwo);


    $row = $result->fetch_assoc();
        $patienName = $row["name"] ." ". $row["surname"];
        $patientEm = $row["email"];
        $patientCell = $row["phoneNumber"];

 

    $row2 = $result2->fetch_all();
        $DoctorFull = $row2[0][1];
        $Doctor = explode("", $DoctorFull);
        $DoctorFirst= $Doctor[0];
        $DoctorLast= $Doctor[1];
        if(count($Doctor) == 3){
            $DoctorLast .= " ". $Doctor[2];
        }
        $timeStart = $row2[0][3];
        $timeEnd = $row2[0][4];
        $appointType = $row2[0][5];
        $date = $row2[0][2];
    
    $DocApp = "SELECT * FROM Doctors WHERE 'name'='$DoctorFirst' AND surname='$DoctorLast';";
    $result3 = mysqli_query($connection, $DocApp);
    $row3 = $result3->fetch_all();
        $profileImage = $row3["profileImage"];
    echo var_dump($row3);
    $insert = "INSERT INTO BookedAppointments(Patient, Doctor, timeStart, timeEnd, appointType, patientEmail, patientCell, Date, DoctorImage) VALUES ('$patienName','$DoctorFull','$timeStart','$timeEnd','$appointType','$patientEm','$patientCell','$date ','$profileImage');";
    $delete = "DELETE FROM AvailableAppointments WHERE id='$appoint';";


    $finalResult = mysqli_query($connection, $insert);
    $deleteResult = mysqli_query($connection, $delete); 

    if($finalResult && $deleteResult){
        echo "True";
    } else{
        echo "error". (mysqli_error($connection));
    }
    

?>