<?php

require_once './dal/Database.php';
require_once './model/Author.php';
require_once './services/AuthorService.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$m = new AuthorService();

echo json_encode($m->GetById(1));
 

// $model->date_birth = date("Y-m-d H:i:s", $czas->getTimestamp());
// $model->date_death = date("Y-m-d H:i:s", $czas->getTimestamp());

?>