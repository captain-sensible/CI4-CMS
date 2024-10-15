<?php

namespace App\Models;

use CodeIgniter\Model;
use CodeIgniter\Database\ConnectionInterface;
class BlogModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'blog';
    protected $primaryKey       = 'Id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
       protected $allowedFields = ['title','article','image','slug','date','font'];
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
    
    protected $limit;
protected $offset;
protected $Id;
protected $title;
protected $article;
protected $slug;
    
    
public function getArticle($slug)

	{
	 return $this->asArray()
			     ->where(['slug' => $slug])
			     ->first();

	}

        public function count()
	{
	
	return $this->countAll(); 
	
	}


        public function isEmptyBlog()
    
    {
          
          $db = \Config\Database::connect();
         

		   $query = $db->query("SELECT COUNT(*) FROM blog  ");
		   $count   = $query->getRowArray();
                return  $count;

		
		}



        public function getOneToDel2($id) 
      
      {
		  $db = \Config\Database::connect();
		 $query = $db->query("SELECT * FROM blog  where Id =$id ");  
		 $result   = $query->getRowArray();
		 return $result;
	  }
       

       public function getOneToDel($id)
       { 
       
      return $this->find($id);
       
      // return $this->asArray()
      // ->where(['Id'=>$id]);
       
       }


	public function getOne()
	{
 
	$this->limit=1;
	$this->offset=0;
	return $this->orderBy('Id', 'desc')->findAll($this->limit, $this->offset);

	}


        public function getThree()
	{
 
	$this->limit=3;
	$this->offset=0;
	return $this->orderBy('Id', 'desc')->findAll($this->limit, $this->offset);

	}





	public function getSome()
	{
	$this->limit=2;
	$this->offset=1;
	return $this->orderBy('Id', 'desc')->findAll($this->limit, $this->offset);

	}
	
	
	public function getDesending()
	{
		
    
        return $this->orderBy('Id', 'desc');
   
	}
	
	
	public function getAll()

	{
	return $this->orderBy('Id', 'desc')->findAll();




	}

	public function insertBlog($title,$article,$image,$slug,$date,$font)

	{
	$data = [
		'title' => $title,
		'article'    => $article,
		'image'=> $image,
		'slug'=>$slug,
		'date'=>$date,
		'font'=>$font
	];

	$this->save($data);

    return True;

	}

       public function deleteOne($id)
       {
       $this->where('Id',$id )->delete();
       //need to get name image associated with blog and unlink it 
       
       return True;
       
       
       }
     public function amendBlog($blogId,$title,$article,$slug)
     
     
     {
     
     $this->Id= $blogId;
     $this->title=  $title;
     $this->article =  $article;
     $this->slug=$slug;
     $data =[
     'title'=>$this->title,
     'article'=>$this->article,
     'slug'=>$this->slug
     ];
   $logic=   $this->update($this->Id,$data);
   return $logic;
       
     }


   public function isEmpty()
{
$db = \Config\Database::connect("default");
		
		$query = $db->query("SELECT * FROM blog order by Id DESC LIMIT 3");
		
		
		
		
		
		$count   = $query->getRowArray();
                return  $count;

		
		}


    
    
    
}// end of class model 
