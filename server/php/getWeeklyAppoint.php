<?php
 include 'db_connection.php';
 header('Access-Control-Origin: *');
 header('Access-Control-Headers: *');

 $request_body = file_get_contents('php://input');

 $startDate =strtotime(str_replace(" ", "-",$_GET["startWeek"]));
 $endDate =strtotime(str_replace(" ", "-",$_GET["endWeek"]));  

 $finalArr = array();
while($startDate <= $endDate){
    $date = date("d F Y", $startDate);
    $sql = "SELECT * FROM BookedAppointments WHERE Date='$date';";
    $result = mysqli_query($connection, $sql);
    $resultCheck = mysqli_num_rows($result);
    
    if($resultCheck > 0){
        // $emparray = array();

        while($row = mysqli_fetch_assoc($result)){
            $finalArr[] = $row;
        }
        // array_push($finalArr,$emparray);
    } 
    $startDate = strtotime("+1 day", $startDate);

}
    echo json_encode($finalArr);
?>