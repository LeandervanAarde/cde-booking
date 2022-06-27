<?php
    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $RecepId = $data; 
    $sql = "DELETE FROM Receptionists WHERE id = ' $RecepId';";
    $result = mysqli_query($connection, $sql);

    if(!$result){
        echo ("Err desc: ". mysqli_error($connection));
    } else{
        echo "Doctors has been deleted";
    }
?>