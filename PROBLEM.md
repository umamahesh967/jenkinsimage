Our Movie Cruiser application enables a end user to search for movies from a third party database (The Movie DB - https://api.themoviedb.org), add them to a common watchlist. The End user can add comments on movies listed in the watchlist. In addition, allows the end user to remove a movie from the watchlist.
But voila! we don't have a way to view the list of watchlisted movies. We need your help here!

We are giving you following requirements according to which you have to add this feature to our Movie Cruiser app.


## Backend (Technologies used are Spring boot, Hibernate, Java and Mysql as the data store)

The following are required to factored as part of the backend tasks:

1. Define ```getAllMovies()``` method in the DAO and Service layer of the application, which returns list of movies

2. Define ```fetchAllMovies()``` in controller which calls the `getAllMovies()` method of the service layer. 
   This method shall support restful behaviour and must map to the following api:

    URL - http://localhost:8080/v1.0/movieservice/movie

    METHOD - GET

As part of the above tasks, you must also write the JUnit test cases (so write one for controller and one for DAO) for the methods that we just added. 

## Frontend (Angular.io)

The following are required to factored as part of the frontend tasks:

1. Create a new component ```watchlist``` (class-name: ```WatchlistComponent```) in the application at path ```src/app/watchlist```

2. Bind the Component's template to the list of watchlisted movies fetched from server with the help of ```MoviesService```

3. Though you are free to demonstrate your creativity while building this view but we would be looking for some specific elements for every movie item listed on this view:
	- Movie poster to be shown using an image element decorated with class-name ```moviePoster```. Clicking on the image shall lead the user to movie details page using route ```movie/:id```.
	- Movie description to be shown inside a div with the format - ```{{name}} ({{year of release}})```, for example ```PK (2015)``` and decorated with class-name ```movieDescription```
	- Movie ratings to be shown in a div in format ```Rating: {{vote average}} ({{vote count}})```, for example ```Rating: 4.4 (120)``` and decorated with class-name ```movieRating```
	- Enable posting comment on a movie. Add an input box with class ```movieCommentsInpt``` and a button with class ```movieUpdateCommentsBtn``` which shall call the service of updating movie comments. The input box should display the already set comments for the movie, if there are any. 
	- Enable removing movie from the watchlist. Add a button with class ```movieRemoveBtn``` which shall call the service of removing movie from watchlist.

4. Add a new route ```watchlist``` triggering which the ```watchlist``` component should get loaded in the ```<router-outlet>```

5. Add a new link with text ```Your Watchlist``` in the NavBar of the page, which invokes ```watchlist``` route.

6. Must write few unit and e2e test cases for your new component

7. Ensure following commands pass before submitting your assignments:
	- `npm run lint` - to check for all lint rules
	- `npm run test` - to check for unit test cases
	- `npm run e2e` - to check for end to end test cases
