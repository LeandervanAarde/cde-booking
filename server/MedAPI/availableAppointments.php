<?php
    include 'db_connection.php';

    header('Access-Control-Origin: *');
    header('Access-Control-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $date = $data;
  
    if($data === ""){
        echo "";
    } else{
         $sql = "SELECT * FROM AvailableAppointments WHERE Date='$date';";

         $result = mysqli_query($connection, $sql);
         $resultCheck = mysqli_num_rows($result);
         
         if($resultCheck > 0){
             $emparray = array();

             while($row = mysqli_fetch_assoc($result)){
                 $emparray[] = $row;
             }
             echo json_encode($emparray);
         } else{
             echo 'false';
         }
    }
    
?>