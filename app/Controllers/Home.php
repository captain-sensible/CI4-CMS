<?php

namespace App\Controllers;


use App\Controllers\BaseController;
use CodeIgniter\Database\ConnectionInterface;

class Home extends BaseController
{
			
		protected $myDate;
     protected $myTime;
		
		
			public function __construct() 
				    {
						parent::__construct();
						$this->myTime = parent::getTime();
						$this->myDate= date("d/m/Y",$this->myTime); 	
					}
			
			
			
			
			
			
			
			
			public function index()
			{
			   $jelly ="strwaberry";
			   echo $jelly;
				
				 
			}

           public function landingpage()
           
           {
			
		
			
			
			
			
			$data= [
			'title'=>" landing page",
			
			'date'=>$this->myDate 
			
			
			];
			 return   view('landingPage.php',$data); 
		   }




}
