<?php
    $url='localhost';
    $username='root';
    $password='ducanh113';
    $conn=mysqli_connect($url,$username,$password,'foodnote');
    if(!$conn){
        die('Could not Connect My Sql:' .mysqli_connect_error());
    }
?>