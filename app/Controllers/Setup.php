<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use  \App\Models\SetupModel;
use  \App\Models\UserModel;
use \App\Controllers\Utility;





class Setup  extends BaseController
{
protected $adminId;
protected $adminArray;	
protected $userModelHandle;
protected $utilityHandle; 
protected $userName;
protected $userPassword;
protected $role;
protected $userNameNWS;
protected $userPasswordNWS;
protected $encryptedUserPw;
 protected $myTime;
 protected $logicTest1;
 protected $setupModelHandle;

				 public function __construct() 
				    {
						parent::__construct();
						$this->myTime = parent::getTime();
						
						$this->myDate= date("d/m/Y",$this->myTime); 	
					
			       }



			public  function  pwForm()
			{
				 
				 $this->userModelHandle = new UserModel();
				 $this->adminArray =$this->userModelHandle->getOne("admin");
					
				 $data =[
						'title'=>'reset admin password',
						'date'=>$this->myDate,
						
						'adminId'=> $this->adminArray["Id"]
						
						];
									
						return  view('pwForm',$data);
						
				
			}



     public  function  resetPwDo()
     
  {
	$session = \Config\Services::session();
	$this->adminId=  $this->request->getVar('adminId'); 
	$this->userName=  $this->request->getVar('name'); 
	$this->userPassword = $this->request->getVar('password'); 
      
     $this->utilityHandle = new Utility();
     $this->userNameNWS =   $this->utilityHandle->removeWhiteSpace($this->userName);
     $this->userPasswordNWS = $this->utilityHandle->removeWhiteSpace($this->userPassword);
     $this->encryptedUserPw  = password_hash($this->userPasswordNWS, PASSWORD_DEFAULT);
     $this->setupModelHandle = new SetupModel();
			  try
				 {
				$result= $this->setupModelHandle ->adminUserUpdate($this->adminId, $this->userNameNWS, $this->encryptedUserPw); 
				if($result == true)
											{
											 $session->setFlashdata('info', 'password reset looks successful ; it will not take effect until you log out then log in with the new credentials ,make a note : <br><br> new username  :  '.$this->userNameNWS.' <br><br>new  password :  '.$this->userPasswordNWS );
											 return redirect()->route('admin');
											 exit();
											
											}
			  
				}


						 catch ( \Exception  $e)
										 {
													 
										 $data = [
													'title'  => 'info',
												  
											   'info'=>'somwething went wrong ' ,
											   'infoException'=>'the problem is :'.$e->getMessage(),
											   'date'=>$this->myDate,
												 ];
										
											echo view('info2', $data);
											 die();
									
											}
					 



  
  
  }//end of method 



	public function setUpForm()

	{
	  



	  $data =[
			'title'=>'admin set up',
			'date'=>$this->myDate
			];
				
		
			echo view('form1',$data);
			

	}


      public function process()
      
      {
   $this->userName=   $this->request->getVar('name'); 
   
   $pass=  $this->request->getVar('password'); 
   $this->password =    password_hash($pass,PASSWORD_DEFAULT);
   $this->role= $this->request->getVar('list'); 
  
  
   
  
   $handle= new Setupmodel();
   
      try
      {  
   
   $this->logicTest1=   $handle->adminUser($this->userName,$this->password,$this->role);
  $data = [
						'title'  => 'info',
					  
				   'info'=>'looks like username and password were populated into database. <br><br>Now go to  domain/blackcat if live or http://localhost:port/blackcat   if on dev  to login using your credentials  ' ,
				  
				   'date'=>$this->myDate,
					 ];
			
				echo view('info', $data);
				 die();
  
  
   
   }
   
   
    catch ( \Exception  $e)
			 {
			 			 
			 $data = [
						'title'  => 'info',
					  
				   'info'=>'somwething went wrong with new blog' ,
				   'infoException'=>$e->getMessage(),
				   'date'=>$this->myDate,
					 ];
			
				echo view('info2', $data);
				 die();
			 //above try catch works  and outputs rendered issue to view 
			    }
	 
    
    
    
    
    
    
    
     
      
      /*  please note the way its set up you can only have one admin user because db select gets first entry,si wont see anything else   */
      
      }















}
