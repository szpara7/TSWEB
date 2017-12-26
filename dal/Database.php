<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Database
 *
 * @author Przemek
 */
class Database{
    //put your code here
    private $server_name = 'localhost';
    private $user_name = 'root';
    private $password = '';
    private $db_name='abg';
    protected $connection;

    public function __construct() {       
        try {
            $this->connection =  new PDO("mysql:host=$this->server_name;dbname=$this->db_name", $this->user_name, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);          
        } catch (Exception $ex) {
            echo 'Error: '.$ex->getMessage();
        }    
    }    

    public function Disconnect()
    {
      $this->connection = null;
    }
}
