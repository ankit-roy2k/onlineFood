<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'onlinefood';

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$con = mysqli_connect($host, $user, $pass, $dbname);

if (isset($_POST['create'])) {
    $name = $_POST['name'];
    $name = strip_tags($name);
    $name = mysqli_real_escape_string($con, $name);

    $img = $_POST['img'];
    $img = strip_tags($img);
    $img = mysqli_real_escape_string($con, $img);

    $small = $_POST['small'];
    $small = strip_tags($small);
    $small = mysqli_real_escape_string($con, $small);

    $medium = $_POST['medium'];
    $medium = strip_tags($medium);
    $medium = mysqli_real_escape_string($con, $medium);

    $large = $_POST['large'];
    $large = strip_tags($large);
    $large = mysqli_real_escape_string($con, $large);

    $sql = "INSERT INTO `menu`(`foodname`, `image`, `small`, `medium`, `large`) VALUES ('$name', '$img', '$small', '$medium', '$large')";
    if (mysqli_query($con, $sql)) {
        echo 'inserted!';
    }
}
mysqli_close($con);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Food Item</title>
    <style>
    form {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 90%;
        background: teal;
        color: whitesmoke;
        margin: auto;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        padding: 1rem;
    }

    input {
        padding: 0.5rem;
        width: 80%;
        margin: 0.3rem auto;
    }

    button {
        background: dodgerblue;
        color: whitesmoke;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.5rem 1.2rem;
        border: none;
        outline: none;
        margin: 1rem auto;
    }
    </style>
</head>

<body>
    <form action="" method="POST">
        <h1>Create Food Item!</h1>
        <input type="text" name="name" placeholder="Food Name" required>
        <input type="text" name="img" placeholder="Item Image" required>
        <input type="number" name="small" placeholder="Price Small" required>
        <input type="number" name="medium" placeholder="Price Medium" required>
        <input type="number" name="large" placeholder="Price Large" required>
        <button type="submit" value="create" name="create">Create</button>
    </form>
</body>

</html>