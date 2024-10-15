<?php

namespace App\Models;

use CodeIgniter\Model;

class SetupModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'admin';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $Id;
    protected $Name;
    protected $Password;
   protected $allowedFields = ['Name', 'Password','Role'];   
   
   

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];
   
    
   

 

public function adminUser($Name,$Password,$Role)

{

$data = [
		'Name' => $Name,
		'Password'    => $Password,
		'Role'=> $Role
	];

	$this->save($data);

	
}
    
    
   public function adminUserUpdate($Id, $Name, $Password) 
   
   {
	 
	 $this->Id= $Id;
	 $this->Name=$Name;
	 $this->Password=$Password;
	 
	 
	  $data =[ 
	
	  'Name'=>$this->Name,
	   'Password'=>$this->Password
	   
	   ];
	
   $logic=   $this->update($this->Id,$data);
  return $logic;
  
   }
    
    
    
    
    
    
    
}
