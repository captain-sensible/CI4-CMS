# CI4-CMS
light Content Management System using CodeIgniter4

# CodeIgniter C.M.S

A very light blog engine CMS alternative to W.P using Codeigniter 4.5.7 (December 31st  2024) , Bootstrap 5.3 and Sqlite3 database.

I was in the process of updating the section of CodeIgniter4 in my book Arch Linux 
[Arch book](https://www.amazon.co.uk/dp/B0DX1MHS9J)

Also I just got a new laptop and had to go through all the configuration needed to install software, create virtualhost files and edit the Apache httpd.conf file and also the /etc/hosts file . So for those who want to have CI4-CMS running on Apache web server, i have uploaded my configuration files. You will have to edit circa line 20 in /app/config/App.php this line:

  public string $baseURL = 'http://127.0.0.4/';
  
  The above reflects the fact I have that url in /etc/hosts for serving up CI4-CMS



In this release I have created 2 example blogs, the list can be seen by clicking on blogs from menu. You will see on clicking on either blog link , that a video will run (assuming you are connected to internet) video is simply included into a blog using embed code from  youtube.com on one blog and tiktok in the other. You can see the div layout im using by editing  a blog and looking at the article 

Now uploading videos to either youtube or tiktok is great but as of yet, the content can not be indexed by Google and all you can do is add rudimentary tags. 

But by having a video in a blog with accompanying text, its possible to elaborate whats going on in the video, and using key words means the text will be found and indexed by for instance Google. 

So you basically get the best of both worlds. You can also paste the blog  URL into  Facebook; when reader click on the post they will be taken to the blog page.So you dont need to bother to actually upload the video to facebook directly anymore. Another advantage is that Facebook has pretty lousy security so if your account gets hacked, you dont loose anything since the videos are not uplaoded directly to Facebook 

I did have Login for admin hidden, but since my project is aimed at those that will twaek and edit; you can always take login out of the navbar.php . Also i found it much easier, to click between viewing and editing code . 

 
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
 
 
The core  PHP framework I have updated to 4.5.7 so its fiarly  recent as of 31st December   2024 .

At the moment Composer.json  is specifying :   `"codeigniter4/framework": "4.5.7"`


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

If you have the system in Apache then you will have to set that up and edit the above. I have my development web serving on 127.0.0.4:

  `public string $baseURL = 'http://127.0.0.4/';	`
 
We just fired up spark and that So lets use the output url it gave us that HTTP requests will be listened on   type http://localhost:8080  directly into our browser address bar  :<br><br>
 

<br><br>
<img src = "https://andrinaboutique.com/images/localhost8080.jpg" width ="500px">

  Now to make things easier i have set up a user (with role of admin powers ) as follows: <br>

	User : Demo 
	Password : Demo  

So click on login entry in main menu and  enter those at the  text boxes you will see 
along with the captcha numbers.  
You should then  see :


<img src ="https://andrinaboutique.com/images/admin-page.jpg" width ="550px"> 

The password is encrypted before its stored in database. The code will check if what you enter into
the login textbox  whether  it matches the password (that is encrypted ) in the database. 
 
 
Once logged in, your are taken to the admin section , where  you can change the user name and password to 
something else . Your new admin  user handle and password will replace the old ones .
 
The link to do that is called "resetAdminPw" .
 

 



 
 
  
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













The  Gruntfile.js is at web root :

commands to use are:

	grunt sass


	grunt watch


The command grunt sass does a one time conversion of scss code  of custom.scss to custom.css and places the custom.css in the right place (public/css).

grunt watch will keep looking for changes in the scss code , convert and update the custom.css file. 


But you will need to install stuff system wide ; you will need to have nodejs, grunt-cli in my case on Arch ruby  
installed system wide and  then project wise  from a command line , with context location web root  :


	$npm init
	$npm install
</code>
for grunt see 
 See https://gruntjs.com/

 Also i didn't upload vendor nor node_modules so , you will have to run from root of  web app, using a  command line terminal:

 `npm install`
 `composer update`

Forum for CodeIgniter is : https://forum.codeigniter.com/

any issues you can try me at andybrookestar@gmail.com

If you want to have a go with CodeIgniter4 web development with Arch Linux, this book might help :
[Arch Linux ]https://www.amazon.com/dp/B0DHXZNHZH   
