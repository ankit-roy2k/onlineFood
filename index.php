<?php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'onlinefood';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $con = mysqli_connect($host, $user, $pass, $dbname);

    if (isset($_POST['login'])){
        $error='error';
        $json_array=array();
        $email=$_POST['email'];
        $email=strip_tags($email);
        $email=mysqli_real_escape_string($con , $email);

        $password= $_POST['password'];

        $sql="SELECT * FROM `users` WHERE `email`='$email'";
        $result=mysqli_query($con , $sql);
        $row=mysqli_num_rows($result);
        if($row==1){
            $row=mysqli_fetch_array($result);
            $hashPassword= $row['password'];
            if(password_verify($password , $hashPassword)){
                $error='success';
                $json_array += array("email" => $row['email']);
                $json_array += array("name" => $row['name']);
            }
        }
        $json_array+= array("status" => $error);
        echo json_encode($json_array);
    }

    if (isset($_POST['signup'])){
        $error='error';
        $json_array=array();
        $email=$_POST['email'];
        $email=strip_tags($email);
        $email=mysqli_real_escape_string($con , $email);

        $name=$_POST['name'];
        $name=strip_tags($name);
        $name=mysqli_real_escape_string($con , $name);

        $password= $_POST['password'];

        $password=password_hash($password , PASSWORD_BCRYPT);

        $check = "SELECT * FROM `users` WHERE `email` = '$email'";
        $sql = "INSERT INTO `users`(`email`, `name`, `password`) VALUES ('$email', '$name', '$password')";

        $x = mysqli_query($con , $check);
        $x = mysqli_num_rows($x);
        if($x==0){
            if(mysqli_query($con , $sql)){
                $error="success";
            }
        }
        $json_array += array("status" => $error);
        echo json_encode($json_array);
    }

    if (isset($_GET['fetch'])){
        $json_array=array();
        $sql= "SELECT * FROM `menu`";
        $result= mysqli_query($con,$sql);
        while ($row = mysqli_fetch_assoc($result)) {
            $json_array[] = $row;
        }
        echo json_encode($json_array);
    }

?>