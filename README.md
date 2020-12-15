# Assignment 1 - ReactJS app.

Name: Suyu Huang

## Features.


 
 + Feature 1 - Provides a sorting filter that allows users to sort movies by popularity, rating, number of ratings,etc. Also supports both ASC and DESC frequency.
 + Feature 2 -In the movie details page, users can click on the genres of the movie to see similar categories of this movie.
 + Feature 3 - On the movie details page, the user can rate the movie via the input box, the rating range is between 0.5 and 10.0, outside this range an error message will be shown on the page. The rating that the user gave will be posted to TDMB as part of the film's rating
 + Feature 4- An ActorPage has been addeed, using semantic-ui to make the interface look better. Similar to the MoviePage, the Actor Page displays the actor's name, popularity and Magnum opus. User can also access the actor detail page by clicking on the actor's picture. The actor details page has also been redesigned using semantic-ui to make the page look better.
 + Feature 5 - Using firebase to implement the login function, users can click on Login in the top right corner to access the login screen. Two login options are provided - using github and using a verified email and password. Users can also sign up for an account by clicking Signup, which requires email verification to log in. 
 + Feature 6 - When the user logs in, the Login in the top right corner will change to the nickname the user filled in during registration. Clicking on the nickname will display basic information about the user, such as the email address they are tied to, their username, when they registered and when they last logged in, and whether their email address has been verified. This page also has a logout button which users can click on to log out of your account. Once logged out, you will automatically be taken back to the main page.

## Setup requirements (If required).


+ npm install semantic-ui-react semantic-ui-css  - to import the semantic ui
+ npm install --save firebase  - to import the firebase


## API Data Model.



+ https://api.themoviedb.org/3/person/popular - get a list of popular actors. 
+ https://api.themoviedb.org/3/person/${person_id} - get the actor details according to the given actor id
+ https://api.themoviedb.org/3/movie/${movie_id}/rating,{value: value} - post the rate of specific movie to the TMDB





## App Design.

### Component catalogue (If required).



![][stories]

### UI Design.



![][movieDetail]
>Rate input, which allows the user to rate the movie and displays different alerts in different colours depending on whether the rate is within the legal range

![][MovieCard]
>Sort the films by Popularity, rate or number of ratings by ASC or DESC. Also supports filtering by category before sorting

![][ActorPage1]
![][ActorPage2]
> Actor Page displays the actor's name, popularity and Magnum opus


![][ActorDetail]
>The ActorDetail interface presents specific information about the actor, including date of birth, area of expertise, etc. Also available is the actor's biography


![][Login]
>Users log in via their registered email address and password. There is also the option to log in via a github account. Click on signup to be redirected to the signup page.


![][LoginJudge]
>Firebase reads whether the email and password entered by the user has been registered and whether it meets the specifications. If they do not meet the specification, an error message will be displayed.

![][SignUp]
>Users register by entering their nickname, email and password. After clicking submit, a confirmation email will be sent from Firebase to the registered email address.

![][Logout]
>When logged in, the login in the top right corner will be replaced by the username and clicking on the username will display the Signout screen. The interface displays basic information about the user and provides the Signout button.


## Routing.



+ "/genres/:name" component={GenrePage}
+ "/actor" component={ACtorPage}
+ "/actors/:id" component={ActorDetailPage}
+ "/login" component={LoginPage}
+ "/signup" component={SignupPage}





### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][RateLink]
>Clicking the submit submits the user's rate

![][LoginLink]
>Clicking the 'Github' t will redirect user to github

## Independent learning (If relevant).

. . . . . 
In this assignment, I learnt to use firebase. Also, I became more proficient in passing values through props, usestate and usecontext. In addition, the use of semantic ui has made the interface more beautiful. I have also gained experience in sending post requests to websites through the api.
src/component/GiveRate
src/index.js
src/component/Login

In addtion, the dashboard has reached the limit of 500 tests, so I created a new one.
![][dashboard]
The wit in lower case is the new one
The elderly project record key:6c17a7a2-611d-434f-90df-2a995e3f1069

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/MovieDetail.png
[MovieCard]: ./public/MovieCard.png
[ActorDetail]: ./public/ActorDetail.png
[ActorPage1]: ./public/ActorPage1.png
[ActorPage2]: ./public/ActorPage2.png
[dashboard]: ./public/dashboard.png
[HomePage]:  ./public/HomePage.png
[RateLink]: ./public/RateLink.png
[LoginLink]: ./public/LoginLink.png
[SignUp]: ./public/SignUp.png
[Login]: ./public/Login.png
[LoginJudge]: ./public/LoginJudge.png
[Logout]: ./public/Logout.png
[stories]: ./public/storybook.png
[CodeSplitting]: ./public/CodeSplitting.png


---------------------------------

# Assignment 1 - Agile Software Practice.

Name: SuyuHuang

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie. In additon, the function rate was added to post rate to TMDB. In addtion  users can click on the genres of the movie to see similar categories of this movie.

Tests: cypress/integration/movieDetails.spec.js 

![][ActorPage1]

+ ActorPage - show a list of the actors, together with their popularity and magmun opus

Tests: cypress/integration/actor-page.spec.js 

![][ActorDetail]
+ ActorDetail - show the detailed information of the actor, together with a brief biography
  
Tests: cypress/integration/actor-page.spec.js 

![][HomePage]
+ Home Page - Provides a sorting filter that allows users to sort movies by popularity, rating, number of ratings,etc. Also supports both ASC and DESC frequency.

Tests: cypress/integration/home-page.spec.js 

![][Login]
+ Login Page -  Using firebase to implement the login function, users can click on Login in the top right corner to access the login screen. Two login options are provided - using github and using a verified email and password. Users can also sign up for an account by clicking Signup, which requires email verification to log in. 

Tests: cypress/integration/login-page.spec.js 

![][Logout]
![][SignUp]
+ Lotout and SignUp Page -  When the user logs in, the Login in the top right corner will change to the nickname the user filled in during registration. Clicking on the nickname will display basic information about the user, such as the email address they are tied to, their username, when they registered and when they last logged in, and whether their email address has been verified. This page also has a logout button which users can click on to log out of your account. Once logged out, you will automatically be taken back to the main page.

Tests: cypress/integration/login-page.spec.js 

![][CodeSplitting]
+ Change all the import page to lazy in src/index


## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/9b0f6371-389b-4b17-ab98-1a7ca35f8730/projects

the former one which has reached the limit:https://dashboard.cypress.io/organizations/fc2bb52c-9d3b-4628-b0c7-65145be3a77e/projects

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/movieReviewPage.spec.js - test the message content when the input in illegal
+ cypress/integration/Login-page.spec.js - test the firebase reaction when the password is wrong & when the input email is empty


