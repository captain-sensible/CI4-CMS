<?php namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;


class MyFilter implements FilterInterface
{
	    public function before(RequestInterface $request, $arguments = null)
	    {
		    
		    
		    
		    $session = \Config\Services::session();
    
		   $logic=isset($_SESSION['role']) ;
		   if($logic==false) 
		   {
		    return redirect('noPage');
   
		   }
   
   
     
     
     
    
     
     
    
     
           }

    //--------------------------------------------------------------------

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here
    }
}
