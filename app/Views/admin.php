
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>


			 
			 <br><br>
			 
<div class="ms-2 ">
				
							
						
						
						<p>
							
						
							
						To create a <b>new blog</b> go to :   <a href ="newblog">new blog </a> <br>
						To <b>edit a blog</b> go to :  <a href ="editBlogs">edit blogs</a>  <br>
						To <b>delete a blog </b> go to : <a href ="removeBlog">delete a blog </a> <br><br><br>
						
						
						To <b>remove an Image from Gallery  </b> go to <a href ="delGallery">Remove from Gallery</a><br>
						
						To <b>add Gallery Image  </b> go to <a href ="addGallery">Add Gallery  </a><br>
						
						
						To <b>logout go to </b>: <a href ="logout">logout</a><br>
						
						
						To <b> reset admin password go to </b><a href = "resetPW">resetAdminPW </a></br>
						
						
						
						</p>
					
						<h5 style ="color:red; margin-left:10px">direct url to get back to this page ,if logged in is:  /admin </h5>		
							
							
							
						<h4 style ="color:green; margin-left:10px">	<?php echo $info; ?></h4>
						 
								       	 <h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
	
							
						</p>     <br><br>
										
		
		
		
		
		
		
		
		
		
		
		
</div>


			 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
