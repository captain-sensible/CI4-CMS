
<br><br>

<?=$this->extend('adminLayout') ?>
			<?=$this->section('content') ?>
            <div class="px-2 ">
			<p style ="color:red"> Below  is a list of blogs , with an Id number to enter into blogId field below. Enter Blog Id and lick submit to delete a blog  		</p></div>

<div class ="delBlogImg2">
	
<?php 
foreach ($blogList as $list)

{



echo "  <div class =\"logo\">   <br><br class ='clearfix'>     <img class = \"img-fluid\"   src =\"blogImages/".$list['image'] . "\">    title is :      ".$list['title']. "<br> Id to use to delete in color red  is : <p style ='color:red'> ".$list['Id']."</p></div>    " ;


}


?>

	

 </div>

<br><br>

<div class ="mx-2">

<?= form_open('delBlog') ?>
<?= csrf_field() ?>

    <div class="mb-3">
    <label for="blogId">Blog Id </label>
    <input type="input" name="BlogId" id ="BlogId" class="form-control"/><br />
     </div>
   
   
    <div class="form-group mb-3"> 
			 <h1 style ="color:red";>  <?php echo $info ;?></h1>
			  	 <h1 style ="color:red";>  <?php echo session()->getFlashdata('info'); ?></h1>
			  
			   </div>
			
   
   
 
			 



    <input type="submit" name="submit" class="btn btn-info"value="submit" />

<?php echo form_close();?>

	</div>		 
			 

			<br><br>
					  
			<?=$this->endSection()?>
			 
			 
 
