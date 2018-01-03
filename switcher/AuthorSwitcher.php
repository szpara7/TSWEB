<?php
require_once('../controller/AuthorController.php');
 require_once('../model/Author.php');
 $controller = new AuthorController();
 $model = new Author();
 $czas = new DateTime();
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
     //$model = json_decode($_POST['obj'], false); //to raczej nie bedzie dzialalo
    //  $model->first_name = 'IMIE';
    //  $model->last_name = 'NAZIWKSO';
    //  $model->description = "DESSSC";
    //  $model->nationality = 'POLISG';

    $model->first_name = json_decode($_POST['first_name'], false);
      $model->last_name = json_decode($_POST['last_name'], false);
      $model->description = json_decode($_POST['description'], false);
      $model->nationality = json_decode($_POST['nationality'], false);
      $model->date_birth = $czas->getTimestamp();
     $controller->Add($model);    
     break;
 
     case 'Update':
     $model = json_decode($_POST['obj'], false);
     $controller->Update($model);
     break;
 
     case 'Delete':
     $id = json_decode($_GET['id'], false);
     $controller->Delete($id);
     $controller->GetAll();
     break;
 }

 ?>