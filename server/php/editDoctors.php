<?php
    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body);
    $doctorname = $data->docName;
    $docSurname= $data->docSurn;
    $docRoom= $data->docRoom;
    $fees = $data->fee;
    $email = $data->mail;
    $special = $data->special;
    $number = $data-> num;
    $id = $data-> id;

    $sql = "UPDATE Doctors SET name='$doctorname',phoneNumber='$number',email='$email',specialisation='$special',room='$docRoom',consultFee='$fees' WHERE id='$id';";
    $result = mysqli_query($connection, $sql);

    if(!$result){
        echo ("Err Desc:". mysqli_error($connection));
    } else{
        echo 'True'; 
    }
?>