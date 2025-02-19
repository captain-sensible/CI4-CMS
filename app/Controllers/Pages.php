<?php

namespace App\Controllers;

use App\Controllers\BaseController;






class Pages extends BaseController
{
    
  protected $logic1;
protected $logic2;
protected $myTime;  
    
    public function __construct()
{
	
parent::__construct();
$this->myTime= parent::getTime();
$this->myDate = date("d/m/Y",$this->myTime);	
}
    
    
    public function nopage()
    {
        $data =[
			'title'=> 'no such page',
			  'date'=>$this->myDate
			
	
		];			 
	return view('nopage',$data);		
    }
    
    
 public function showme($page)
 {
	
	define("PATH", $page);
	echo PATH;
 
$this->logic1= file_exists(APPPATH."Views/".$page.".php");

if(($this->logic1==NULL) OR ($this->logic1== False))
{

 
 $data =[
			'title'=> 'get data from sqlite',
			
			'info'=> ' checking stage of development',
	           'date'=>$this->myDate
		];			 
	echo view('nopage',$data);			 
 
}

elseif(($this->logic1==1)OR($this->logic1==True))
{
	
	
	$data =[
			'title'=> 'get data from sqlite',
			
			'info'=> ' checking stage of development',
	         'date'=>$this->myDate   
		];			 
	echo view($page,$data);			
	
}
 
 
 }   
    
    
    
    
    
}//end of class
