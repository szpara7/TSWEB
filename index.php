<?php

require_once './controller/Home.php';
require_once './dal/Database.php';
require_once './model/Author.php';
require_once './services/AuthorService.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once('./services/GenreService.php');
require_once('./model/Genre.php');

$genre = new GenreService();
$model = new Genre();

$model->name="Pierwszy";
//$genre->Add($model);
$data = $genre->GetAll();


$js = json_encode($data);
echo $js;
$model->id = 2;
$model->name = "PierwszyUpdate";
//$genre->Update($model);

$genre->Delete(2);

// $model->date_birth = date("Y-m-d H:i:s", $czas->getTimestamp());
// $model->date_death = date("Y-m-d H:i:s", $czas->getTimestamp());
