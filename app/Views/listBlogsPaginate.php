
<br><br>

<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>
           
   
           
    <div class="mx-2">
	<br><br>
	
	<h4 class ="caroni">	List of blogs is as follows</h4>
<br><br>
			 <?php 

          

                foreach($blogs as $blogy)
				{



				echo "<h11><a href = blogArticle/" . $blogy['slug'] .  "> ".  $blogy['slug']  ."         </a> </h11> <br> ";  

				 

				}


               

?>
<br><br>
<h4><p>To see all paginated pages click on link numbers below </p> </h4>	 
<h3 class="links"><?= $pager->links() ?></h3>
			<br><br>
</div>	

					  
			<?=$this->endSection()?>
			 
			 
 
