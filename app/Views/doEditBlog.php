
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>
            <div class="mx-2">As you can see the content of the blog as it is in the database is populated out, with the existing text. 
          <p style="color:red">  do not but html markup around the text in the title box , because its already coded for style</p>  You can use :<br> 
            &#60;p&#62; and             &#60;&#47;p&#62;  to define paragraphs . <br> 
             &#60;i&#62; and             &#60;&#47;i&#62;  to make some text italic <br>
             &#60;b&#62; and             &#60;&#47;b&#62;  to make some text bold <br>
             
             In the blog article because its saved into a database and echo&#39;d out by php ; its possible to define fonts in the article ;
             
             do it like green text below  without quoatation marks around the font,  as you would normally do with html : <br>
             
          <p style ="color:green">   &#60;h4 class=kaushanscript&#62;   some text     &#60;&#47;h4&#62;  </p>
             
             Available fonts are : 
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
			          <h4 class ="aaargh">aaargh</h4>
			
			
			
			
			
			
			
			<p>	You might notice i havent coded to change picture. Because if you want to do that just delete a whole blog and start again .	</p>     <br><br>
			<h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
			
			</div>


			 <?= form_open('doEditBlog'); ?>
		<?= csrf_field() ?>

			    <div class="form-group  ms-2"> 
			    <label for="title">Blog Title</label>
			    <input type="input" name="title" id ="title" class="form-control" value="<?php echo htmlspecialchars($blog['title']); ?>"/><br />
			    </div>
    
    
                             <div class="form-group  ms-2"> 
			    <label for="title">Id </label>
			    <input type="input" name="Id" id ="title" class="form-control" value="<?php echo $blog['Id']; ?>"/><br />
			    </div>
    
                           
    
			    <div class="form-group  ms-2"> 
			    <label for="theArticle">Blog Article </label> 
			    <textarea class="form-control" id ="thArticle" rows="7" cols ="45" name ="article" required ="true"  ><?php echo htmlspecialchars($blog['article']); ?></textarea>
			   </div>
	   
			   <br><br>
	    
			    <div class="form-group  ms-2"> 
			   <button  type="submit" class ="btn btn-primary" value="submit" />Submit</button>
			   </div>
                     			   
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
