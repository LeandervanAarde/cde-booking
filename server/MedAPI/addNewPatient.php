<?php

// if($_SERVER['REQUEST_METHOD'] != 'POST'){
//     exit;
// }
    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body); 
    $name = $data->userName;
    $surname = $data -> surn;
    $birthday = $data -> birthday;
    $gender = $data -> gen;
    $cell = $data -> cell; 
    $mail = $data -> mail;
    $mANr = $data -> medicalAid;
    $cond = $data -> condition; 

    $sqlPat = "SELECT * FROM Patients WHERE name='$name' AND surname='$surname' AND email='$mail'; ";
    $emailResult = mysqli_query($connection, $sqlPat);
    $resultChecker = mysqli_num_rows($emailResult);

    if($resultChecker > 0){
        echo "false";
    } else{
        $sql = "INSERT INTO Patients (profileImage, name, surname, dateOfBirth, gender, phoneNumber, email, medicalAidNr, prevAppoint, medCondition, prevAppointmentDr, prevHba1c, feesOut) 
        VALUES (NULL ,'$name','$surname','$birthday','$gender','$cell','$mail','$mANr','None','$cond ', ' ',0, 0);";
        $result = mysqli_query($connection, $sql);

        if(!$result){
            echo ("Error Description: " . mysqli_error($connection));
        } else {
            echo ("All is Goood! Added user");
        }
      
    }
    
?>