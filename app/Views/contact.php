
<br><br>

<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>
          
          
          
           


			 <?=form_open('contact') ?>

<?= csrf_field() ?>

    


<div class ="ms-2">If you use the form below entering your name , your email address and your message, then the data from the form will 
be emailed to one of our admin. So we are asking for your email so we can get back to you. </div><br><br>

 <div class="form-group ms-2"> 
 <label for="theirName">Your Name</label>
 <input type="input" name="name" id ="theirName" class="form-control"/><br />
  </div>
    
		<div class ="ms-2">If you use the form below entering your name , your email address and your message, then the data from the form will 
be emailed to one of our admin. So we are asking for your email so we can get back to you. </div><br><br>
    
 
   
             <div class="form-group  ms-2"> 
			 <label for="theirMessage">Your Message </label> 
			 <textarea class="form-control" id ="theirMessage" rows="3" cols ="24" name ="message" required ="true"  ></textarea>
			  </div>
			 
<br><br>

        <div class="form-group  ms-2"> 
    <button input type="submit" name="submit" class="btn btn-primary "value="submit" />Submit </button>
    </div>
<?php echo form_close();?>

			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
