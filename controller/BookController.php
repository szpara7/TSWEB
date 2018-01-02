<?php

require_once('../services/BookService.php');

class BookController {

    public function GetAll() 
    {
        $service = new BookService();
        $data = $service->GetAll();
        $service->Disconnect();
        echo json_encode($data);
    }

    public function GetById($id)
    {
        $service = new BookService();
        $data = $service->GetById($id);
        $service->Disconnect();
        echo json_encode($data);
    }

    public function Add($model)
    {
        $service = new BookService();
        
        $service->Add($model);
        $service->Disconnect();
    }

    public function Update($model) 
    {
        $service = new BookService();

        $service->Update($model);
        $service->Disconnect();
    }

    public function Delete($id)
    {
        $service = new BookService();
        $service->Delete($id);
        $service->Disconnect();
    }
}

?>