<?php
include '../module/header.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["email"]);
    $username = htmlspecialchars($_POST["username"]);

    if(empty($email)){
        header("Location: ../index.php");
        exit();
        
    }
}
$buttonText = "Click me";
header("Location: ../index.php");
?>

<body>
    <div class="container mb-3 pt-3">
        <h2><?php echo $email; ?></h2>
        <h2><?php echo $username; ?></h2>
        <button type="button" class="btn btn-primary"><?php echo $buttonText; ?></button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>