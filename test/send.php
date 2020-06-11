<?php

$connection = mysqli_connect('adhamkhalifa.com', 'adhairog_patient', 'Patient334$');

if(!$connection)
{
  echo 'Error connecting to database';
}

if(!mysqli_select_db($connection, 'adhairog_patient'))
{
  echo 'Database Not selected';
}

$FullName = $_POST['FullName'];
$Gender   = $_POST['Gender'];
$Age      = $_POST['Age'];
$StreetAddress = $_POST['StreetAddress'];
$City = $_POST['City'];
$State = $_POST['State'];
$BloodType = $_POST['BloodType'];
$Phone = $_POST['Phone'];
$DiagnosisDate = $_POST['DiagnosisDate'];
$QuarantinePlace = $_POST['QuarantinePlace'];
$SwabResult = $_POST['SwabResult'];
$Diseases = $_POST['Diseases'];


$sql = "INSERT INTO information (FullName, Gender, Age, StreetAddress, City, State, BloodType, Phone, DiagnosisDate, QuarantinePlace, SwabResult, Diseases) VALUES ('$FullName','$Gender','$Age','$StreetAddress','$City','$State','$BloodType','$Phone','$DiagnosisDate','$QuarantinePlace','$SwabResult','$Diseases')";

if(!mysqli_query($connection, $sql))
{
  echo "Not inserted";
}
else {
  echo "Inserted";
}

header("refresh:2;url=index1.html")

 ?>
