<!DOCTYPE html>
<html lang="en">
<head>
	
 <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo $title ?>  </title>
<meta name="generator" content="Geany 1.38" />
<link rel="stylesheet" type="text/css" href ="<?php echo base_url("css/myStyle.css"); ?>">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body>
<div class="d-flex flex-column mb-3 "  >



	
	
	
					         <div class ="headsection"  >  
								 <div class="logo">
									 <img         src = "<?php echo base_url('images/logo.png'); ?>" >
								</div> 			
							    
							   <div class="mx-auto" >
							 <h1 class  ="quintessential" >CI4 CMS  </h1> 
							
					        </div>

                         
					</div>
						 <!-- divider 1st div above  -->        
						 <div class ="contentsection">
						  <?= $this->include('navbar') ?> 
						 <?=$this->renderSection('content')?>
						 </div>
	                      <!-- divider 1st div above  -->   
	
	
	         <div class ="footersection">
				 
				 <div class ="a"> 
				  <a href="https://www.facebook.com/"      target="_blank">	<i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i>	</a>	 </div><div class="a"><a href ="https://www.tiktok.com/@somebody"  target="_blank" >  
					<img   width="50"      src = "<?php echo base_url('images/tiktok.svg'); ?>" >  </a></div>
					
					
				 <div class="a"><a href ="https://www.instagram.com/somebody/"  target="_blank" ><i class="fa fa-instagram   fa-3x"></i> </a></div>
				 
	           <div class="b"> <a href = "https://www.youtube.com/@somebody"  target="_blank"    > <i class="fa fa-youtube   fa-3x"></i>	</a></div>
               <div class= "c"><div><h6>powered by:</h6></div> <a href ="https://sourceforge.net/projects/codeigniter4cms/"><h6>codeigniter4cms</h6></a>    </div>
	 
	
	        </div>	
	       <h5 class="newtimes">© <?php echo $date;?> Some Web  Footer    | All Rights Reserved </h5>	
			</div>
			
			</div>


<script src="<?php echo base_url('js/popper.js');?>"></script>
<script src="<?php echo base_url('js/bootstrap.bundle.js');?>"></script>
<script src="<?php echo base_url('js/jquery-3.5.1.min.js');?>"></script>
<script src="<?php echo base_url('js/jquery-migrate-3.3.0.js');?>"></script>
 
<script>
	$( window ).load(function() {
$("button#2").hide();	
$("p#toggle").hide();
$( "button#1" ).click(function( event ) {
$("button#2").show();
$("button#1").hide();
$("p#toggle").show();
});

});  
		  
	</script>

</body>
</html>
