<?php namespace App\Controllers;

/**
 * @author Andy Brookes 
 * @author Andy Brookes <andybrookestar at gmail  dot    com>
 */

class ImgPreCheck   extends BaseController
{

	protected $imgFileName;
	protected $fileTmpName;
	protected $fileSize;
	protected $fileExt;
	protected $fileExtensionAllowed =array("gif","jpeg","jpg","png","svg");
        protected $finfoHandle;
        protected $mimeResult;
       protected $mimeParts;
       protected $mimeEnd;
       protected $checkExists;


public function hello()
{
return "hello  from ImgPreCheck controller";	
}	


   



  
    

public function allReadyExists($directory,$someFile)
   
    {
				//$imageFile= strtolower($someFile);
				
				$imageFile=$someFile;
				
				if (file_exists ($directory."/".$imageFile))
				{
				$this->checkExists =True;
			   
				}

				elseif(!file_exists($directory."/".$imageFile))
				{
				$this->checkExists=False;	
				}
				return $this->checkExists;
		
		}
    










	function extCheck($someFile)
	{
		$this->imgFileName = strtolower($someFile);	
		$ext = explode(".",$this->imgFileName);	
		$this->fileExt = $ext[1];
		if(in_array($this->fileExt,$this->fileExtensionAllowed))
		{
		return 1;
		}
        else
        {
		return 0;	
		}	
	 
	
	}	


    function getFileSize($tmpName)
    {
	$this->fileTmpName = $tmpName;
    $this->fileSize= filesize($this->fileTmpName);
    return $this->fileSize;		
		
   }		

    function MimeType($tmpName)
   {
	   $this->finfoHandle = new finfo(FILEINFO_MIME_TYPE);
	  $this->mimeResult =  $this->finfoHandle->file($tmpName);
	  $this->mimeParts= explode("/",$this->mimeResult);
	 $this->mimeEnd = $this->mimeParts[1];
	  if(in_array($this->mimeEnd,$this->fileExtensionAllowed))
	  {
		  
	   return True;	  
   }
	   else 
	   {
		   return False;
	   }
	  } 
	  
	  
	  
	  
	
	  
	  
	  
	  
	  
	  
	  
	  

}
?>
