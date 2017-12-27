<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once './dal/Database.php';
require_once './model/Book.php';
/**
 * Description of Author
 *
 * @author Przemek
 */
class BookService extends Database
{
    public function GetAll()
    {
        $model = new Book();
        $query = 'SELECT * FROM Book';
        $stmt = $this->connection->prepare($query);
        $stmt->execute();
        //$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $data = $stmt->fetchAll(PDO::FETCH_CLASS, "Book");
        return $data;
    }
    
    public function GetById($id)
    {
        $stmt = $this->connection->prepare('SELECT * FROM Book WHERE id = :book_id');
        $stmt->bindParam(':book_id', $id);
        $stmt->execute();
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $data = $stmt->fetchObject('Book');
        return $data;
    }

    public function Add($model)
    {
        try {
            $stmt = $this->connection->prepare('INSERT INTO Book (title, description, isbn, page_count, year, author_id, genre_id)
         VALUES (:title, :description, :isbn, :page_count, :year, :author_id, :genre_id)');
            $stmt->bindParam(':title', $model->title);
            $stmt->bindParam(':description', $model->description);
            $stmt->bindParam(':isbn', $model->isbn);
            $stmt->bindParam(':page_count', $model->page_count);
            $stmt->bindParam(':year', $model->year);
            $stmt->bindParam(':author_id', $model->author_id);
            $stmt->bindParam(':genre_id', $model->genre_id);
            $stmt->execute();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function Update($model)
    {
        try {
            $stmt = $this->connection->prepare('UPDATE Book SET title = :title, description = :description
            , isbn = :isbn, page_count = :page_count, year = :year, author_id = :author_id, genre_id = :genre_id
             WHERE id = :id');
            $stmt->bindParam(':id', $model->id);
            $stmt->bindParam(':title', $model->title);
            $stmt->bindParam(':description', $model->description);
            $stmt->bindParam(':isbn', $model->isbn);
            $stmt->bindParam(':page_count', $model->page_count);
            $stmt->bindParam(':year', $model->year);
            $stmt->bindParam(':author_id', $model->author_id);
            $stmt->bindParam(':genre_id', $model->genre_id);
            $stmt->execute();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function Delete($id)
    {
        try {
            $stmt = $this->connection->prepare('DELETE FROM Book WHERE id = :id');
            $stmt->bindParam(':id', $id);
            $stmt->execute();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
