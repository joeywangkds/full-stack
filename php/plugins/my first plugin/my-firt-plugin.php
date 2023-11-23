<?php
/*
Plugin Name: My Custom Plugin
Description: This is a simple custom WordPress plugin.
Version: 1.0
Author: Your Name
*/

// 在这里添加您的插件功能

function my_custom_function() {
    // 在这里添加您的插件功能的实际代码
    echo '<p>Hello from My Custom Plugin!</p>';
}

// 将函数挂钩到WordPress的init动作上
add_action('init', 'my_custom_function');