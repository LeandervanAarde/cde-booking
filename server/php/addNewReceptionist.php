<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}
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
    $rank = $data->rank;
    $status = $data->status;
    $income = $data->income;
    $image = $data->img;

    $recepSql = "SELECT * FROM Receptionists WHERE email='$mail'; ";
    $emailResult = mysqli_query($connection, $recepSql);
    $resultChecker = mysqli_num_rows($emailResult);

    if($resultChecker > 0){
        echo "false";
    } else{
        $sql = "INSERT INTO Receptionists (ProfileImage, name, surname, dateOfBirth, gender, phoneNumber, email, password, rank, Status, monthInc)
         VALUES (NULL,'$name','$surname','$birthday','$gender','$cell','$mail','$password','$rank','$status','$income')";
        $result = mysqli_query($connection, $sql);
        if(!$result){
            echo ("Error Description: " . mysqli_error($connection));
        } else {
            echo ("Doctor has been added to the database");
        }
      
    }
    
?>