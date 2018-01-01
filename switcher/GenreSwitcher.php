<?php
require_once('../controller/GenreController.php');
 require_once('../model/Genre.php');
 $controller = new GenreController();
 $model = new Genre();
    if(empty($_GET['q'])) {
     die();
 }
 
 switch($_GET['q']) {
     case 'GetAll':
     $controller->GetAll();
     break;
 
     case 'GetById':
     $id = json_decode($_POST['id'], false);
     $controller->GetById($id);
     break;
 
     case 'Add': 
     $model = json_decode($_POST['obj'], false); //to raczej nie bedzie dzialalo
     $controller->Add($model);
     break;
 
     case 'Update':
     $model = json_decode($_POST['obj'], false);
     $controller->Update($model);
     break;
 
     case 'Delete':
     $id = json_decode($_POST['id'], false);
     $controller->Delete($id);
     break;
 }

 ?>