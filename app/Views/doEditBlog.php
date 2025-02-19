
<br><br>

<?=$this->extend('adminLayout') ?>
			<?=$this->section('content') ?>
            <div class="mx-2">As you can see the content of the blog as it is in the database is populated out, with the existing text. 
          <p style="color:red">  do not but html markup around the text in the title box , because its already coded for style</p>  You can use :<br> 
            &#60;p&#62; and             &#60;&#47;p&#62;  to define paragraphs . <br> 
             &#60;i&#62; and             &#60;&#47;i&#62;  to make some text italic <br>
             &#60;b&#62; and             &#60;&#47;b&#62;  to make some text bold <br>
             
             In the blog article because its saved into a database and echo&#39;d out by php ; its possible to define fonts in the article ;
             
             do it like green text below  without quoatation marks around the font,  as you would normally do with html : <br>
             
          <p style ="color:green">   &#60;h4 class=kaushanscript&#62;   some text     &#60;&#47;h4&#62;  </p>
             
             For font styles go to <a href ="<?php echo base_url('examplefonts');?>"> fonts</a> 
               
                
		
			          
			
			
			
			
			
			
			
			<p>	You might notice i havent coded in the edit ,to change picture. Well if you have everything wrong , have a coffee  delete the   blog and start again .	</p>     <br><br>
			<h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
			
			</div>


			 <?= form_open('doEditBlog'); ?>
		<?= csrf_field() ?>

			    <div class="form-group mx-2"> 
			    <label for="title">Blog Title</label>
			    <input type="input" name="title" id ="title" class="form-control" value="<?php echo htmlspecialchars($blog['title']); ?>"/><br />
			    </div>
    
                <div class="form-group  mx-2"> 
					
					<label for="date">Date </label>
					<input type ="input" name ="date" id = "date"  class="form-control" value="<?php echo htmlspecialchars($blog['date']); ?>"/><br />
					</div>
    
    
    
    
    
                             <div class="form-group  mx-2"> 
			    <label for="title">Id for blog is here but hidden,so its not messed up by mistake</label>
			    <input type="hidden" name="Id" id ="title" class="form-control" value="<?php echo $blog['Id']; ?>"/><br />
			    </div>
    <br><br>
                 <div class=  "form-group mx-3">     
					 <label for="font">Choose New Font for title :</label>
					
					
					 <select name="font" id="fonts">
                  <option value="quintessential">quintessential</option>
				 <option value="kaushanscript">kaushanscript</option>
				 <option value="optimanormal">optimanormal</option>
				 <option value="dancing-script-ot">dancing-script-ot</option>
				 <option value="newtimesroman">new times roman </option>
				 <option value="times-new-roman">Times new Roman </option>
				 <option value="shangrilanReg">shangrilanReg</option>
				 <option value="aaargh">aaargh Font</option>
				 <option value="lemonchicken">lemonchicken </option> 
				 <option value="quintessentialBlue">quitessentialBlue</option>
				 <option value="quintessentialViolet">quintessentialViolet</option>
				 <option value="antic">antic </option>
				 <option value="anticSlab">anticSlab</option>
				  <option value="magnolia">magnolia</option>
				  <option value="caroni">caroni</option>
				  <option value="balgruf">balgruf</option>
				  <option value= "newtimes"> new times </option>
				
				 </select>
                  </div>   
                   
                    
                  <br><br>         
    
			    <div class="form-group  mx-2"> 
			    <label for="theArticle">Blog Article </label> 
			    <textarea class="form-control" id ="thArticle" rows="7" cols ="45" name ="article" required ="true"  ><?php echo htmlspecialchars($blog['article']); ?></textarea>
			   </div>
	   
			   <br><br>
	    
			    <div class="form-group  ms-2"> 
			   <button  type="submit" class ="btn btn-primary" value="submit" />Submit</button>
			   </div>
                     			   
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
