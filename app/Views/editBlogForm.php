
<br><br>

<?=$this->extend('adminLayout') ?>
			<?=$this->section('content') ?>
            <br><br>
            
             <div class="mx-2 "> 
			<p  style="color:red">	This page is showing blogs as a list in the context of ADMIN that can be edited .If you click onto any link below it will take you to 
			an edit page for the blog you selected  	</p>     <br><br>
			
			<br><br>
			
			
			
			
	<?php

foreach($blogs as $blog)
{





 echo "<p><a href = editOneBlog/" . $blog['slug'] .  "> ".  $blog['slug']  ."         </a> </p>";  

}




?>
		
			
	</div>		
			
			
					  
<?=$this->endSection()?>
			 
			 
 
