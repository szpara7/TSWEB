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
     $model->name = $_POST['name'];
     $controller->Add($model);
     $controller->GetAll();
     break;
 
     case 'Update':
     $model->id = $_POST['id'];
     $model->name = $_POST['name'];
     $controller->Update($model);
     $controller->GetAll();
     break;
 
     case 'Delete':
     $id = json_decode($_GET['id'], false);
     $controller->Delete($id);
     $controller->GetAll();
     break;
 }

 ?>