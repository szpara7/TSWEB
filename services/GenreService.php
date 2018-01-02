<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once ('../dal/Database.php');
require_once ('../model/Genre.php');
/**
 * Description of Author
 *
 * @author Przemek
 */
class GenreService extends Database
{
    public function GetAll()
    {
        $model = new Genre();
        $query = 'SELECT g.id, g.name, count(b.id) as \'count\' from genre g left Join book b on b.genre_id=g.id GROUP by g.name';
        $stmt = $this->connection->prepare($query);
        $stmt->execute();
        //$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);        
        $data = $stmt->fetchAll(PDO::FETCH_CLASS, "Genre");
        return $data;
    }
    
    public function GetById($id)
    {
        $stmt = $this->connection->prepare('SELECT g.name, count(b.id) from genre g left Join book b on b.genre_id=g.id where g.id = :genre_id GROUP by g.name');
        $stmt->bindParam(':genre_id', $id);
        $stmt->execute();
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $data = $stmt->fetchObject('Genre');
        return $data;
    }

    public function Add($model) 
    {
       try {
        $stmt = $this->connection->prepare('INSERT INTO Genre (name) VALUES (:name)');
        $stmt->bindParam(':name', $model->name);
        $stmt->execute();
       }
       catch(Exception $e) {
           echo $e->getMessage();
       }
    }

    public function Update($model)
    {
        try {
            $stmt = $this->connection->prepare('UPDATE Genre SET name = :name WHERE id = :id');
            $stmt->bindParam(':id', $model->id);
            $stmt->bindParam(':name', $model->name);
            $stmt->execute();
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
    }

    public function Delete($id) 
    {
        try {
            $stmt = $this->connection->prepare('DELETE FROM Genre WHERE id = :id');
            $stmt->bindParam(':id', $id);
            $stmt->execute();
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }
    }
}
