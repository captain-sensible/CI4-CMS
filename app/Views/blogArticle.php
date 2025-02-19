
<br><br>

<?=$this->extend('webLayout') ?>
			<?=$this->section('content') ?>
           <br><br>
           
            <div class="mx-2">
         
			
			<?php 

			$font= "newtimes";
			
//echo "<h4 class = \"".$blog['font']."\" ><p>".$blog['title']."</p></h4>"."Posted : <p> ".$blog['date']."</p>"; 

echo "<blockquote class=\"prophet\">" ;

echo "<h4 class = \"".$blog['font']."\" >".$blog['title']."</h4>"."<h4 class=\"bible\"> Posted :  ".$blog['date']."</h4>"; 


echo "</blockquote>";


echo "<br>";
echo "<br>";
echo "<div class=\"delBlogImg2\">";
echo "   <div class =\"blogArticleImg\">  <img class = \"img-fluid \"   align= \"left\"             <img src =".base_url('blogImages')."/".esc($blog['image']).">  </div>"; 
echo "</div>";



echo "<br class =\"clearfix\"><br>";
echo "<br><br>";
echo "<div class =\"mx-2\">".esc($blog["article"],'raw') ."</div>";



echo "<br>";



?>

			
			
			
			
			   <br><br>
			</div>


			 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
