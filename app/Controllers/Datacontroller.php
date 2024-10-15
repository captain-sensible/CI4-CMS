<?php namespace App\Controllers;
use CodeIgniter\Controller;
use \App\Models\Datamodel;

class Datacontroller  extends BaseController
{
    public function data()
    {
		
	echo base_url();	
   $handle= new Datamodel();
	$result= $handle->getAll();			 
	$data =[
			'title'=> 'get data from sqlite',
			
			'info'=> ' checking stage of development',
	'theData'=>$result,
		];			 
	echo view('info',$data);			  
         
    }
}

