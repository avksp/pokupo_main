<?php

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Expose-Headers: *');

$content = '';
if($_GET['widgets']){
    $widgets = explode(',', $_GET['widgets']);
    $theme = $_GET['theme'];
    $color = $_GET['color'];

    if(in_array('all', $widgets))
        $content .= getAll($theme, $color);
    else {
        foreach ($widgets as $one) {
            if ($one == 'content') {
                $content .= getTmpl($theme, $color, 'block');
                $content .= getTmpl($theme, $color, 'content');
            } elseif ($one == 'searchResult') {
                $content .= getTmpl($theme, $color, 'advancedSearchForm');
                $content .= getTmpl($theme, $color, 'searchResult');
            } else {
                $content .= getTmpl($theme, $color, $one);
            }
        }

        if (in_array(array('cabinetCartGoods', 'favorites', 'message', 'orderList', 'profile'), $widgets))
            $content .= getTmpl($theme, $color, 'menuPersonalCabinet');
    }
}

echo $content;

function getTmpl($theme, $color, $tmplName){
    $content = '';
    $tmpl = __DIR__ . '/' . $theme . '/' . $color . '/tmpl/' . $tmplName . 'Tmpl.html';
    if (!file_exists($tmpl)) {
        $tmpl = __DIR__ . '/' . $theme . '/default/tmpl/' . $tmplName . 'Tmpl.html';
        if (!file_exists($tmpl))
            $tmpl = __DIR__ . '/default/default/tmpl/' . $tmplName . 'Tmpl.html';
    }

    if (file_exists($tmpl))
        $content = file_get_contents($tmpl);

    return $content;
}

function getAll($theme, $color){
    $content = '';
    if(file_exists(__DIR__ . '/' . $theme . '/' . $color . '/tmpl/'))
        $dir = __DIR__ . '/' . $theme . '/' . $color . '/tmpl/';
    else if(file_exists(__DIR__ . '/' . $theme . '/default/tmpl/'))
        $dir = __DIR__ . '/' . $theme . '/default/tmpl/';
    else
        $dir = __DIR__ . '/default/default/tmpl/';

    $files = scandir($dir);
    foreach($files as $one){
        if(preg_match('/.html$/', $one))
            $content .= file_get_contents($dir . $one);
    }

    return $content;
}

