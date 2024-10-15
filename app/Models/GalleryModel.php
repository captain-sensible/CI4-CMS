<?php

namespace App\Models;

use CodeIgniter\Model;
use CodeIgniter\Database\ConnectionInterface;
class GalleryModel extends Model
{
   
protected $table      = 'gallery';
protected $primaryKey = 'Id';
protected $allowedFields = ['image','imageTitle','slug'];
protected $limit;
protected $offset;
protected $Id;
protected $imageTitle;
protected $slug;
protected $category;
protected $info;
protected $db;
protected $DBGroup          = 'default';
protected $useAutoIncrement = true;
protected $returnType       = 'array';
protected $useSoftDeletes   = false;
protected $protectFields    = true;
   

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
    
    
    
    

public function getIt($Id)

	{
	 return $this->asArray()
			     ->where(['Id' => $Id])
			     ->first();

	}



 public function isEmptyGallery()
    
    {
          
          $db = \Config\Database::connect();
         

		   $query = $db->query("SELECT COUNT(*) FROM gallery  ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}

public function getAllDo2()
{
$db = \Config\Database::connect();
$query = $db->query("SELECT *  FROM gallery ");
	return $query->getResult('array');

}


public function getAllDo()
{
$db = \Config\Database::connect();
$query = $this->db->query("SELECT *  FROM gallery ");
$result=  $query->getResultObject();
	return $result;

}
  
public function getAll()

	{
	$this->db = \Config\Database::connect();
	
	return $this->findAll();
	//return $this->orderBy('Id', 'desc')->Res();
	}
  
    



        public function count()
	{
	
	return $this->db->countAll(); 
	
	
	
	
	
	}


       public function getOneToDel($id)
       { 
       
      return $this->find($id);
       
      // return $this->asArray()
      // ->where(['Id'=>$id]);
       
       }


	
      public function getOneToDel2($id) 
      
      {
		  $db = \Config\Database::connect();
		 $query = $db->query("SELECT * FROM gallery  where Id = $id ");  
		 $result   = $query->getRowArray();
		 return $result;
	  }
       


     public function delOneGallery($Id)
     
     {
	 $builder = $this->db->table('gallery');
	$builder->where('Id', $Id);
     $logic= $builder->delete();
		 return $logic;
	 }

	

	public function insertGallery($image,$imageTitle,$slug)

	{
	$query = $this->db->query("SELECT *  FROM gallery ");
	
	$query= $this->db->query("INSERT into gallery (image,imageTitle,slug) values('$image','$imageTitle','$slug')");

	


	}

       public function deleteOne($id)
       {
       $this->where('Id',$id )->delete();
       //need to get name image associated with blog and unlink it 
       
       return True; 
       
       
       }
    


  

      public function doesGalleryIdExist($id )
    
       {
          echo $id;
          
                    
          $db = \Config\Database::connect();
		
         

		  
		   $query = $db->query("SELECT COUNT(*) FROM gallery  where Id= $id ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}




 public function isEmptyMens()
    
       {
           $db = \Config\Database::connect("default");
		   $query = $db->query("SELECT COUNT(*) FROM portfolio where category='Mens' ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}


      public function isEmptyBoys()
    
       {
           $db = \Config\Database::connect("default");
		   $query = $db->query("SELECT COUNT(*) FROM portfolio where category='Boys' ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}

public function isEmptyGirls()
    
       {
           $db = \Config\Database::connect("default");
		   $query = $db->query("SELECT COUNT(*) FROM portfolio where category='Girls' ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}




public function isEmptyBaby()
    
       {
           $db = \Config\Database::connect("default");
		   $query = $db->query("SELECT COUNT(*) FROM portfolio where category='Baby' ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}



public function isEmptyAccessory()
    
       {
           $db = \Config\Database::connect("default");
		   $query = $db->query("SELECT COUNT(*) FROM portfolio where category='Accessory' ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}











public function mens()
{
	return $this->where('category', 'Mens')
                   ->findAll();

}	


    
    
    
    
    
    
    
    
    
    
    
    
    
    
}//end of class 
