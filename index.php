<?php include_once('./functions.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->
    <title>Frontend Mentor | Manage landing page</title>

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">

    <!-- Font include -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="./assets/styles/main.css">

</head>
<body>
    <?php include('./components/navigation.php') ?>
    <?php include('./components/header.php') ?>
    <?php include('./components/about-us.php') ?>
    <?php include('./components/testimonials.php') ?>
    <?php include('./components/call-to-action.php') ?>
    <?php include('./components/footer.php') ?>

    <script src="./assets/scripts/main.js"></script>
</body>
</html>