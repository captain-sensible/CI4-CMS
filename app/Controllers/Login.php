<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use \App\Models\UserModel;
use CodeIgniter\I18n\Time;




class Login extends BaseController
{
    
    
    
 protected $regex= '/[^A-Za-z0-9!?\s]+/';
	//above should clean everything except numbers, letters white space
	protected $name;
	protected $password;
	protected $captcha;
	protected $captchaEntered;
	protected $actualCaptcha;
	protected $passwordMatches;
	protected $hashPassword;
	protected $userNameDB;
	protected $userNameMatches;
	protected $captchaMatches;
    protected $myTime;
protected $myDate;
protected $session;
				 public function __construct() 
				    {
						parent::__construct();
						$this->myTime = parent::getTime();
						$this->myDate= date("d/m/Y",$this->myTime); 	
					
			       }
 




   public function displaySession()
   
   {
	   
	   
	   $session = \Config\Services::session();
					   if(	isset($_SESSION['role']))
					   
					   {
					   
					   
					   
					   echo " S_session[role] is :".$_SESSION['role'];
					  
					
				   }
				   
				   else
				   {
					   echo "session role not set";
					   
				   }
				   
				   
				   
				   
				   
   }







		public function index()

		{
		echo "heelo from login";

		}

		public function login()
		{
		//		session_start();
		$session = \Config\Services::session();

		
		
		 $myarray = array( chr(rand(48,57)) , chr(rand(48,57)) , chr(rand(48,57)) , chr(rand(48,57)) , chr(rand(48,57)));
		
		



		
		$_SESSION['captcha']= $myarray;			
               
               
               
               
                $data = [
				'title'  => 'login  page',
				 'captcha'=>$myarray,
				 'date'=>$this->myDate
	        
			];

		
		echo view('usrLogin',$data);
		
	
											
											
		}											


public function credentials()

{
	$session = \Config\Services::session();
    $theArray= $_SESSION['captcha'];
    $this->actualCaptcha= implode("",$theArray);
    $this->name = $this->request->getVar('user'); 
    $this->password= $this->request->getVar('userPassword'); 
    $this->captcha= $this->request->getVar('captcha');
    
    
    
    
//$session->close();
//above when no longer needed 

$handle= new UserModel();

$result2= $handle->getOne('admin');      
		   $this->hashPassword=  $result2['Password'];
		   $this->userNameDB=$result2['Name'];
		   
		 
           $this->passwordMatches= password_verify($this->password,$this->hashPassword);
          
            
           $this->userNameMatches= strcmp($this->userNameDB, $this->name);
           
         
         
          $this->captchaMatches=strcmp($this->captcha,$this->actualCaptcha);
          

						  if  (  ($this->userNameMatches ==0) && ($this->captchaMatches ==0) &&($this->passwordMatches == True)   )
						{
						$_SESSION['role']="admin";
						
						
						
						
					
						
						
						$data= 
							[
							'title'=>'info',
							'info'=>'<p>
							
							<h11>Hello</h11> admin your now logged in 
							</p> ' ,
							'date'=>$this->myDate,
							];
							
						
						echo view('admin', $data);
						}

		else
		{
                
								$logic =isset(   $_SESSION['count']);
								if ($logic ==false)
								{
							$_SESSION['count']=5;   
							return redirect()->route('blackcat');
								}   
				   
								elseif($logic==true)
                                {
							if(	$_SESSION['count']<=1 )
							{
								return redirect()->to('http://www.google.com'); 
								
						   }		
					
			    else
			    
			    {
					          
					                   $oldCount=  $_SESSION['count'];
										$newCount = $oldCount-1;
										$_SESSION['count']= $newCount;      
					
					
					
					
					return redirect()->route('blackcat');
					
					
				}
          
          
}
}
}
               public function logout()
              {
              
               
	 $session = \Config\Services::session();
               
               
                unset($_SESSION['role']);
                unset($_SESSION['count']);
                
                
              
	      $data= [ 
	      'title'=> 'logout',
	      'info'=> 'you may have already been logged out, but if you were not you are now !' ,
	      'date'=>$this->myDate
	      
	      
	      
	      ];
	      
	      
	      
        echo view('info', $data);
        
	
            
	    
	    
	    
	    
	    
	     }


		public function admin()
		{
		 
	 
		
		
		
		 $data= [ 
				  'title'=> 'admin',
				  'info'=> 'your logged in dont forget to logout' ,
				  'date'=>$this->myDate
				  
				  
				  
				  ];
				  
				  
				  
				echo view('admin', $data);
				
		}
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}//end class

