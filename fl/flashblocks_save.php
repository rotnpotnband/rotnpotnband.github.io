<?php
//Capture data from $_POST array
$theData = $_POST['theData'];
$theFile = $_POST['theFile'];
//$theData = "<h1>this +is it & so \'cool\' forth</h1>Sdfaaa";
//$theFile = "test.txt";

//if ($_POST['theUser'] == "admin" and $_POST['thePass'] == "sugar") {

		// Unicode encoding  
		//$theData = str_replace( "&" , "%26" , $theData);
		//$theData = str_replace( "\n" , "%2B" , $theData);
		//$theData = str_replace( "+" , "%0D" , $theData);
		//$theData = str_replace( "\\" , "" , $theData);
		
		//print $theData;
		
		// make backup of old data
		copy($theFile, $theFile."_bac"); 
				
		$theData = stripcslashes($theData);
		$theData = urlencode($theData);
		
		$fp = fopen($theFile, "wb");
		
		if(fwrite($fp,"flashcms=".($theData))) {
				print "writing=saved&";
		} else {
				print "writing=error&";
		}
		
		fclose($fp);
//} else {
//		print "writing=noPass&";
//}
?> 