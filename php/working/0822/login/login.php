<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>用户登录</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
    <h3>用户登录</h3>
    <form action="handle.php?action=login" method="post">
        <div>
            <label for="email">邮箱:</label>
            <input type="email" name="email" id="email" placeholder="demo@email.com" required autofocus>
        </div>

        <div>
            <label for="password">密码:</label>
            <input type="password" name="password" id="password" placeholder="不少于6位" required>
        </div>

        <div>
            <button>提交</button>
        </div>
    </form>
    <a href="register.php">还没有帐号, 注册一个吧</a>
</body>

</html>
