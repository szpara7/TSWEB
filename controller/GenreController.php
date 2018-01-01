<?php

require_once('../services/GenreService.php');

class GenreController {

    public function GetAll() 
    {
        $service = new GenreService();
        $data = $service->GetAll();
        $author->Disconnect();
        echo json_encode($data);
    }

    public function GetById($id)
    {
        $service = new GenreService();
        $data = $service->GetById($id);
        $author->Disconnect();
        echo json_encode($data);
    }

    public function Add($model)
    {
        $service = new GenreService();
        
        $service->Add($model);
        $service->Disconnect();
    }

    public function Update($model) 
    {
        $service = new GenreService();
        $service->Update($model);
        $service->Disconnect();
    }

    public function Delete($id)
    {
        $service = new GenreService();
        $service->Delete($id);
        $service->Disconnect();
    }
}

?>