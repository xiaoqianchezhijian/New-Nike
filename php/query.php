<?php
    header("Content-Type: text/html;charset=utf-8");

    $con = mysql_connect("localhost","root","root");

    if(!$con){
        die('{"state":"error","errorType":"数据库错误","stateCode":"3"}');
    }
    mysql_select_db("mylist",$con);

?>