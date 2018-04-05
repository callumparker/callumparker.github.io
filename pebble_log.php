<?php
	// 2017 Callum Parker - Simple script to receive and log Pebble 2 data - See: https://github.com/faelys/pebble-health-export for details about the data structure
	file_put_contents($_POST["User"].".csv", $_POST["Health"].PHP_EOL, FILE_APPEND | LOCK_EX);
?>