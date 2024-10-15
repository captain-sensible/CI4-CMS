<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\Controller;
use \App\Models\BlogModel;
use App\Controllers\Utility;
use CodeIgniter\I18n\Time;
//use \App\Andy\BlogManager;

class Blog extends BaseController
{
    
    
    
    protected $placeHolderImg;
    protected $imageSlug;
    protected $title;
    protected $date;
    protected $article;
    protected $cleanedArticle;
    protected $cleanedText;
    protected $cleanedDate;
    protected $cleanedTitle;
    protected $imageFile;
    protected $tempImgFile;
    protected $imageFileName;
    protected $titleSlug;
      protected $blogId;
     protected $myDate;
     protected $myTime;
     protected $blogImages="blogImages";
     protected $imgPreCheckhandle;
     protected $utilityHandle;
     protected $logicTest;
     protected $isEmptyBlog;
     protected $imageExists;
     protected $font;
				 public function __construct() 
				    {
						parent::__construct();
						$this->myTime = parent::getTime();
						$this->myDate= date("d/m/Y",$this->myTime); 	
					}

                   public function altMethod()
                   {
					
					$BlogHandle = new BlogManager(model(BlogModel::class));
					$result= $BlogHandle->list();
					var_dump($result);
					echo "place holder for trying dependency injection";   
					   
				   }
                   

					public function doCount()
					{
					$handle = new BlogModel();	
					$mycount= $handle->count();
					}		 

					public function doPaginate()
					{
					//check to see if any blogs
					 $this->handle = new BlogModel();	
					$this->isEmptyBlog= $this->handle->count();
						if( $this->isEmptyBlog == 0)
					
									{
									$data =[
									'title'=>'checking if any blogs',
									'info'=>'sorry there are currently no blogs' ,
									'date'=>$this->myDate 
														];
									echo view('info',$data);	
										
									}
				  					
				      elseif(	$this->isEmptyBlog > 0)
								{
									$newresult = $this->handle->getDesending();
									
									
									 $data = [
										 'title'=>'paginate',
									  //'blogs' => $handle->paginate(5),
										'blogs'=>$newresult->paginate(9),
										'pager' => $this->handle->pager,
										'date'=>$this->myDate
									];
									echo view('listBlogsPaginate',$data);
								
								}
									
					
			
					
							
				
					
											
					}		
                    public function showArticle($theSlug)
					
					{
				  	$handle = new BlogModel();
					$result= $handle->getArticle($theSlug);
						
					if ($result == null)
					{
						
						
					
					
					$data =[
					'title'=>'no such blog',
					'date'=>$this->myDate,
					'info'=>' there is no blog with that slug in database'
					];
					echo   view('info',$data);
								
					
					exit();
					
				}
					
					
				elseif  ($result != null)	
				{
				
					
					
					$data =[
					'title'=>$theSlug,
					'blog'=>$result,
					'date'=>$this->myDate
					];
					echo view('blogArticle',$data);
								
					}
				}
		
					public function listBlogs()
					{
					$handle = new BlogModel();
					$result= $handle->getAll();
					$data =[
					'title'=>'andything',
					'blogs'=>$result,
					'date'=>$this->myDate
					];
					echo view('listBlogs',$data);
							
					}
		   	
					public function blogForm()
							{
								// displays form to submit newblog
								$data =[
								'title'=>'new blog',
								'info'=>'&nbsp;',
								'date'=>$this->myDate
								];
								echo view('newblogForm',$data);
						}
		
		
		
          


            public function newBlogArticle()
						{
								$session = \Config\Services::session();
								
								//get data from form below
								$this->title = $this->request->getVar('title'); 
								$this->date=  $this->request->getVar('date');
								$this->article = $this->request->getVar('article');
							  $this->font = $this->request->getVar('font');
							  
							 
							    //create handle below to use utility class
							    							  
							    $utilityHandle= new Utility();
							 
							 //clean up just in case clean out possible bad chars and accidential white space image name 
							 
							   $this->cleanedText=  $utilityHandle->badChars($this->article);
								$this->cleanedTitle= $utilityHandle->badChars($this->title);
							   $this->cleanedDate= $utilityHandle->badChars($this->date);
							$this->titleSlug= url_title($this->cleanedTitle);
							
							
								$this->imageFile = $this->request->getFile('userfile');
								//above we have not taken out whitespace nor bad chars , no point if its not even an image file 
								
								$this->imageFileName = $this->imageFile->getName(); 
								$this->tempImgFile = $this->imageFile->getTempName();
															
								$this->imgPreCheckhandle  = new ImgPreCheck();
															 
								$logic2 = $this->imgPreCheckhandle->extCheck($this->imageFileName);
									
								if($logic2 == 0)
								{
								 $session->setFlashdata('info', 'Hello that is not an image file ');
								 return redirect()->route('newblog');
							     exit();
								
								}
					
								 
								 
								 
								  $size= $this->imgPreCheckhandle ->getFileSize($this->tempImgFile);
								
								if($size > 500000)
								
								{
								   $session->setFlashdata('info', 'That image file is too large, reduce to 500k and less   ');
								 return redirect()->route('newblog');
								 exit();
								}
								 
								 
								$this->placeHolderImg =   $utilityHandle->allBadChars( $this->imageFileName);
								$this->imageSlug =	$utilityHandle->removeWhiteSpace($this->placeHolderImg);
															
								//now check after processing that processed image file does not exist 
								$logic = $this->imgPreCheckhandle->allReadyExists($this->blogImages,$this->imageSlug);
								 
								  if($logic == "true")
								  {
									   $session->setFlashdata('info', 'after processing and creatin of slug for image name ,  image already exists  ');
								       return redirect()->route('newblog');
									   exit();
								 }
								 
								
						
					  try{
					  
					 $this->imageFile->move('blogImages',	$this->imageSlug );
					 $handle = new BlogModel();
					 $blogLogic= $handle->insertBlog($this->cleanedTitle,$this->cleanedText,$this->imageSlug,$this->titleSlug,$this->cleanedDate,$this->font);
				  				 
				 }
					 
					catch ( \Exception  $e)
							 {
										 
							 $data = [
										'title'  => 'info',
									  
								   'info'=>'somwething went wrong with new blog' ,
								   'infoException'=>'the problem is :'.$e->getMessage(),
								   'date'=>$this->myDate,
									 ];
							
								echo view('info2', $data);
								 die();
						
								}
					 
					 
					 
					 if ($blogLogic == true)
					 
					  
					 {
					 
					 
			
					   $session->setFlashdata('info', 'ok new blog created  ');
					 return redirect()->to('admin');

						
					 exit();
					
					}
					   
	   
	   
	   
	    }//end new blog 
	    
	    public function delBlogForm()
	      {
	     
	      $myTime = new Time('now');
	    $handle = New BlogModel();
	    $result= $handle->getAll();
	    
	    
	    
	    $data =[
		'title'=>'inform user ',
		'blogList'=>$result,
		'info'=> '',
		'date'=>$this->myDate
		
		
		];
				
  	        
		echo view('removeBlogForm',$data);
		
	    
	    //end of newblog below
	    
	    }
	    
	    
	  
	    
	    public function delBlog()
	    
	    {
		// this is the processing from del form to removea blog 
		
		$session = \Config\Services::session();
		
		 $myTime = new Time('now');
		 $date=	$myTime->toLocalizedString('MMM d, yyyy');   
	    $this->blogId  = $this->request->getVar('BlogId'); 
	    $this->handle= new ImgPreCheck();
	    $this->handle2 = new BlogModel();
	    $result=  $this->handle2->getOneToDel($this->blogId);
	    
	    if ($result == Null)
	    {
		 $session->setFlashdata('info', 'what are you playing at , there is no blog with that Id ');
								       
								       return redirect()->to('admin');
								       	
		exit();	
		}
	    
	    
	     
	     
	     
	   
	   
	   
	   
	   
	    //above works so now use utility to see if image exists 
	  	
           $this->imgFileName= $result['image'];	  	
	  	  $this->logicTest = $this->handle->allReadyExists($this->blogImages,$this->imgFileName );
	   
	
	   
	    
	    
	     if($this->logicTest ==false)
	   {
		
	   $this->handle2->deleteOne($this->blogId);
       
       $session->setFlashdata('info', 'the blog was deleted');
								       
								       return redirect()->to('admin');
       
       
		  
		   exit();
	   }
	   
	    
	    
	    elseif ($this->logicTest == true  ) 
	    
	{    
	 
	  try
	  {
	  //  chmod(ROOTPATH.'public/blogImages/'.$image,0777);
	    
	    
	    unlink(ROOTPATH.'public/blogImages/'. $this->imgFileName);
	    //now need to remove entry from databse
	  $this->handle2->deleteOne($this->blogId);
	  
	 $session->setFlashdata('info', 'blog deleted');
								       
								       return redirect()->to('admin');
	  
	  
	  
	  }
	  
	  catch ( \Exception  $e)
			 {
			 $data = [
						'title'  => 'info',
					  
				   'info'=>'something  went wrong with deleting blog',
				   'infoException'=>$e->getMessage(),
				    'date'=>$date
					 ];

				
				echo view('info2', $data);
				
				  
		   
			 die();
			 //above try catch works 
		   }
	  
	  
  }
	  
	     
	    }
	    
	    
	    public function editBlogForm()
	      {
			
	    $handle = new BlogModel();
		$result= $handle->getAll();
		$data =[
		'title'=>'andything',
		'blogs'=>$result,
		'date'=>$this->myDate
		];
				
  	       
		echo view('editBlogForm',$data);
		
	    
	    	    
	    }
	    
	    
	    
	    
	    public function editBlog($slug)
	    
	    {
	   
	    
	    
	    $handle= new BlogModel();
	    $result= $handle->getArticle($slug);
	    
	   
	   
	   $data =[
		'title'=>'andything',
		'blog'=>$result,
		'date'=>$this->myDate
		];
				
  	       
		echo view('doEditBlog',$data);
		
	   
	   
	    }
	    
	   
	    
	    public function processEditBlog()
	    
	    {
		   	$session = \Config\Services::session();
		   
		    
	     $this->title = $this->request->getVar('title'); 
	   $this->article = $this->request->getVar('article');
	   $this->blogId= $this->request->getVar('Id');
	    $this->slug= url_title($this->title);
	    $utilityHandle= new Utility();
	    $this->cleanedTitle=$utilityHandle->badChars($this->title);
	   $this->cleanedArticle=$utilityHandle->badChars($this->article);
	     $this->slug= url_title($this->cleanedTitle);
	   

	    $handle= new BlogModel();
	 if (($handle->getOneToDel($this->blogId)) ==Null)
	 
	 {
	
	 
	return redirect()->back()->with('info', 'have you been drinking no such Id for any blog ');

							
		  exit();				
						
						 
	 
	 }
	 
	
	   else
	   {
	   
	   
	   try
	   {
	 
	   
	$result=   $handle->amendBlog($this->blogId,$this->cleanedTitle,$this->cleanedArticle,$this->slug);
   }
   
   catch ( \Exception  $e)
			 {
			 $data = [
						'title'  => 'info',
					  
				   'info'=>'something went wrong with editing blog ',
				   'infoException'=>$e->getMessage(),
				   'date'=>$this->myDate
					 ];

				
				echo view('info2', $data);
				
				
				  
		   
			 die();
			 //above try catch works 
		   }
   
   
   
   
	   
	     if ($result == 1) 
	     {
	       $session->setFlashdata('info', 'edit successful  ');
	    
	    
	      return redirect()->to('admin');
		
	     
	     
	     
	     
	     }
	     
	     }
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    }
	    
	    
	    
	   
	    
	    
	    
	    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
}
