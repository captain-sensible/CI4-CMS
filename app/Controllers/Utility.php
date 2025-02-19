<?php namespace App\Controllers;

//use CodeIgniter\Controller;

class Utility  extends BaseController
{
	protected $convertedQuotes;
	protected $cleanChar1;
    protected $cleanChar2;
    protected $cleanCharAll;
    protected $filteredChars;
    protected $filteredChars2;
    protected $filteredChars3;
    protected $textPattern4 = '/[^\w<>\s&#.\/;]/';//this seems to select all chars but will not find <script></script>
	protected $whitespace = '/[\s]/';
	protected $whitespace2= '/[^a-zA-Z0-9 ]/';
	
	
	protected $cleanedOfWhitespace;
	
	
	protected $mType;
	protected $scriptPattern= [  '<script>','</script>' ] ;
	protected $badChars2 = ["'",'"',"`" ];

    protected $cleanedFromChars;
    protected $cleanedFromAllBadChars;
    protected $badCharsAll= [
       '<script>',
       '</script>',
       '~',
       '@',
        '`',
        '(',
        ')',
        '%',
        '^',
		'../',
		'<!--',
		'-->',
		'$',
		'{',
		'}',
		'[',
		']',
		'=',
		'?',
		'%20',
		'%22',
		'%3c', // <
		'%253c', // <
		'%3e', // >
		'%0e', // >
		'%28', // (
		'%29', // )
		'%2528', // (
		'%26', // &
		'%24', // $
		'%3f', // ?
		'%3b', // ;
		'%3d',   
		"'",
		'"',
		 '*',
		 '`',
		 '#'
		// =
	];

    
    
    
    
    
	

	public function checkMime($input)
	{
			if(($input=="application/msword")||
			($input=="application/vnd.openxmlformats-officedocument.wordprocessingml.document") ||
			($input=="application/zip")||($input=="application/vnd.ms-powerpoint")||
			($input=="application/pdf"))
				{
				Return True;
				}											

				else
				{
				Return False;
			
				}

	}
	
	
	public function badChars($input)
	
	{
		
		$string= $input;
		
        $this->cleanedFromChars = str_ireplace($this->badChars2,"",$string);
        return $this->cleanedFromChars;
        
     
        
	}
	
	
	public function removeWhiteSpace($input)

	{
     $string =$input;
     $this->cleanedOfWhitespace = preg_replace($this->whitespace,"",$string);	
      return  $this->cleanedOfWhitespace ;
	}
	
	
	
	
	public function allBadChars($input)
	
	{
		
	$string= $input;
		$this->cleanedFromAllBadChars = str_ireplace($this->badCharsAll,"",$string);
		return $this->cleanedFromAllBadChars;
		
	}	
	
	
	
	
	
	
	public function convertQuotes($input)
	{
	$this->convertedQuotes= str_ireplace($this->badChars2,"&#39;",$input);
	return $this->convertedQuotes;	
	}
	
	public function  newRegex($input)
	
	{
	$cleanChars= 	 preg_replace($this->textPattern4,"",$input);
	return $cleanChars;
		
	}	
	
	
	public function removeScript($input)
	{
	$ridScript= str_ireplace($this->scriptPattern,"",$input);	
	return $ridScript;	
	}
	
  }
  //end of class
