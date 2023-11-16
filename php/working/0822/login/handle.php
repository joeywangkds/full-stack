<?php

namespace _0822;

use PDO;

// 开启会话:必须写在顶部
session_start();

//查询用户表中的数据use表
$db = new PDO('mysql:dbname=phpedu', 'root', 'root');

$sql = <<<SQL
SELECT * FROM `user`;
SQL;

$stmt = $db->prepare($sql);
if ($stmt->execute()) {
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // print_r( $users);
} else {
    print_r($stmt->errorInfo());
}



// 获取用户操作类型
$action = strtolower($_GET['action']);

switch ($action) {
    // 1. 登录
    case 'login':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // 获取登录用户的数据:邮箱和密码
            $email= $_POST['email'];
            $password= md5($_POST['password']);
            $result = array_filter($users, function ($user) use ($email, $password) {
                return $user['email'] === $email && $user['password'] === $password;
            });

            // printf('<pre>%s</pre>',print_r($result,true));

            // $newArray = array_pop($result);

            // printf('<pre>%s</pre>',print_r($result,true));

            if (count($result) === 1) {
                // 登录成功,写入session
                $_SESSION['user'] = serialize(array_pop($result));
                // printf('<pre>%s</pre>',print_r($_SESSION['user'],true));
                // exit('<script>alert("验证通过");location.href="index.php"</script>');
            }
            // echo '请求类型错误'; die;
            // break;
            exit('请求类型错误');
        }


        // 2. 退出
        // no break
    case 'logout':
        if (isset($_SESSION['user'])) {
            session_destroy();
            exit('<script>alert("退出成功");location.href="index.php"</script>');
        }


        // . 注册
        // no break
    case 'register':

        // 1. 获取新用户的数据
        $email= $_POST['email'];
        $name= $_POST['name'];
        $password= sha1($_POST['p2']);
        $register_time = time();

        // 2. sql
        $sql = <<< SQL
                INSERT `user`
                SET `name`= ?,
                    `email`= ?,
                    `password`= ?,
                    `register_time`= ?;
        SQL;


        $stmt = $db->prepare($sql);
        $data = [$name,$email,$password, $register_time];
        if ($stmt->execute($data)) {
            if ($stmt->rowCount() > 0) {
                // 注册成功之后,让用户自动登录
                $sql='SELECT * FROM `user` WHERE `id` = ' . $db->lastInsertId();
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $newUser =$stmt->fetch(PDO::FETCH_ASSOC);
                $_SESSION['user'] = serialize($newUser);

                exit('<script>alert("注册成功");location.href="index.php"</script>');
            } else {
                exit('<script>alert("注册失败");location.href="register.php"</script>');
            }
        } else {
            print_r($stmt->errorInfo());
        }

        // no break
    default:
        exit('参数非法或未定义操作');
}
