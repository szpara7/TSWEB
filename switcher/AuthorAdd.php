<?php

require_once('../controller/AuthorController.php');
 require_once('../model/Author.php');
 $controller = new AuthorController();
 $model = new Author();
 $czas = new DateTime();

    $model->first_name = $_POST['first_name'];
      $model->last_name = $_POST['last_name'];
      $model->description = $_POST['description'];
      $model->nationality = $_POST['nationality'];
      $model->date_birth = $czas->getTimestamp();
    //  $controller->Add($model);    
    echo $model->first_name;

?>