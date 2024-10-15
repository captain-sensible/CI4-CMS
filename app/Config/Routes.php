<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */


/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.

$routes->get('resetPW','Setup::pwForm');
$routes->post('resetPw','Setup::resetPwDo');

$routes->get('setUp','Setup::setUpForm');
$routes->post('setUpDo','Setup::process');

$routes->get('admin','Login::admin');
$routes->get('blackcat','Login::login');
$routes->post('login','Login::credentials');
$routes->get('logout','Login::logout');
$routes->get('showSession','Login::displaySession');

/*-------------blog----------------------------------*/
$routes->get('dependencyInjection','Blog::altMethod');
$routes->get('newblog', 'Blog::blogForm');
$routes->get('editBlogs','Blog::editBlogForm');
$routes->get('editOneBlog/(:segment)','Blog::editBlog/$1');
$routes->post('doEditBlog','Blog::processEditBlog');
$routes->post('newblog','Blog::newBlogArticle');
$routes->get('removeBlog','Blog::delBlogForm');
$routes->post('delBlog','Blog::delBlog');
$routes->get('blogs','Blog::doPaginate');
$routes->get('blogArticle/(:segment)', 'Blog::showArticle/$1');
$routes->get('linkPdf/(:segment)','ProducePDF::getPdf/$1');

/*--------------------contact  ----------------------------*/



$routes->post('contact','Sendmail::processform'); 
$routes->get('spam','Spam::spam');
$routes->get('noPage','Pages::nopage');
$routes->get('contact','Sendmail::mailForm');




/* -----  gallery -----------------------   */

$routes->get('showGallery','Gallery::countGallery');
$routes->get('countGallery','Gallery::countGallery');
$routes->get('displayGallery','Gallery::displayGallery');
$routes->get('addGallery','Gallery::galleryAddForm');
$routes->post('addGallery','Gallery::addGalleryDo');
$routes->get('delGallery','Gallery::delGalleryForm');
$routes->post('delGallery','Gallery::delGalleryDo');



/* -------------------------------------------------  */
$routes->get('/home','Home::landingpage');
$routes->get('/getdata', 'Datacontroller::data');
$routes->get('/', 'Home::landingpage');
$routes->get('(:any)','Pages::showme/$1');





