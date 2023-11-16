<?php

namespace _0822;

// 客户端cookie

// 1 设置
// setcookie('site', 'php中文网');
setrawcookie('site', 'php中文网');


// 2. 查看
echo $_COOKIE['site'] ?? '未定义site<br>' .'<hr';

// 3. 设置多个
setcookie('user[name]', 'admin');
setcookie('user[email]', 'admin@qq.com');
setcookie('user[age]', 40);

if (isset($_COOKIE['user'])) {
    foreach ($_COOKIE['user'] as $key=>$value) {
        printf('[%s] => %s<br>', $key, $value);
    }
} else {
    echo '未定义user';
}


// 4. 删除
// 给一个已过期的时间就可以了
setcookie('welcome', null, time()-3600);

/**
 * 将过多信息存储在客户端,并不适合
 * 1. 数量受限: 30个
 * 2. 空间受限: 4k
 * 3. 安全隐患: 天生不可避免
 *
 * 所以, 会话信息推荐存储在服务器端
 * 客户端只需要保存一个会话ID,用于标识访问身份即可
 */
