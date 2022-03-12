<?php
header('Content-Type:text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="true" ?>';
echo '<response>';
	$brand=$_GET['brand'];
	$brandsarray= array('wrogn','puma','allen solly','hrx');
	if(in_array($brand,$brandarray))
		echo 'we do have ' . $brand . ' ! lets try this';
	elseif($brand=='')
		echo 'enter a brand  name loser!!!!!';
	else
		echo 'sorryyyy!!!!!!!!!';
echo'</response>';
?>