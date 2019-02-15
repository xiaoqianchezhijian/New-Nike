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
     $qrpassword = @$_POST["qrpassword"];

     
    // 查询数据库   
    $search_query = "SELECT * FROM dengluzhuce"; 

    $res = mysql_query($search_query);

    $json_array = array();
    while($row = mysql_fetch_array($res)){
        // array_push($json_array,$row);
         if($username == $row["username"]){
            die('{"stateCode":"用户名重复"}');
         }
    }
    $json_array = json_encode($json_array);

    echo $json_array;

    $inster_query = "INSERT INTO dengluzhuce ( username, password ,qrpassword)
                        VALUES('$username','$password' , '$qrpassword')
                    ";     
    $shiye_res = mysql_query($inster_query);
    if($shiye_res){
            die('{"state":"sucess","errortype":"null"}');
    }else{
        die('{"state":"error","errortype":"数据库插入失败"}');
    }
    if($username == "" || $password == ""){
        return false;
    }else{
    // 执行sql语句的方法;
        mysql_query($inster_query);
    }
    


    // 关闭数据库的链接;
    mysql_close($con);
    ?>





















?>