
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>

		 
			 
			 
			<div class="mx-2">
			<p>		Default user name is :Demo<br><br>
			Defualt Password is : Demo 
				</p>     <br><br>
			</div>

                  <div class="mx-auto" >
			 <?= form_open('login') ?>
			<?= csrf_field() ?>
        
            
			 <div class="form-group"> 
			    <label for="user">Name</label>
			    <input type="input" name="user" id ="usr" class="form-control" required = "required"/><br />
			     </div>
    
			
    
			 <div class="form-group"> 
			    <label for="userPassword">Password</label>
			    <input type="password" name="userPassword" id ="usrPassword" class="form-control"  required = "required"   /><br />
			     </div>
    
   
                             <div class="form-group"> 
			    <label for="captcha">Numbers Below Submit Button </label>
			    <input type="input" name="captcha" id ="theCaptcha" class="form-control"  required = "required"     /><br />
			     </div>
			 
            

  
			    <input type="submit" name="submit" class="btn btn-info"value="submit" />

			<?php echo form_close();?>


</div>




			
			<br class ="clearfix"><br>
			
		
			
			 
				
			 <div class="mx-auto" >
							
					        
			
			
			
			<img  class="img-fluid"   src ="<?php echo base_url()."/captcha/".$captcha[0].".png";?>">
			<img class = "img-fluid"   src ="<?php echo base_url()."/captcha/".$captcha[1].".png";?>">
					
			<img class = "img-fluid "   src ="<?php echo base_url()."/captcha/".$captcha[2].".png";?>">
			<img class = "img-fluid "   src ="<?php echo base_url()."/captcha/".$captcha[3].".png";?>">
			
			<img class = "img-fluid "   src ="<?php echo base_url()."/captcha/".$captcha[4].".png";?>">
			
			
			</div>
		
			
			
			<br><br>
			
			




			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
