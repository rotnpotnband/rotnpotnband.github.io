<?php

print "&writing=";

$DataDir = $_POST['dir'];
$flashblocks_password_file = $_POST['flashblocks_password_file'];
$u = $_POST['u'];
$p = $_POST['p'];

//$u = "a";
//$p = "";
//$DataDir = "flashblocks/";
//$flashblocks_settings_file = "flashblocks/settings.php";


if ($flashblocks_password_file) {
	//print("Found: $flashblocks_settings_file<br>");
	include $flashblocks_password_file; 
	if ($u == $user and $p == $pass) { 
		print "success&";
	} else { 
		print "error&"; 
	}
	
} else {
	print "flashblocks_password_file not found&";
}

?> 