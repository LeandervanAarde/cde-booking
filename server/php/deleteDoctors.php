<?php
    if($_SERVER['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $docId = $data; 
    $sql = "DELETE FROM Doctors WHERE id = ' $docId';";
    $result = mysqli_query($connection, $sql);

    if(!$result){
        echo ("Err desc: ". mysqli_error($connection));
    } else{
        echo "Doctors has been deleted";
    }
?>