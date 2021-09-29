<?php
session_start();

    include("connection.php");
    include("functions.php");

    $user_data=check_login($con);

    $_SESSION;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CPGA & SGPA Calculator</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>

</head>
<body>
    <div class="menu-bar ">
        <ul>
            <li class="active"><a href="#">Home</a></li>
            <li ><a href="#" target="_blank">SGPA </a>
                <div class="submenu1">
                    <ul>
                        <li><a href="sem1.html">Sem1</a></li>
                        <li><a href="sem2.html">Sem2</a></li>
                        <li><a href="sem3.html">Sem3</a></li>
                        <li><a href="sem4.html">Sem4</a></li>
                        <li><a href="sem5.html">Sem5</a></li>
                        <li><a href="sem6.html">Sem6</a></li>
                        <li><a href="sem7.html">Sem7</a></li>
                        <li><a href="sem8.html">Sem8</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="cgpa.html" target="_blank">CGPA</a></li>
        </ul>
    </div>
    <div class="banner">
        <div class="text">
            <h1>Hello, <?php echo $user_data['user_name'];?><br>
            <h1>Calculate your SGPA and CGPA</h1>
            <p>Calculate your SGPA and CGPA from your marks,<br> select your semester and quicky calculate the sgpa</p><br>
            <a href="logout.php"><h2>LOGOUT</h2></a>
        </div>
    </div>
        <div class="rightside">
            <ul class="list">
                <li><a href="sem1.html"><h2>Sem1</h2></a></li>
                <li><a href="sem2.html"><h2>Sem2</h2></a></li>
                <li><a href="sem3.html"><h2>Sem3</h2></a></li>
                <li><a href="sem4.html"><h2>Sem4</h2></a></li>
                <li><a href="sem5.html"><h2>Sem5</h2></a></li>
                <li><a href="sem6.html"><h2>Sem6</h2></a></li>
                <li><a href="sem6.html"><h2>Sem7</h2></a></li>
                <li><a href="sem8.html"><h2>Sem8</h2></a></li>
            </ul>
       </div>

        
    
</body>
</html>