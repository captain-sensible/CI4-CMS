
<br><br>

<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>
          
          
          
            <div class="mx-2">
			<p>		</p>     <br><br>
			</div>		<br><br>
				<div class ="portfolio mx-2">

<br><br><br>

<?php 

foreach($result as $stuff)

{

echo  " <div class =\"item\"> "  . $stuff['imageTitle'] .     "<img class = \"img-fluid\"                src =".base_url('galleryImages')."/".$stuff['image']."><br><br class=\"clearfix\"> </div><br>";


}

?>
<br class ="clearfix"><br>

<br>

</div>
<br><br>
<div>
	
	<h4>pages : </h4>
	
	<h3 class ="links"><?= $pager->links() ?></h3></div>
		  
			<?=$this->endSection()?>
			 
			 
 
