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
     $id = json_decode($_GET['id'], false);
     $controller->GetById($id);
     break;
 
     case 'Add':      
    $model->first_name = $_POST['first_name'];
      $model->last_name = $_POST['last_name'];
      $model->description = $_POST['description'];
      $model->nationality = $_POST['nationality'];
      $model->date_birth = $_POST['birth_date'];
      $model->date_death = $_POST['death_date'];
     $controller->Add($model);  
     $controller->GetAll();
     break;
 
     case 'Update':
     $model->first_name = $_POST['first_name'];
      $model->last_name = $_POST['last_name'];
      $model->description = $_POST['description'];
      $model->nationality = $_POST['nationality'];
      $model->date_birth = $_POST['birth_date'];
      $model->date_death = $_POST['death_date'];
      $model->id = $_POST['id'];

    //   $model->first_name = 'Darekk';
    //   $model->last_name = 'Czabak';
    //   $model->description = 'desc';
    //   $model->nationality = 'nationality';
    //   $model->date_birth = $czas->getTimezone();
    //   $model->date_death = $czas->getTimezone();
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