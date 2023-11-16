<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>注册用户</title>
</head>

<body>
    <h3>用户注册</h3>
    <form action="handle.php?action=register" method="post" onsubmit="return compare()">
        <div>
            <label for="name">呢称:</label>
            <input type="text" name="name" id="name" placeholder="不少于3个字符" required autofocus>
        </div>
        <div>
            <label for="email">邮箱:</label>
            <input type="email" name="email" id="email" placeholder="demo@email.com" required>
        </div>

        <div>
            <label for="p1">密码:</label>
            <input type="password" name="p1" id="p1" placeholder="不少于6位" required>
        </div>

        <div>
            <label for="p2">重复:</label>
            <input type="password" name="p2" id="p2" placeholder="必须与上面一致" required>
        </div>

        <div>
            <button>提交</button><span id="tips" style="color: red"></span>
        </div>
    </form>
    <a href="login.php">我有帐号,直接登录</a>

    <script>
        // 验证二次密码是否相等?
        function compare() {
            if (document.forms[0].p1.value.trim() !== document.forms[0].p2.value.trim()) {
                document.querySelector('#tips').innerText = '二次密码不相等';
                return false;
            }
        }
    </script>
</body>

</html>
