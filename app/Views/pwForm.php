
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>

<?= form_open('resetPw') ?>
	<?= csrf_field() ?>		 
			
	<input type="hidden" id="adminId" name="adminId" value= "  <?php echo $adminId; ?> " />		
				 
	<div class="mx-2">
    <label for="username" class="form-label"> &nbsp;enter admin username below</label>
    <input type="text" class="form-control" id="username" name="name" required ="true" >
  </div>			 
  
  <div class="mx-2">
    <label for="exampleInputPassword1" class="form-label"> &nbsp;Enter Password Below </label>
    <input type="password" class="form-control" id="exampleInputPassword1"  name="password"  required ="true">
  </div>
  
  
  <div class="mx-2">
  <label for="sel1">Role:</label>
  <select class="form-control" id="sel1" name="list">
    <option>admin</option>
     </select>
  
 <br><br>
  
</div> 
  <div class="mx-2">
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
			 
			 
			    <br><br>
							
		
		
		
		
		
		
		
		
		
		
		
			</div>


			 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
