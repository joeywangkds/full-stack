<?php
if($_SERVER["REQUEST_METHOD"]=='POST'){
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $message = htmlspecialchars($_POST['message']);
    if(empty($firstname)){
        exit();
        header("Location: ../index.php");
    }
    echo $firstname;
    header("Location: ../index.php");
}else{
    header("Location: ../index.php");
}