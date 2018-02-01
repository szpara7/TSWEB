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

        $model->first_name = $_POST['first_name'];
        $model->last_name = $_POST['last_name'];
        $model->description = $_POST['description'];
        $model->nationality = $_POST['nationality'];
        $model->date_birth = $_POST['birth_date'];
        $model->date_death = $_POST['death_date'];

        $service->Add($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Update()
    {
        $service = new AuthorService();
        $model = new Author();

        $model->first_name = $_POST['first_name'];
        $model->last_name = $_POST['last_name'];
        $model->description = $_POST['description'];
        $model->nationality = $_POST['nationality'];
        $model->date_birth = $_POST['birth_date'];
        $model->date_death = $_POST['death_date'];
        $model->id = $_POST['id'];

        $service->Update($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Delete($id)
    {
        $service = new AuthorService();
        $service->Delete($id);
        $service->GetAll();
        $service->Disconnect();
    }
}
