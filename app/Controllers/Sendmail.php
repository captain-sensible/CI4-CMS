<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\Controller;
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\OAuth;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;



use \App\Controllers\CheckSpam;
use \App\Controllers\Utility;
use CodeIgniter\I18n\Time;   

class Sendmail extends BaseController
{
   
   protected $theirName;
   protected $theirEmail;
   protected $theirMessage;
   
   protected $totalMessage;    
   
   
             public function __construct() 
									{
										parent::__construct();
										$this->myTime = parent::getTime();
										$this->myDate= date("d/m/Y",$this->myTime); 	
									
								   }
  

			  
			  
			  public function mailForm()
			  
			    {
					
					
				$data =[
					'title'=>' form for contact' ,
					'date'=>$this->myDate
					];
					echo view('contact',$data);
								
					
					
						  
		         }
			  
			  
  

              public function processform()
	
	{//start method 
		
	
	   
		
	   //$cleanName= htmlentities( $this->request->getVar('name')); 
        $this->theirName=  $this->request->getPost('name');
 	    $this->theirEmail=  htmlentities($this->request->getVar('email'));
 	    $this->theirMessage= $this->request->getVar('message');
	  
        $spamHandle = new CheckSpam();
        $logic = $spamHandle->filterSpam($this->theirMessage);
	//before bothering to remove char queck if spam 	
					if ($logic =="true")
		                   {
		                      $data = [
						      'title'=>'spam',
						      'date'=>$this->myDate
						  	 ];
		         			echo view('spam',$data);
		
				
		
	                    	}
		
		else
		
		               {
			        
			          $IP= $_SERVER['REMOTE_ADDR'];
	                  $theirIP= strval($IP);
                      //	$ip= $this->request->getIPAddress();
	
	                $this->totalMessage = "from  website prophet jonathan   \r\n ".$this->theirName ." \r\n  \r\n  their ip from native php is    :".$theirIP."\r\n \r\n their email is:  ".$this->theirEmail." \r\n \r\n their message:  ".$this->theirMessage;		
			       $mail = new PHPMailer(true); 
	                $mail->isSMTP();
			    	$mail->Timeout = 20;
							//Enable SMTP debugging, 0 = off (for production use),  1 = client messages,  2 = client and server messages
							$mail->SMTPDebug = 0;
							//i dont bother with deg bug since i get error with a try catch ,its enabled via (true) in     $mail = new PHPMailer(true); 
							//Set the hostname of the mail server  below i use google 
							$mail->Host = 'smtp.gmail.com';
							$mail->Port = 587;
							$mail->SMTPSecure = 'tls';        
							$mail->SMTPAuth = true;
							//Username to use for SMTP authentication - use full email address for gmail
							$mail->Username = "yourEmail@gmail.com";
							//Password to use for SMTP authentication in my case  generated from google 2 step 
							$mail->Password = "yourEmailPassword";
						  //so im my case i use my own personal gmail account to rely the message and then i use another yahoo email account to get message to be sent to 
							
						   //Set who the message is to be sent from
							$mail->setFrom('yourEmailAddress@gmail.com', 'webmaster ');
							//and email address to which message will be sent below i.e your email or webmaster
							$mail->addAddress('somebody@yahoo.com', ' somebody');
					
						
						
						
						$mail->Subject = 'message via contact us web site     ';
							$mail->Body = $this->totalMessage;
							
					                 try{		
							
								$logic2 = $result=			$mail->send();
										   if (($logic2==1) OR ($logic2=="true"))
										 {
										  $data = ['title' => 'sending email ',
										  'info'    => 'your message was sent ',
										  'date'=>$this->myDate
												  ];
															
										 echo view ('info',$data);
										
										 }
	                                     
	                                    }
	                   
	                    catch ( \Exception  $e)
										 {
												echo "something went wrong";	 
										 $data = [
													'title'  => 'info',
												  
											   'info'=>'something went wrong with sending message<br>  probably you have not entered credentials for lines 106 and 108 in Sendmail.php controller. <br><br>Hal says :  ' ,
											   'infoException'=>$e->getMessage(),
											   'date'=>$this->myDate,
												 ];
										
											echo view('info2', $data);
											 die();
										 //above try catch works  and outputs rendered issue to view 
											}
													
													
	                                 
					     
		
	
	}//end of process form method 
	
	
	
	
	
		
		
		
		
		
		
		
		
		
		}
   
   
   
   
   
   
   
  
   
   
   
   
   
    
    
    
    
    
    
    
    
    
    
}
