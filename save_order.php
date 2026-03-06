<?php

$admin_password = "1234";

$name = $_POST["name"];
$phone = $_POST["phone"];
$desc = $_POST["desc"];
$password = $_POST["password"];
$price = $_POST["price"]; // ✅ قیمت اضافه شد

if($password != $admin_password){
die("❌ رمز اشتباه است");
}

// ✅ شماره سفارش خودکار
$order_id = rand(1000,9999);

// ✅ تاریخ و ساعت
$date = date("Y-m-d H:i:s");

// ✅ ساخت متن ذخیره
$data = "📦 سفارش شماره: $order_id\n";
$data .= "👤 نام: $name\n";
$data .= "📞 شماره: $phone\n";
$data .= "💰 قیمت: $price افغانی\n";
$data .= "📝 توضیحات: $desc\n";
$data .= "⏰ تاریخ: $date\n";
$data .= "--------------------------\n";

// ذخیره داخل فایل
file_put_contents("orders.txt",$data,FILE_APPEND);

echo "✅ سفارش ذخیره شد";

?>
