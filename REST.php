<?php
header("access-control-allow-origin: *"); 

require_once('AltoRouter.php');
require_once('./controller/AuthorApiController.php');
require_once('./controller/BookApiController.php');
require_once('./controller/GenreApiController.php');


$router = new AltoRouter();
$author = new AuthorApiController();
$genre = new GenreApiController();
$book = new BookApiController();

//Authors 
$router->map('GET', '/authors', function() use($author) { $author->GetAll(); });
$router->map('GET', '/authors/[i:id]', function($id) use($author) { $author->GetById($id); });
$router->map('POST', '/authors', function() use($author) { $author->Add(); });
$router->map('DELETE', '/authors/[i:id]', function($id) use($author) { $author->Delete($id); });
$router->map('PUT', '/authors', function() use($author) { $author->Update(); });

//Genres
$router->map('GET', '/genres', function() use($genre) { $genre->GetAll(); });
$router->map('GET', '/genres/[i:id]', function($id) use($genre) { $genre->GetById($id); });
$router->map('POST', '/genres', function() use($genre) { $genre->Add(); });
$router->map('DELETE', '/genres/[i:id]', function($id) use($genre) { $genre->Delete($id); });
$router->map('PUT', '/genres', function() use($genre) { $genre->Update(); });

//Books
$router->map('GET', '/books', function() use($book) { $book->GetAll(); });
$router->map('GET', '/books/[i:id]', function($id) use($book) { $book->GetById($id); });
$router->map('POST', '/books', function() use($book) { $book->Add(); });
$router->map('DELETE', '/books/[i:id]', function($id) use($book) { $book->Delete($id); });
$router->map('PUT', '/books', function() use($book) { $book->Update(); });


$match = $router->match();

if( $match && is_callable( $match['target'] ) ) {
	call_user_func_array( $match['target'], $match['params'] ); 
} else {
	// no route was matched
    header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    echo '404 Not Found';
}

?>