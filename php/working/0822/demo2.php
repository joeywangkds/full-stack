<?php

namespace _0822;

// 服务器端会话

// 1. 启动会话
session_start();

/**
 * 启动会话做了二件事
 * 1. 浏览器: 创建会话ID: PHPSESSID, 一串md5加密的字符串
 * 2. 服务器: 创建与浏览器会话ID对应的会话文件,一个会话文件对应一个用户
 */

// 1. 设置
$_SESSION['email'] = 'admin@php.cn';
$_SESSION['password'] = sha1(md5('123456'). 'php.cn123');

// 2. 更新
$_SESSION['email'] = 'peter@php.cn';

// 3. 删除
// unset($_SESSION['email'] );
// unset($_SESSION['password'] );
session_unset();

// 4. 删除服务器上的会话文件
session_destroy();
