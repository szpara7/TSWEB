<?php

require_once('./services/BookService.php');
require_once('./model/Book.php');

class BookApiController
{
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
        $model = new Book();

        $model->title = $_POST['title'];
        $model->isbn = $_POST['isbn'];
        $model->page_count = $_POST['page_count'];
        $model->year = $_POST['year'];
        $model->author_id = $_POST['author_id'];
        $model->genre_id = $_POST['genre_id'];
        $model->description = $_POST['description'];

        $service->Add($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Update($model)
    {
        $service = new BookService();
        $model = new Book();

        $model->title = $_POST['title'];
        $model->isbn = $_POST['isbn'];
        $model->page_count = $_POST['page_count'];
        $model->year = $_POST['year'];
        $model->author_id = $_POST['author_id'];
        $model->genre_id = $_POST['genre_id'];
        $model->description = $_POST['description'];
        $model->id = $_POST['id'];

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
