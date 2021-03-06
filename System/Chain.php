<?php

require ROOT.'/App/Config/Settings.php';

function auto_loader($class){
	$parts = explode('\\', $class);

	array_walk($parts, function($v){
		return ucfirst($v);
	});

	$path = ROOT.DS.implode( DS, $parts).'.php';
	if(file_exists($path)){
		require( $path );
		if(!class_exists($class)){
			header('HTTP/1.1 500 Internal Server Error');
			die('<!Doctype html><html><head><title>500 : Internal Server Error</title></head><body><h1 style="color:red">500 : Internal Server Error</h1></body></html>');
		}
	}else{
		header('HTTP/1.1 500 Internal Server Error');
		die('<!Doctype html><html><head><title>500 : Internal Server Error</title></head><body><h1 style="color:red">500 : Internal Server Error</h1></body></html>');
	}
}

if ( ! function_exists('is_cli'))
{
	/**
	 * Is CLI?
	 *
	 * Test to see if a request was made from the command line.
	 *
	 * @return 	bool
	 */
	function is_cli()
	{
		return (PHP_SAPI === 'cli' OR defined('STDIN'));
	}
}


if ( ! function_exists('remove_invisible_characters'))
{
	/**
	 * Remove Invisible Characters
	 *
	 * This prevents sandwiching null characters
	 * between ascii characters, like Java\0script.
	 *
	 * @param	string
	 * @param	bool
	 * @return	string
	 */
	function remove_invisible_characters($str, $url_encoded = TRUE)
	{
		$non_displayables = array();

		// every control character except newline (dec 10),
		// carriage return (dec 13) and horizontal tab (dec 09)
		if ($url_encoded)
		{
			$non_displayables[] = '/%0[0-8bcef]/i';	// url encoded 00-08, 11, 12, 14, 15
			$non_displayables[] = '/%1[0-9a-f]/i';	// url encoded 16-31
			$non_displayables[] = '/%7f/i';	// url encoded 127
		}

		$non_displayables[] = '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/S';	// 00-08, 11, 12, 14-31, 127

		do
		{
			$str = preg_replace($non_displayables, '', $str, -1, $count);
		}
		while ($count);

		return $str;
	}
}
// error_reporting(-1);
// ini_set('display_errors', 'On');
// set_error_handler("var_dump");
spl_autoload_register('auto_loader');

$req = new System\Request($path);
$req?->getmainurl();
$sessions = new System\Session($session);
$req?->setSession($sessions);
$core = new System\Core($req);
$core?->bootstrap($route, $autoload, $database);