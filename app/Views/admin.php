
<br><br>

<?=$this->extend('adminLayout') ?>
			<?=$this->section('content') ?>


			 
			 <br><br>
			 
<div class="ms-2 ">
				
							
						
						<h4 class ="bible">This is a place holder page  , it will be replaced by pages to do tasks when you choose from menu left</h4> 			
						<br><br>
						<h4 class="bible">If you some how whilst still logged in lose this page just type  /admin   following the domain name. If your logged out typing /admin will give a no such page </h4>		
							<br><br>
							
						<h4 class ="info2">	<?php echo $info; ?></h4>
						 <br><br>
								       	 <h4 class ="info">  <?php echo session()->getFlashdata('info'); ?></h4>
	
							
						</p>     <br><br>
										
		
		
		
		
		
		
		
		
		
		
		
</div>


			 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
