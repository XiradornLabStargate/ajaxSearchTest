<?php
/**
 * Engine from ajax request
 */

$xhr = strtolower($_REQUEST['city']);

$city_ary = [
    'roma'      => 'Paiata',
    'milano'    => 'Ossobuco',
    'napoli'    => 'Babbà'
];

$echo = (array_key_exists($xhr, $city_ary)) ? $city_ary[$xhr] : "Non ho Trovato nulla mi spiace";
echo $echo;
