<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once ('./dal/Database.php');
require_once ('./model/Author.php');
/**
 * Description of Author
 *
 * @author Przemek
 */
class AuthorService extends Database
{
    public function GetAll()
    {
        $model = new Author();
        $query = 'SELECT * FROM AUTHOR';
        $stmt = $this->connection->prepare($query);
        $stmt->execute();
        //$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);        
        $data = $stmt->fetchAll(PDO::FETCH_CLASS, "Author");
        return $data;
    }
    
    public function GetById($id)
    {
        $stmt = $this->connection->prepare('SELECT * FROM AUTHOR WHERE id = :author_id');
        $stmt->bindParam(':author_id', $id);
        $stmt->execute();
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $data = $stmt->fetchObject('Author');
        return $data;
    }

    public function Add($model) 
    {
       try {
        $stmt = $this->connection->prepare('INSERT INTO Author (first_name, last_name, date_birth, date_death, nationality, description) VALUES (:first_name, :last_name, :date_birth, :date_death, :nationality, :description)');
        $stmt->bindParam(':first_name', $model->first_name);
        $stmt->bindParam(':last_name', $model->last_name);
        $stmt->bindParam(':date_birth', $model->date_birth, PDO::PARAM_STR);
        $stmt->bindParam(':date_death', $model->date_death, PDO::PARAM_STR);
        $stmt->bindParam(':nationality', $model->nationality);
        $stmt->bindParam(':description', $model->description);
        $stmt->execute();
       }
       catch(Exception $e) {
           echo $e->getMessage();
       }
    }

    public function Update($model)
    {
        try {
            $stmt = $this->connection->prepare('UPDATE Author SET first_name = :first_name, last_name = :last_name
            , date_birth = :date_birth, date_death = :date_death, nationality = :nationality, description = :description WHERE id = :id');
            $stmt->bindParam(':id', $model->id);
            $stmt->bindParam(':first_name', $model->first_name);
            $stmt->bindParam(':last_name', $model->last_name);
            $stmt->bindParam(':date_birth', $model->date_birth, PDO::PARAM_STR);
            $stmt->bindParam(':date_death', $model->date_death, PDO::PARAM_STR);
            $stmt->bindParam(':nationality', $model->nationality);
            $stmt->bindParam(':description', $model->description);
            $stmt->execute();
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
    }

    public function Delete($id) 
    {
        try {
            $stmt = $this->connection->prepare('DELETE FROM Author WHERE id = :id');
            $stmt->bindParam(':id', $id);
            $stmt->execute();
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
    }
}
