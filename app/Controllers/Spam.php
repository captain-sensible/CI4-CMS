<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Controllers\BaseController;
use CodeIgniter\Controller;





class Spam extends BaseController
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
        //
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
