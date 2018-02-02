<?php
require_once('./services/AuthorService.php');
require_once('./model/Author.php');

class AuthorApiController
{
    public function GetAll()
    {
        $author = new AuthorService();
        $data = $author->GetAll();
        $author->Disconnect();
        echo json_encode($data);
    }

    public function GetById($id)
    {
        $service = new AuthorService();
        $data = $service->GetById($id);
        $service->Disconnect();
        echo json_encode($data);
    }

    public function Add()
    {
        $service = new AuthorService();
        $model = new Author();

        $input = json_decode(file_get_contents('php://input'), true);
        echo $input['first_name'];

        $model->first_name = $input['first_name'];
        $model->last_name = $input['last_name'];
        $model->description = $input['description'];
        $model->nationality = $input['nationality'];
        $model->date_birth = $input['birth_date'];
        $model->date_death = $input['death_date'];

        $service->Add($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Update()
    {
        $service = new AuthorService();
        $model = new Author();
        $input = json_decode(file_get_contents('php://input'), true);

        $model->first_name = $input['first_name'];
        $model->last_name = $input['last_name'];
        $model->description = $input['description'];
        $model->nationality = $input['nationality'];
        $model->date_birth = $input['birth_date'];
        $model->date_death = $input['death_date'];
        $model->id = $input['id'];
        
        $service->Update($model);
        $service->Disconnect();
        return true;
    }

    public function Delete($id)
    {
        $service = new AuthorService();
        $service->Delete($id);
        $service->GetAll();
        $service->Disconnect();
    }
}
