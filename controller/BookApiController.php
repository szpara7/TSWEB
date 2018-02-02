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

    public function Add()
    {
        $service = new BookService();
        $model = new Book();

        $input = json_decode(file_get_contents('php://input'), true);

        $model->title = $input['title'];
        $model->isbn = $input['isbn'];
        $model->page_count = $input['page_count'];
        $model->year = $input['year'];
        $model->author_id = $input['author_id'];
        $model->genre_id = $input['genre_id'];
        $model->description = $input['description'];

        $service->Add($model);
        $service->GetAll();
        $service->Disconnect();
    }

    public function Update()
    {
        $service = new BookService();
        $model = new Book();

        $input = json_decode(file_get_contents('php://input'), true);

        $model->title = $input['title'];
        $model->isbn = $input['isbn'];
        $model->page_count = $input['page_count'];
        $model->year = $input['year'];
        $model->author_id = $input['author_id'];
        $model->genre_id = $input['genre_id'];
        $model->description = $input['description'];
        $model->id = $input['id'];

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
