<?php namespace App\Models;
use CodeIgniter\Database\ConnectionInterface;
use CodeIgniter\Model;
class Datamodel extends Model 
{

protected $table      = 'items';
protected $primaryKey = 'Id';
protected $allowedFields = ['Item','Price'];
protected $db;
public function getAll()
	{
	$this->db = \Config\Database::connect();
	return $this->findAll();
	}
      }
