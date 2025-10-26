



          
#readMe   

A very light blog engine CMS alternative to W.P using Codeigniter 4.6.3  Bootstrap 5. and Sqlite3 database. 
There is a grunt file in the web root to work with  scss  and update everything including in the browser, as you go using grunt watch


Breakpoints are included in the style sheets, so CI4-CMS  is mobile responsive. 

<img src="https://andrinaboutique.com/images/mobile-responsive.png" height ="500px">

 The main view file is webLayout.php and is found in app/Views. This file contains really everything needed, the header and footer stuff , but leaves out the specific page content of individual web pages. For individual web pages they leverage the use of the main webLayout.php as follows:  
 
>
>  <?=$this->extend('webLayout') ?>  
> <?=$this->section('content') ?>  
   <h4 class="bible">text for individual web page  inserted between the starting content tag above, and end section below</h4>
  
> <?=$this->endSection()?>

See CodeIgniter4 layout templates :[templates](https://codeigniter4.github.io/userguide/outgoing/view_layouts.html)
 


 
I've added some content security policy via a meta tag in the main webLayout (line 9 of webLayout.php)  view  but i've commented it out since it seems to block the debug bar . It can be un-commented when web moves from development to production 

Because with some incremental updates for the CodeIgniter4  can cause breaking changes, i have fixed the CodeIgniter4 version in the Composer.json file to 4.6.3 with the line:  

 "codeigniter4/framework": "4.6.3"  
 
To update the core CI4,  edit that line in Composer.json to the next release number,then  run the command from a terminal :
 
			composer update 
			
then follow instructions on the CI4 guide :
 
[upgrade from one version to another guide](https://codeigniter.com/user_guide/installation/upgrading.html)
 
 










Now to make things easier i have set up a user (with role of admin powers ) as follows:  


>User : Demo <br>
>Password : Demo  <br><br>

For ease to of playing  with system ive put login URL into the navbar, you can remove that on moving to production;  URL for admin login is /blackcat

After logging in you should see: 
<img src ="https://andrinaboutique.com/images/admin-page.jpg" width ="550px">







