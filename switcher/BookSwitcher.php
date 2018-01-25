<?php
require_once('../controller/BookController.php');
require_once('../model/Book.php');
 $controller = new BookController();
 $model = new Book();
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
     $model->title = $_POST['title'];
     $model->isbn = $_POST['isbn'];
     $model->page_count = $_POST['page_count'];
     $model->year = $_POST['year'];
     $model->author_id = $_POST['author_id'];
     $model->genre_id = $_POST['genre_id'];
     $model->description = $_POST['description'];
     
     $controller->Add($model);
     $controller->GetAll();
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