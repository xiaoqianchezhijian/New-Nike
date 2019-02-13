<?php
    require("./query.php");
    header("Content-Type: text/html;charset=utf-8");
    // 指定允许其他域名访问
    header('Access-Control-Allow-Origin:*');
    // 响应类型
    header('Access-Control-Allow-Methods:POST');
    // 响应头设置
    header('Access-Control-Allow-Headers:x-requested-with,content-type');

    // 往数据库添加内容
    $username = @$_POST["username"];
    $password = @$_POST["password"];
    // $password2 = @$_POST["password2"];
    // $id = @$_POST["id"];

    // mysql_query("DELETE FROM errors WHERE id=$id");

    $inster_query = "INSERT INTO dengluzhuce ( username, password)
                     VALUES
                    ('$username','$password')
                    ";     

    // 查询数据库   
    $search_query = "SELECT * FROM dengluzhuce"; 

    $res = mysql_query($search_query);

    $json_array = array();
    while($row = mysql_fetch_array($res)){
        array_push($json_array,$row);
        if($username == $row["username"]){
            if($password == $row["password"]){
                die('{"stateCode":"登录成功"}');
            }else{
                die('{"error":"密码错误"}');
            }
        }
       
}
    $json_array = json_encode($json_array);

    echo $json_array;
    

    if($username == "" || $password == ""){
                return false;
    }else{
            // 执行sql语句的方法;
            mysql_query($inster_query);
    }
    
        // 关闭数据库的链接;
        mysql_close($con);
?>