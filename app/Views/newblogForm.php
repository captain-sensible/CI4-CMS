
<br><br>

<?=$this->extend('adminLayout') ?>
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
  <option value="newtimesroman">New Times Roman</option>
  <option value="times-new-roman">Times New Roman</option>
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
			
			
			
			
			   <div class="form-group  mx-2"> 
			  <label for ="image">If you are going to use embed code for a video, then this image can be an avatar of post writer; you can use the same image each time, since
			  a time stamp is pre-fixed to name of image, so they will always be different. If your not going to have video embed code, this use this to upload an image that is 
			  a visual representation of  blog </label><br><br>
			    <input type="file" class="btn btn-info" name="userfile" />
			     </div>
	          
	          
	          
	          
	          
	          
	           <br><br>
			    <div class="form-group ms-2"> 
			   
			   <button type="submit" class="btn btn-primary"  value="submit">Submit</button>
			   
			   <br><br>
			   </div>
                       
                
			   <div class="form-group  ms-2"> 
			 <h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
			   </div>
			   
			 
			 

			<br><br>
				 
			<?=$this->endSection()?>
			 
			 
 
