
<br><br>

<?=$this->extend('webLayout') ?>
<?=$this->section('content') ?>
   <div class="contentsection p-2 ">       
          
 <h4 class ="h4 quintessential">readMe   </h4><br><br>

<p>A very light blog engine CMS alternative to W.P using Codeigniter 4.6.3  Bootstrap 5. and Sqlite3 database. 
There is a grunt file in the web root to work with  scss  and update everything including in the browser, as you go using &#34;grunt watch&#34;  </p>





 <p>. Breakpoints are included in the style sheets, so CI4-CMS  is mobile responsive. 
 The main view file is webLayout.php and is found in app/Views. This file contains really everything needed, the header and footer stuff , but leaves out the specific page content of individual web pages. For individual web pages they leverage the use of the main webLayout.php as follows:<br>
 
 <blockquote class="prophet">
  &#60;?=$this->extend('webLayout') ?&#62;<br>
 
  &#60;?=$this->section('content') ?&#62;<br>
   <h4 class="bible">text for individual web page  inserted between the starting content tag above, and end section below</h4>
  
  &#60;?=$this->endSection()?&#62;<br><br>
 
 </blockquote>
 </p>
 
 
 <p>For more on using CodeIgniter4 layout templates see:
 <a href="https://codeigniter4.github.io/userguide/outgoing/view_layouts.html">Layouts </a>
 </p>
 
<p>I&#39;ve added some content security policy via a meta tag in the main webLayout (line 9 of webLayout.php)  view  but i've commented it out since it seems to block the debug bar . It can be un-commented when web moves from development to production </p>

<p> Because with incremental updates for the CodeIgniter4  can cause breaking changes, i have fixed the CodeIgniter4 version in the Composer.json file to 4.6.3 with the line <br>
 &#34;codeigniter4/framework&#34;: &#34;4.6.3&#34;<br><br>
 To update edit that line in Composer.json to the next release, run the command from a terminal :<br>
 
 composer update <br>
 
 and then follow instructions at : 
 
 <a href="https://codeigniter.com/user_guide/installation/upgrading.html">Upgrading From a Previous Version</a>
 
 </p>



<p><img src ="https://andrinaboutique.com/images/mobile-responsive.png" height="500px"></p>






<p>Now to make things easier i have set up a user (with role of admin powers ) as follows: <br></p>

User : Demo <br>
Password : Demo  <br><br>

For ease to play with system ive put login into the navbar, you can remove that on moving to production; at which point remember that to get to the login the URL is :

</code></pre><p>So enter those into text box at this :<br><br></p>
<p><code>  http://domain/blackcat</a> </code></p>
<p>You should then  see :</p>
<p><img src ="https://andrinaboutique.com/images/admin-page.jpg" width ="550px"> </p>
<p>The password is encrypted before its stored in database. The code will check if what you enter into
the login textbox  whether  it matches the password (that is encrypted ) in the database. </p>
<p>Once logged in, your are taken to the admin page, where  you can change the user name and password to 
something else . Your new admin  user handle and password will replace the old ones .They wont work until you hit the logout link, to log out and lg back in using new credentials</p>
<p>The link to do that is called &quot;resetAdminPw&quot; .</p>
<p>If you get things working  on local dev, you can just zip up everything 
and load to your live hosting as appropriate thats what i did .This is the directory structure of a live working website using  CI4-CMS</p>
<p><img src = "https://andrinaboutique.com/images/webstructure.png" width ="500px"><br><br></p>
<p> Basically the name of the sub directory will be the same as your domain name you want something like myWeb.com.</p>
<p> From from my cPanel hosting i just added a new domain name; set up add domain/subdomain and edited so that 
 document root of my web is pointing at the public directory</p>
<p>As you can see , i simply make the public directory , the web document root. 
There is no need to mess about with the .htaccess file except when you want to install SSL i.e use secure socket(https)
 on your web instead of not secure (http) by leveraging &quot;lets encrypt&quot;. </p>
<p>IN which case in the .htaccess file in public  change top line below to bottom line <br><br></p>
<pre><code><span class="hljs-attribute"><span class="hljs-nomarkup">RewriteRule</span></span> ^ http://<span class="hljs-number">%1</span><span class="hljs-variable">%{REQUEST_URI}</span><span class="hljs-meta"> [R=301,L]</span>
<span class="hljs-attribute"><span class="hljs-nomarkup">RewriteRule</span></span> ^ https://<span class="hljs-number">%1</span><span class="hljs-variable">%{REQUEST_URI}</span><span class="hljs-meta"> [R=301,L] </span>
</code></pre><p>Other things you need to do are  development to production. 
If you read the codeIgniter docs, you will know that you need to switch to production mode .You can do that 
by changing development to production in this line of the .env file</p>
<pre><code><span class="hljs-attr">CI_ENVIRONMENT</span> = development
</code></pre><p>also change your web address to domain name in <br></p>
<pre><code><span class="hljs-keyword">the</span> <span class="hljs-built_in">line</span> <span class="hljs-built_in">number</span> <span class="hljs-number">20</span> :  
public <span class="hljs-keyword">string</span> $baseURL = <span class="hljs-string">'http://localhost:8080'</span>; &lt;br&gt;
</code></pre><p> Database is sqlite3 , which is just a file,  so no messing about with setting up MySQl needed </p>
<p> you will need to edit  the controller Sendmail.php in controllers with credentials for sending out an email, 
 and  email address to where you want  the email, containing data submitted by web surfer 
 using &quot;Contact Us&quot; from menu.</p>
<p> My web as all using subdomains and cant use the main domain email. So if you look at lines 
 from 99 in Sendmail.php you can see im using my personal Google email , to send data submitted  from the contact us form to another of my emails
 infact a yahoo one. A link below gives you info and tutorial on PHPMailer </p>
<p> For licence CodeIgniter is using a MIT one. For me you are granted all permissions to do what you want</p>
<p> To see whats in the database called Art.db located   at  in directory &quot;writable&quot; , you can browse data 
 if you  install sqlitebrowser.  You can right click on Art.db &quot;open with&quot; or launch sqlitebrowser from a command line eg:</p>
<p> [andrew@darkstar ~]$ sqlitebrowser</p>
<p> and navigate to Art.db using file-&gt;navigate to webroot writable</p>
<p>sqlitebrowser should be in your repo eg</p>
<p>  [andrew@darkstar ~]$ pacman -Ss sqlitebrowser
     extra/sqlitebrowser 3.12.2-3 [installed]
    SQLite Database browser is a light GUI editor for SQLite databases, built on top of     Qt</p>
<pre><code>Read about sqlitebrowser <span class="hljs-keyword">at</span> : 
</code></pre><p> <a href ="https://sqlitebrowser.org/">Sqlite Browser</a></p>
<p>Gruntfile.js is present ,so its set up for development to convert custom.scss using grunt which will put css where it should 
be in public/custom.csss
. Try using npm install to repopulate node_modules , after installing nodejs and grunt system wide. .
See <a href="https://gruntjs.com/">https://gruntjs.com/</a></p>
<p>Forum for CodeIgniter is : [CodeIgniter Forum]<a href="https://forum.codeigniter.com/">https://forum.codeigniter.com/</a> my handle is captain-sensible on there</p>
<p>any issues you can try me at andybrookestar@gmail.com</p>
<p>In the  blog creation  form , don&#39;t put html tags around  text in title input field, just put title name. 
Thats because style for blog  title is already coded in.edit the contoller Sendmail.php to use your 
email that will send message ( ijust use gmail) and the email address of admin where you want message to go </p>
<p>see below for example tutorial of PHPMailer </p>
<p>[PHPMailer]<a href="https://github.com/PHPMailer/PHPMailer/wiki/Tutorial">https://github.com/PHPMailer/PHPMailer/wiki/Tutorial</a></p>
<p>The  Gruntfile.js is at web root :</p>
<p>commands to use are:</p>
<pre><code><span class="hljs-symbol">'grunt</span> sass'
<span class="hljs-symbol">'grunt</span> watch'
</code></pre><p>The command grunt sass does a one time conversion of scss code  of custom.scss to custom.css and places the custom.css in the right place (public/css).</p>
<p>grunt watch will keep looking for changes in the scss code , convert and update the custom.css file. </p>
<p>But you will need to install stuff system wide ; you will need to have nodejs, grunt-cli in my case on Arch ruby<br>installed system wide and  then project wise  from a command line , with context location web root  :</p>
<pre><code><span class="hljs-meta"><span class="hljs-meta-keyword">$npm</span> init</span>
<span class="hljs-meta"><span class="hljs-meta-keyword">$npm</span> install</span>
</code></pre><p>for grunt see 
 See <a href="https://gruntjs.com/">https://gruntjs.com/</a></p>
<p>Forum for CodeIgniter is : <a href="https://forum.codeigniter.com/">https://forum.codeigniter.com/</a></p>
<p>any issues you can try me at andybrookestar@gmail.com</p>
<p>If you want to have a go with CodeIgniter4 web development with Arch Linux, this book might help :
<a href="https://www.amazon.co.uk/dp/B0DX1MHS9J">Arch Linux </a></p>

					  
			<?=$this->endSection()?>
			 
			 
 
