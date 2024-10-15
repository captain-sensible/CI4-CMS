<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\Controller;
use \App\Models\GalleryModel;
use App\Controllers\Utility;
use CodeIgniter\I18n\Time;


class Gallery extends BaseController
{
         protected $placeHolderImg;    
         protected $imageSlug;
		 protected $logicResult;
		 protected $galleryId; 
		 protected $galleryImageDel;
		 protected $imageSize;
		 protected $imageUploaded;
		  protected $nameImgFile; 
		  protected $imageFileName;
		  protected $imageFileNameRenamed;
		  protected $tempImgFile;
		  protected $file;
        protected $title;
        protected $cleanTitle;
        protected $slug;
        protected $id;
		protected $portfolioId ;
        protected $galleryImagePath="galleryImages";
	    public function __construct() 
				    {
						parent::__construct();
						$this->myTime = parent::getTime();
						$this->myDate= date("d/m/Y",$this->myTime); 	
								       }
		
		public function displayGallery()
				{
			      	 $handle = new GalleryModel();	
					 $mycount= $handle->isEmptyGallery();
					 $count= $mycount["COUNT(*)"];
					 if(($count ==0)OR ($count==null))
							 {
							$data = [
							'title'  => 'info ',
							'date'=>$this->myDate,
							'info'=>'currently gallery is empty'
									];	 
								echo view('info',$data);
							  die();
							 }
						else
					{
						 $data = [
						 'title'=>'paginate',
						'result' => $handle->paginate(5),
						'pager' => $handle->pager,
						'date'=>$this->myDate
					];
					return  view('displayGallery',$data);
			
					}
				}
				public function addGalleryDo()
  
				{
	                 $session = \Config\Services::session();
	                 $this->title=$this->request->getVar('title'); 
					 $utilityHandle = new Utility();
					$this->cleanTitle= $utilityHandle->badChars($this->title);
					$this->slug=url_title($this->cleanTitle);
					
					//now process image file 
					$this->imageFile =   $this->request->getFile('galleryImage');
				    $this->imageFileName = $this->imageFile->getName(); 
				   //above gets name of originbal file 
								
				    $this->tempImgFile = $this->imageFile->getTempName();
					$imgHandle= new  ImgPreCheck();
										
					
					 $logic= $imgHandle->extCheck($this->imageFileName);
	                 if($logic == 0)
						{
						$session->setFlashdata('info', 'that is not an image file please    ');
					    return redirect()->to('addGalleryForm');
						exit();
						}
	                   
	                   
	                      $this->imageSize= $imgHandle->getFileSize($this->tempImgFile);
						if($this->imageSize > 700000)
					
								{
								 $session->setFlashdata('info', 'image file too large please reduce below 700k     ');
					    		 return redirect()->to('addGalleryForm');
								 exit();
							 }
	                   
	                   
	                   
	                     //will have to remove chars , form slug then with image renamed check if mage with that name exists 
	              
	              
	                     $this->placeHolderImg =     $utilityHandle->allBadChars($this->imageFileName);
	                     $this->imageSlug=  $utilityHandle->removeWhiteSpace($this->placeHolderImg);
	 	             	 $logic = $imgHandle->allReadyExists($this-> galleryImagePath,$this->imageSlug);
		                  if ($logic==true)
							  {
							   $session->setFlashdata('info', 'name of image after processing removing whitespace  exists  ');
							   
							   return redirect()->to('addGallerForm');
							   exit();
						   }
		            //move image and insert into db now since everything else ok with try block 
						  try
						  {
							$galleryModelHandle = new GalleryModel();
							$galleryModelHandle->insertGallery($this->imageSlug,$this->cleanTitle,$this->slug);
						 //   @chmod(ROOTPATH.'public/galleryImages', 0777 );
							$this->imageFile->move(ROOTPATH.'public/galleryImages', $this->imageSlug);		
						  //$file->move(WRITEPATH . 'uploads', $newName);
						}
  
  //catch here 
                        catch ( \Exception  $e)
						 {
						 $data = [
									'title'  => 'info',
								    'info'=>'somwething went wrong '.$e->getMessage(),
							        'date'=>$this->myDate
							   	 ];
							
							echo view('info', $data);
							die();
						 //above try catch works 
					   }
				 $data =[
				'title'=>'gallery',
				'info'=>'looks like a new arty img was added to gallery  ',
				'date'=>$this->myDate
				];
		        echo view('admin',$data);
  
				}//end addGallery method
	
				public function galleryAddForm()
				
				{
				$data = [
												'title'  => 'info',
											  
										   'info'=>'',
										   'date'=>$this->myDate
										   
											 ];	
					
					
				echo view('addGalleryForm',$data);
				
				}
	
	
		 public function delGalleryForm()
         {
		 $handle = new GalleryModel;
	     $result= $handle->getAllDo2();
		 $data = [
                'title'  => ' ',
               'date'=>$this->myDate,
                'result'=>$result,
                'info'=>''
		       ];  
	    echo view('removeGalleryForm',$data);
      }


 public function delGalleryDo()
 
 {

	 $this->galleryId= $this->request->getVar('galleryId'); 
	 echo $this->galleryId;
	$handle= new GalleryModel();
	$logicResult2 =$handle->doesGalleryIdExist($this->galleryId);
	$number= $logicResult2["COUNT(*)"];
	if ($number == 0)
	{
	 $session = \Config\Services::session();
	 $session->setFlashdata('info', 'there is no such gallery item with that id  ');	
	 return redirect()->to('admin');
	}
	
	elseif($number > 0)
	{
	  $result= $handle->getOneToDel2($this->galleryId);
     $this->galleryId= $result['Id'];
     $this->galleryImageDel=  $result['image'];//works so now use name image to unlink and dlete from db
  
     $imgHandle= new  ImgPreCheck();
     $this->logicResult = $imgHandle->allReadyExists($this->galleryImagePath, $this->galleryImageDel);
     if ($this->logicResult == true)
 
			 {
				 
			 unlink(ROOTPATH.'public/galleryImages/'.$this->galleryImageDel);
			 $handle->delOneGallery($this->galleryId);
			 $data = [
							'title'  => 'removev gallery ',
						   'date'=>$this->myDate,
						   'info'=>'seems image was deleted from gallery '
					];  
				  echo view('admin',$data);	 
			  	 }
 
			elseif ($this->logicResult == false)
 
					 {
						 $handle->delOneGallery($this->galleryId);
						 $data = [
									'title'  => 'removev gallery ',
								   'date'=>$this->myDate,
								   'info'=>'seems no image but entry deleted from db  '
							];  
						  echo view('admin',$data); 
					 }
					 
  }   
}
}
