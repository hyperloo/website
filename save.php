<?php

session_start();

$id = 0;
$name = "";
$message = "";
$edit_state = false;


$db = mysqli_connect('localhost', 'root', '', 'comment');


if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $message = $_POST['message'];

    $query = "INSERT INTO comment ( name, message) VALUES ('$name', '$message')";
    mysqli_query($db, $query);
    $_SESSION['msg'] = "Information Added Successfully";
    header('location: index.php'); //redirecting to index page after insertion
}
