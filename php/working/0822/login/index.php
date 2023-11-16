<?php

namespace _0822;

session_start();

// 判断是否已登录?
if (isset($_SESSION['user'])) {
    $user = unserialize($_SESSION['user']);
}


?>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页/入口文件</title>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <nav>
        <a href="index.php">我的博客</a>

        <?php if (isset($user)) : ?>
        <span style="margin-left: 300px"><?=$user['name']?></span>
        <a id="logout">退出</a>
        <?php else: ?>
        <a href="login.php">登录</a>
        <?php endif ?>
    </nav>


    <script>
        //        为退出按钮创建事件监听器
        document.querySelector('#logout').addEventListener('click', function(event) {
            if (confirm('是否退出')) {
                // 禁用默认行为, 其实就是禁用原<a>标签的点击跳转行为,使用事件中的自定义方法处理
                event.preventDefault();
                // 跳转到退出事件处理器
                window.location.assign('handle.php?action=logout');
            }
        });
    </script>

</body>

</html>
