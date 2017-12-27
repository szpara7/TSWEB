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
require_once('./services/BookService.php');
require_once('./model/Book.php');

$genre = new BookService();
$model = new Book();
$czas = new DateTime();

$model->title="Pierwszy";
$model->description = "DESC";
$model->isbn = '123455';
$model->page_count = 132;
$model->year = date("Y-m-d H:i:s", $czas->getTimestamp());
$model->author_id = 1;
$model->genre_id = 1;
//$genre->Add($model);
$data = $genre->GetAll();


$js = json_encode($data);
echo $js;
$model->id = 2;
$model->title = "PierwszyUpdate";
//$genre->Update($model);

$genre->Delete(2);

// $model->date_birth = date("Y-m-d H:i:s", $czas->getTimestamp());
// $model->date_death = date("Y-m-d H:i:s", $czas->getTimestamp());
