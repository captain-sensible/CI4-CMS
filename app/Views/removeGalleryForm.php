
<br><br>


  <?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>        
          
          
          
            

<div class ="delGalleryImg">
			 	
			
			
	
			
				
				<?php 
				foreach($result as $res) 
				{
				echo    $res['imageTitle'].     "  <br><br>   <img  src =".base_url('galleryImages')."/".$res['image']. "><br class='clearfix'><p style= \"color:red\"> Id to use is :" .$res['Id'].          "</p><br>";
				}
				
				 ;?>
				 
				 
				
				
			</div>	

<div>

<?= form_open('delGallery') ?>
<?= csrf_field() ?>

	<div class="mx-3"> 
    <label for="blogId">Gallery  Id </label>
    <input type="input" name="galleryId" id ="gallery" class="form-control"/><br />
     </div>
    
    
    <button  type="submit" name="submit" class="btn btn-primary mx-3" value="submit" />Submit </button>

<?php echo form_close();?>
	        <div class="mx-3"> 
			 <h1 style ="color:red";>  <?php echo $info ;?></h1>
			   </div>		 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
