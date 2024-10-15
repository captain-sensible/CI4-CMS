<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>

<br><br>
<div class ="px-2">


<h4 class="quintessential">

</h4>
<p>##################################################################################</p>
<p>The content contained between the top and bottom hash tag line , is from landingPage.php <br><br>
 The menu navbar  content is all  contained in a file called  navbar.php ;  and is located app/views</p>
 
 <p> In webLayout.php which is the main content for all web pages is this code:<br><br>
   &#60;?= $this->include('navbar') ?&#62;
 <br><br>
 A menu navbar is common to all web pages; needed by all web pages, so that code
 is put directly into webLayout.php and  will make sure the content of navbar.php is always included when
  the view webLayout.php is rendered. 
 . </p>
 
 <p>The content of other web pages is different , so for all other web pages,
  content to be included into the main template will at the beginning contain the two lines below:<br><br>
 
 
 
 &#60;?=$this->extend('webLayout') ?&#62;<br>
 &#60;?=$this->section('content') ?&#62;<br><br>

The first line above simply gives notice that the contents of a file say &#34; landingPage.php&#34;that have those two lines at the beginning 
will be included into the main template page which is webLayout.php.
The second line is to mark out that content to be included will start after that line.Content to be included will end at the last line before:




 : <br><br>
&#60;?=$this->endSection()?&#62;<br><br>
		



<a href="https://codeigniter4.github.io/CodeIgniter4/outgoing/view_layouts.html"> See docs for layout CI4</a>

<br><br>
Really the only crucial thing you have to do is edit the controller Sendmail.php in app/Controllers 
The section you need to edit is the credentials for your own gmail account , if you are going to use that as a rely for the &#34; contact us &#34;
 data to get sent to the recipient you want. Other wise use your smtp web hosting account have a gander at :
 <a href "https://github.com/PHPMailer/PHPMailer ">PHPMailer at github info</a>


</p>
<p>############################################################################</p>
	 <h4 class ="lemonchicken">  </h4><br>
	 





 
 

</div>

<?=$this->endSection()?>
