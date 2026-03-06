<?php
echo "<h2>📦 سفارش‌ها</h2>";

if(file_exists("orders.txt")){
echo nl2br(file_get_contents("orders.txt"));
}else{
echo "هنوز سفارشی ثبت نشده";
}
?>
