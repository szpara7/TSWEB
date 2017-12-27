<?php
require_once('./services/AuthorService.php');
require_once('./model/Author.php');

class AuthorController {    

    public function GetAll() 
    {
        $author = new AuthorService();
        $data = $author->GetAll();
        $author->Disconnect();
        return json_encode($data);
    }

    public function GetById($id)
    {
        $service = new AuthorService();
        $data = $service->GetById($id);
        $author->Disconnect();
        return json_encode($data);
    }

    public function Add($model)
    {
        $service = new AuthorService();
        
        $service->Add($model);
        $service->Disconnect();
    }

    public function Update($model) 
    {
        $service = new AuthorService();

        $service->Update($model);
        $service->Disconnect();
    }

    public function Delete($id)
    {
        $service = new AuthorService();
        $service->Delete($id);
        $service->Disconnect();
    }
}

?>