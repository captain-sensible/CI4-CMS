
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>


			  <?= form_open_multipart('newblog'); ?>
			<?= csrf_field() ?>

			 
			 
			


			
			<div class="form-group ms-2"> 
			This is the place to create a new blog 
				 </div>	    
                <br><br>
                <div class="form-group  ms-2"> 
			    <label for="date">Date of Post (eg  15 February 2020)  </label>
			    <input type="input" name="date" id ="date" class="form-control" value =" "/><br />
			    </div>

			    <div class="form-group  ms-2"> 
			    <label for="title">Blog Title</label>
			    <input type="input" name="title" id ="title" class="form-control"/><br />
			    </div>
			      
			        <div class="form-group  ms-2"> 
			      <label for="font">Choose a font see below for style </label>

<select name="font" id="font">
  <option value="kaushanscript">Kaushanscript</option>
  <option value="caroni">Caroni</option>
  <option value="quintessential">Quintessential</option>
  <option value="quintessentialBlue">quintessentialBlue</option>
  <option value="quintessentialViolet">quintessentialViolet</option>
  <option value="dancing-script-ot">Dancing Script</option>
  <option value="shangrilanReg">Shangrilan</option>
  <option value="magnolia">Magnolia</option>
  <option value="optimanormal">Optima Normal</option>
  <option value="newtimes">New Times Roman</option>
  <option value="lemonchicken">Lemon Chicken</option>
  <option value="kingsthingsLite">Kings Things Lite</option>
<option value="amadeus">Amadeus</option>
<option value="antic">Antic</option>
<option value="anticSlab">AnticSlab</option>
<option value="aaargh"> aaargh</option>


</select>
	</div>		      
			      
			      
			       <br>
			   
			    <div class="form-group ms-2"> 
			    <label for="theArticle">Blog Article </label> 
			    <textarea class="form-control" id ="thArticle" rows="3" cols ="24" name ="article" required ="true"  ></textarea>
			   </div>
	           
	           
	           
	           <br><br>
			
			
			
			
			   <div class="form-group  ms-2"> 
			    <input type="file" class="btn btn-info" name="userfile" />
			     </div>
	           <br><br>
			    <div class="form-group ms-2"> 
			   
			   <button type="submit" class="btn btn-primary"  value="submit">Submit</button>
			   
			   <br><br>
			   </div>
                        <h3>From drop down choice above choose a font for blog title they are as follows </h3>
                <h4 class = "kaushanscript"> h4 kaushanscript </h4> 
				<h4 class="caroni">H4 caroni </h4>
				<h4 class="quintessential">h4 quintessential  </h4>
				<h4 class ="quintessentialBlue"> h4 quintessentialBlue</h4>	
					<h4 class ="quintessentialViolet">h4 quintessentialViolet</h4>
					
					<h4 class="dancing-script-ot"> h4 dancing script  </h4>
					<h4 class="shangrilanReg"> h4 shangrilan  </h4>
					<h4 class="magnolia">h4 magnolia  </h4>
					<h4 class="optimanormal">h4 optima normal  </h4>
					<h4 class ="newtimes">h4 new times roman  </h4>
					 <h4 class ="lemonchicken">h4  lemon chicken </h4>
					<h4 class="antic">h4 antic</h4>
					<h4 class="anticSlab">anticSlab</h4>
			        <h4 class="newtimesroman">newtimes roman</h4>
			        <h4 class="aaargh">aaargh</h4>
			   <div class="form-group  ms-2"> 
			 <h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
			   </div>
			   
			 
			 

			<br><br>
				<?php echo $date; ?>	  
			<?=$this->endSection()?>
			 
			 
 
