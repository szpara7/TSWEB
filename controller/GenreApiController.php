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

        $input = json_decode(file_get_contents('php://input'), true);

        $model->name = $input['name'];

        $service->Add($model);
        $service->Disconnect();
    }

    public function Update() 
    {
        $service = new GenreService();
        $model = new Genre();

        $input = json_decode(file_get_contents('php://input'), true);

        $model->id = $input['id'];
        $model->name = $input['name'];

        $service->Update($model);

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