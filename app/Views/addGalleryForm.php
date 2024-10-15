
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>
            <div class="mx-2 ">
			<h4><p  style ="color:green">	In the form below  you enter data such as the title (description of image being uploaded). This will be
		 	rendered out when data is fetched from the database. 	</p>  </h4>   <br><br>
			</div>


			  <?= form_open_multipart('addGallery'); ?>
			<?= csrf_field() ?>
		
		    
			
			<div class="mx-3"> 
			<label for="title" class="form-label">Title to give for Image </label>
			<input type="input" name="title" id ="title" class="form-control"/><br />
			 </div>
    
            	    
	    
	    
				<div class=" mx-2"> 
			    <label for="image"></label>
			   <label for="image" class="form-label">Use browse button below to navigate to image thats needed to be uploaded </label>
			   
			   
			    <br><br>
			    <input type="file" class ="btn btn-info" name="galleryImage" size="20" id="gallery" required ="true"/>
			    </div>
	      <br><br>     
	              
	    
			    <div class="mx-2"> 
			   <button type = "submit" class ="btn btn-primary"  value ="submit">Submit</button>
			   </div>
                      <br><br>     
			   
			   <div class="mx-2"> 
			
			
			
			
			   	 <h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
			 
			   </div>
			   
			   
			   
		   <?php echo form_close();?>


			 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
