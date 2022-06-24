<?php

    if($_SERVER ['REQUEST_METHOD'] != 'POST'){
        exit;
    }
    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $first = $data->name;
    $last = $data->surname;
    $sql = "DELETE FROM Patients WHERE name = '$first' AND surname = '$last';";
    $result = mysqli_query($connection, $sql);

    if(!$result){
        echo ("Err desc:". mysqli_error($connection));
    }else{
        echo "Patient has been deleted";
    }
?>

<!-- GaryChiba.jpg

Gary 

Chiba

19 March 1992

Male

082 098 8923

ChibaG@CDE.com

Chib@0938G

Endocrinology

F2

800 -->