<?php

// if($_SERVER['REQUEST_METHOD'] != 'POST'){
//     exit;
// }
    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $id = $data-> id; 
    $name = $data->userName;
    $surname = $data -> surn;
    $birthday = $data -> birthday;
    $gender = $data -> gen;
    $cell = $data -> cell; 
    $mail = $data -> mail;
    $password = $data->password;
    $specialisation = $data->specialisation;
    $Room = $data->dRoom;
    $consultFee = $data->consult;
    $image = $data->img;

    $doctorSql = "SELECT * FROM Doctors WHERE email='$mail'; ";
    $emailResult = mysqli_query($connection, $doctorSql);
    $resultChecker = mysqli_num_rows($emailResult);

    if($resultChecker > 0){
        echo "false";
    } else{
        $sql = "INSERT INTO `Doctors`(`profileImage`, `name`, `surname`, `dateOfBirth`, `gender`, `phoneNumber`, `email`, `password`, `specialisation`, `room`, `consultFee`) 
        VALUES (NULL,'$name','$surname','$birthday','$gender','$cell','$mail','$password','$specialisation','$Room','$consultFee')";
        $result = mysqli_query($connection, $sql);

        if(!$result){
            echo ("Error Description: " . mysqli_error($connection));
        } else {
            echo ("Doctor has been added to the database");
        }
      
    }
    
?>