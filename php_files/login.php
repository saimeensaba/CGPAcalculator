<?php
session_start();

include("connection.php");
include("functions.php");

if($_SERVER['REQUEST_METHOD']== "POST")
{
    //something was posted
    $user_name=$_POST['user_name'];
    $password=$_POST['password'];

    if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
    {
        
        $query="select * from users where user_name = '$user_name' limit 1";
        
        $result = mysqli_query($con, $query);

        if($result)
        {
            if($result && mysqli_num_rows($result)>0)
            {
                $user_data = mysqli_fetch_assoc($result);
                
                if($user_data['password'] === $password)
                {
                    $_SESSION['user_id'] = $user_data['user_id'];
                    header("Location: index.php");
                    die;
                }

            }
        }
        
        echo "wrong username or password";
    }else
    {
        echo "wrong username or password";
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <style type="text/css">
        body{
                background-image:url('background.jpg');
                background-size:cover;
                font-family: Bahnschrift SemiBold;
                align-items:center;
                flex-direction:column;
            }
            text{
                height:25px;
                border-radius:5px;
                padding:4px;
                border: solid thin #aaa;
                width:100%;
            }
            button{
                padding:10px;
                width:100px;
                color:white;
                
                border:none;
            }
            #box{
                padding:20px;
                width:300px;
                margin:auto;
                color:white;
                
            }
            #box a{
                text-decoration: none;
                text-align: center;
                padding: 11px 13px;
                color: #fff;
                border: none;
            } 
            h1{
                font-weight:x-large;
                margin:10px;
                color: white;
                text-align:center;
            }
            form{
                width: 270px;
                border:2px solid white;
                padding:30px;
                margin:10px auto;
                border-radius: 3px;
            }
            input{
                display: block;
                border: 2px solid white;
                width: 80%;
                padding: 7px;
                margin: 2px auto;
                border-radius: 5px;;
            }
            label{
                color: white;
	            font-size: 18px;
	            padding: 10px;
            }
            
            
            #submit{
                background: rgb(77, 179, 77);
	            padding: 10px 15px;
	            color: #fff;
	            border-radius: 5px;
	            border: none;
	            text-decoration: none;
                text-align:center;
                justify-content:center;
            }
            #submit:hover{
            	opacity: .7;
            }
            
        </style>
        <div id="box">
            <h1>LOGIN</h1>
            <form method="post">
                
                    <label>Enter Username :</label><br><input id="text" type="text" name="user_name" placeholder="enter name"><br>
                    <label>Enter Your Password :</label><input id="text" type="password" name="password" placeholder="enter password"><br>
                    <input id="submit" type="submit" value="Submit"><br>
                    <a href="signup.php">Don't have an account? Click here</a>
                
            </form>
        </div>
    </body>
</html>