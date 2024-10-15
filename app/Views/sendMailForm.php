
<br><br>

<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>
          
          
          
            <div class="p-2 bg-success">I have a padding on all sides (3rem)
			<p>		</p>     <br><br>
			</div>


			 <?=form_open('contact') ?>

<?= csrf_field() ?>

      <!--
	  <input type="hidden"  name="honeypot" value=""/><br>
     <!-- above is hidden field honeypot to filter out bots -->


 <div class="form-group"> 
	 
	  
	  
	  
	 
    <label for="theirName">Name</label>
    <input type="input" name="name" id ="theirName" class="form-control"/><br />
     </div>
    
			 <div class="form-group"> 
			<label for="name">Your Email </label> 
			 <input type="email" class="form-control" id="theirEmail" name ="email" placeholder=" " required ="true"> 
			 </div> 
    
 
   
 <div class="form-group"> 
			 <label for="theirMessage">Message </label> 
			 <textarea class="form-control" id ="theirMessage" rows="3" cols ="24" name ="message" required ="true"  ></textarea>
			  </div>
			 



    <input type="submit" name="submit" class="btn btn-info"value="submit" />
<?php echo form_close();?>

			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
