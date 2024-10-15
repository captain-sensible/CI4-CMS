
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>

<?= form_open('setUpDo') ?>
	<?= csrf_field() ?>		 
				 
	<div class="mb-3">
    <label for="username" class="form-label"> &nbsp;enter username below</label>
    <input type="text" class="form-control" id="username" name="name">
  </div>			 
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> &nbsp;Enter Password Below </label>
    <input type="password" class="form-control" id="exampleInputPassword1"  name="password">
  </div>
  
  
  <div class="form-group">
  <label for="sel1">Role:</label>
  <select class="form-control" id="sel1" name="list">
    <option>admin</option>
    <option>editor</option>
    
  </select>
</div> 
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
			 
			 
			    <br><br>
							
		
		
		
		
		
		
		
		
		
		
		
			</div>


			 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
