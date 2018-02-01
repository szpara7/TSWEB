<?php

require_once('./services/GenreService.php');
require_once('./model/Genre.php');

class GenreApiController {

    public function GetAll() 
    {
        $service = new GenreService();
        $data = $service->GetAll();
        $service->Disconnect();
        echo json_encode($data);
    }

    public function GetById($id)
    {
        $service = new GenreService();
        $data = $service->GetById($id);
        $service->Disconnect();
        echo json_encode($data);
    }

    public function Add()
    {
        $service = new GenreService();
        $model = new Genre();
        $model->name = $_POST['name'];
        $service->Add($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Update($model) 
    {
        $service = new GenreService();
        $model = new Genre();

        $model->id = $_POST['id'];
        $model->name = $_POST['name'];
        $service->Update($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Delete($id)
    {
        $service = new GenreService();
        $service->Delete($id);
        $service->GetAll();
        $service->Disconnect();
    }
}

?>