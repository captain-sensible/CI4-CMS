
<br><br>

<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>
           
   
           
    <div class="mx-2">
	<h4 class ="caroni">	<p>List of blogs is as follows</p></h4>

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
			 
			 
 
