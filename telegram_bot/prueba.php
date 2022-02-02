<?php

function getSslPage($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_REFERER, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}


$utf8emoji = '';

$chatid = "-1001655648650";
$mensaje = "🥵😏";
echo $mensaje;

$response = file_get_contents("https://api.telegram.org/bot1945749109:AAEJ-ld4yqCkoC4A4yirM7vVWpOz-SGs4to/sendMessage?chat_id=".$chatid."&text=".$mensaje);

$response = file_get_contents("https://api.telegram.org/bot1945749109:AAEJ-ld4yqCkoC4A4yirM7vVWpOz-SGs4to/getUpdates");
echo ($response);

?>