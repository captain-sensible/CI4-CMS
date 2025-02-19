<?php namespace App\Controllers;


 

class CheckSpam
{

protected $keywords = array('http','www','//', 'viagra','late client','.com','.net','promotion ', 'app','free consultation','Toenail Clippers','free shipping', 'free shipping !','Ã','YouTube','Î','É','Salam','Zdravo','cijenu');
protected $commentText;
protected $logic;
protected $hasKeyword;			
			





			
			public function  filterSpam($input)
			{
				$string =$input;
			
			foreach($this->keywords as $keyword)
					 {
					 if (strpos($string, $keyword) !== false) 
					 
					 {
					 $this->hasKeyword  = true;
					break; // stops searching the rest of the keywords if one was found
					 }
					 
					else
					{
					$this->hasKeyword= false;	
					} 
					 
             }
			
			return $this->hasKeyword;
			
			
					}
				
	 

           


}
