<?php
include 'db_connection.php';

header('Access-Control-Origin: *');
header('Access-Control-Headers: *');

$request_body = file_get_contents('php://input');

$username = str_replace("\n\r", "", $request_body);
$data = json_decode($username, true);

$email = $data['email'];

if($data === ""){
    echo "No user";
} else {
    $sql = "SELECT * FROM Receptionists WHERE email= '$email';";
    $result = mysqli_query($connection, $sql);
    $resultCheck = mysqli_num_rows($result);

    if($resultCheck > 0){

        $emparray = array();

        while($row = mysqli_fetch_assoc($result)){
            $emparray[] = $row;
        }
        echo (json_encode($emparray));
    } else {
        echo "false";
    }
}
?>