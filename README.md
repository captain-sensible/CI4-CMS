
# CodeIgniter C.M.S

test

A very light blog engine CMS alternative to W.P using Codeigniter 4.6.0  Bootstrap 5.3 and Sqlite3 database. There is a grunt file to work from web root scss. Breakpoints so is mobile responsive. Ive uploaded my vendor in this release because there was an issue with timetrait.php  in 118 of vendor i fixed. 

ive added some content security policy via a meta tag in the main weblayout  view 

So there is no need to run composer update.Ive left out node_modules  so you will need to run npm (see below) 


<img src ="https://andrinaboutique.com/images/mobile-responsive.png" height="500px">




I have recently done a Laravel 11 versions at :
<https://sourceforge.net/projects/laravelblogengine/>


If you would like  to development with Ci4 on Arch linux this book will help:<br>
[Arch book](https://www.amazon.co.uk/dp/B0DX1MHS9J)

Apart from here, im also updating code as i go on github :<br>
[code on github](https://github.com/captain-sensible/CI4-CMS)


 I just got a new laptop and had to go through all the configuration needed to install software, create virtual host files and edit the Apache httpd.conf file and also the /etc/hosts file . So for those who want to have CI4-CMS running on Apache web server, i have uploaded my configuration files, which you can refer to.



You will have to edit circa line 20 in /app/config/App.php this line:

  public string $baseURL = 'http://127.0.0.4/';
  
  The above reflects the fact I have that url in /etc/hosts for serving up CI4-CMS



In this release I have created 2 example blogs, the list can be seen by clicking on blogs from menu. You will see on clicking on either blog link , that a video will run (assuming you are connected to internet) video is simply included into a blog using embed code from  youtube.com on one blog and tiktok in the other.

Now uploading videos to either youtube or tiktok is great but as of yet , the content can not be indexed by Google and all you can do is add rudimentary tags. Now by having a video in a blog with accompanying text , its possible to elaborate whats going on in the video, and using key words that can be indexed. So you basically get the best of both worlds. If you paste the URL to the video in facebook for instance readers will be able to view both the video and accompanyintg text. So you dont need to bother to actually uplaod the video to facebook directly anymore

Login for admin is hidden 
from those that dont know the URL ( login is at URL  domainName.com/blackcat);  the login form for admin has a captcha, and coded so that 5 failed attempts to login results
 in a brush off away from site. 
 
If your like me , you may like to play then read the instructions . 
So download the zip file to your Desktop and unzip  . Whats inside ?
:<br>

[andrew@darkstars Desktop]$ tree -L 1 CI4-CMS <br>
 CI'S-CMS<br>
├── Grunt file.J's<br>
├── LICENSE<br>
├── REDEEM.MD<br>
├── app<br>
├── builds<br>
├── composer.json<br>
├── composer.lock<br>
├── package-lock.json<br>
├── package.json<br>
├── phpunit.xml.dist<br>
├── public<br>
├── scss<br>
├── spark<br>
├── tests<br>
├── vendor<br>
└── writable<br>
 
 
The core  PHP framework I have updated to 4.5.0 so its very recent as of May 17  2024 .

At the moment Composer.json  is specifying :   `"codeigniter4/framework": "4.6.0"`


When upgrading I prefer to edit the composer.json file, specifying  the newer version (by one up) and run composer update command. 

In other words upgrade manually step by step. If there is a Caret character in composer.json, then depending when you download my software and how far CodeIgniter has moved on, it would mean it would update to the newest version what ever that would be  and there could be breaking changes, resulting in CI'S-CMS not working.

You can find upgrade instruction from one CodeIgniter version to another at:

[CodeIgniter Upgrade] https://codeigniter.com/user_guide/installation/upgrading.html


Lets fire up spark;  first change directory so that from the context of the terminal its at the web root 
<br><br>
<img src ="https://andrinaboutique.com/images/fire-up-spark.jpg" width="500px">
 
As you can see the built in development server is listening on:<br> 
	http://localhost:8080
	
Note in app/Config/App.php , the url has been set to :

 ` public string $baseURL = 'http://localhost:8080';`

If you have the system in Apache then you will have to set that up and edit the above. I have my development web serving on 127.0.0.9:

  `public string $baseURL = 'http://127.0.0.9/';	`
 
We just fired up spark and that So lets use the output url it gave us that HTTP requests will be listened on   type http://localhost:8080  directly into our browser address bar  :<br><br>
 

<br><br>
<img src = "https://andrinaboutique.com/images/localhost8080.jpg" width ="500px">
 
you should see or a variation of that : 
 


  
Now to make things easier i have set up a user (with role of admin powers ) as follows: <br>

	User : Demo 
	Password : Demo  

So enter those into text box at this :<br><br>

<code>	http://localhost:8080/blackcat </code>

You should then  see :


<img src ="https://andrinaboutique.com/images/admin-page.jpg" width ="550px"> 

The password is encrypted before its stored in database. The code will check if what you enter into
the login textbox  whether  it matches the password (that is encrypted ) in the database. 
 
 
Once logged in, your are taken to the admin page, where  you can change the user name and password to 
something else . Your new admin  user handle and password will replace the old ones .They wont work until you hit the logout link, to log out and lg back in using new credentials
 
The link to do that is called "resetAdminPw" .
 
If you get things working  on local dev, you can just zip up everything 
and load to your live hosting as appropriate thats what i did .This is the directory structure of a live working website using  CI4-CMS
 
<img src = "https://andrinaboutique.com/images/webstructure.png" width ="500px"><br><br>

 Basically the name of the sub directory will be the same as your domain name you want something like myWeb.com.
 
 From from my cPanel hosting i just added a new domain name; set up add domain/subdomain and edited so that 
 document root of my web is pointing at the public directory

 

As you can see , i simply make the public directory , the web document root. 
There is no need to mess about with the .htaccess file except when you want to install SSL i.e use secure socket(https)
 on your web instead of not secure (http) by leveraging "lets encrypt". 
 
IN which case in the .htaccess file in public  change top line below to bottom line <br><br>

	RewriteRule ^ http://%1%{REQUEST_URI} [R=301,L]
	RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L] 

 
Other things you need to do are  development to production. 
If you read the codeIgniter docs, you will know that you need to switch to production mode .You can do that 
by changing development to production in this line of the .env file
  
	CI_ENVIRONMENT = development

also change your web address to domain name in <br>
  
	the line number 20 :  
	public string $baseURL = 'http://localhost:8080'; <br>
 
 
  
 Database is sqlite3 , which is just a file,  so no messing about with setting up MySQl needed 
 
 you will need to edit  the controller Sendmail.php in controllers with credentials for sending out an email, 
 and  email address to where you want  the email, containing data submitted by web surfer 
 using "Contact Us" from menu.
 
 My web as all using subdomains and cant use the main domain email. So if you look at lines 
 from 99 in Sendmail.php you can see im using my personal Google email , to send data submitted  from the contact us form to another of my emails
 infact a yahoo one. A link below gives you info and tutorial on PHPMailer 
 
 
 For licence CodeIgniter is using a MIT one. For me you are granted all permissions to do what you want
 

  
 To see whats in the database called Art.db located   at  in directory "writable" , you can browse data 
 if you  install sqlitebrowser.  You can right click on Art.db "open with" or launch sqlitebrowser from a command line eg:
 
 [andrew@darkstar ~]$ sqlitebrowser
 
 and navigate to Art.db using file->navigate to webroot writable
 
 
sqlitebrowser should be in your repo eg
  
  [andrew@darkstar ~]$ pacman -Ss sqlitebrowser
     extra/sqlitebrowser 3.12.2-3 [installed]
    SQLite Database browser is a light GUI editor for SQLite databases, built on top of     Qt
    
    Read about sqlitebrowser at : 
 <a href ="https://sqlitebrowser.org/">Sqlite Browser</a>
    
      


Gruntfile.js is present ,so its set up for development to convert custom.scss using grunt which will put css where it should 
be in public/custom.csss
. Try using npm install to repopulate node_modules , after installing nodejs and grunt system wide. .
See https://gruntjs.com/

Forum for CodeIgniter is : [CodeIgniter Forum]https://forum.codeigniter.com/ my handle is captain-sensible on there

any issues you can try me at andybrookestar@gmail.com














In the  blog creation  form , don't put html tags around  text in title input field, just put title name. 
Thats because style for blog  title is already coded in.edit the contoller Sendmail.php to use your 
email that will send message ( ijust use gmail) and the email address of admin where you want message to go 

see below for example tutorial of PHPMailer 

[PHPMailer]https://github.com/PHPMailer/PHPMailer/wiki/Tutorial


The  Gruntfile.js is at web root :

commands to use are:

	'grunt sass'
	'grunt watch'


The command grunt sass does a one time conversion of scss code  of custom.scss to custom.css and places the custom.css in the right place (public/css).

grunt watch will keep looking for changes in the scss code , convert and update the custom.css file. 


But you will need to install stuff system wide ; you will need to have nodejs, grunt-cli in my case on Arch ruby  
installed system wide and  then project wise  from a command line , with context location web root  :


	$npm init
	$npm install
for grunt see 
 See https://gruntjs.com/

Forum for CodeIgniter is : https://forum.codeigniter.com/

any issues you can try me at andybrookestar@gmail.com

If you want to have a go with CodeIgniter4 web development with Arch Linux, this book might help :
[Arch Linux ](https://www.amazon.co.uk/dp/B0DX1MHS9J)
