# Thinkful Full Stack Capstone - Easy Budget App Client

While enrolled in Thinkful's Web Development bootcamp I created this Full-stack Capstone project.  Easy budget is an interactive web application that was created to view and manage your monthly budget.  This app was created so that you can view all of your monthly expenses and figure out whether they align with your financial goals.

Link to the [Live URL application](https://easy-budget.chandacodes.vercel.app)

# Technology Used
### Front-end
- React
- HTML
- CSS
- Vercel(Zeit)
- Sweet Alerts

### Back-end
- Node.js
- Express
- PostgreSQL
- Mocha, Chai & Supertest
- Heroku

## Summary

<!-- <b>Dinner and a Movie</b> is a responsive web app that helps users decide where to order dinner and which movie to watch for a fun night in.  Users input their location and it is sent to the [EatStreet API Endpoint](https://developers.eatstreet.com/endpoint/search) to find restaurants that provide food delivery or pickup nearby. Users will then navigate to a screen where they can input a movie that they like so that they can receive similar movie recommendations using the [TasteDive Movie API Endpoint](https://tastedive.com/read/api)  -->

#### Landing Page

<img src="screens/landing.png" alt="Image of Landing page" width="420px">
<img src="screens/landing2.png" alt="Image of Landing page" width="420px">
<img src="screens/landing3.png" alt="Image of Landing page" width="420px">
<img src="screens/landing4.png" alt="Image of Landing page" width="420px">

#### Signup Button

From the landing page you can click the signup button to view an alert.  From there you can leave your email address to be notified of future app updates.  This alert was created with <b>Sweet Alerts</b>

<img src="screens/signup.png" alt="Image of signup alert" width="420px">

#### Review your budget screen

From the landing page you can click the <b>Review your Budget</b> button to navigate to the `/expense` page.  On this page you can view your list of expenses in an <b>HTML table</b> that renders a database of expenses that were created with <b>PostgreSQL</b>.  The database is pre-populated with default expenses.  You can click the <b>Delete</b> button to remove expenses, and you can add expenses with the <b>Add an Expense</b> button to navigate to that screen.
<img src="screens/expenses1.png" alt="Image of Expense Screen" width="420px">
<img src="screens/expenses2.png" alt="Image of Expense Screen" width="420px">
<img src="screens/addexpense.png" alt="Image of add xpense page" width="420px">
<img src="screens/expensefeedback.png" alt="Image of Expense feedback alert" width="420px">
<img src="screens/notfound.png" alt="Image of 404 page" width="420px">

## Easy Budget API
Link to the [API Repo](https://github.com/ChandaHubbard/easy-budget-app-api)
<!-- 

Documentation of your API.
Screenshot(s) of your app. This makes your app description much easier to understand.
A summary section. This should have a concise explanation of what your app does. Try to frame this from the standpoint of what the user does, or what the app enables for the user.
A section on the technology used. -->
<!-- 

## Process

<!-- ##### [> Initial wireframes<](https://docs.google.com/document/d/16hyz31opJRNBHMy4-gDB9pLsdS5OK1MZCCaQCb7vhCo/edit?usp=sharing) -->

<!-- ### Wireframe images -->
<!-- 
<img src="content/wireframe.png" alt="Wireframe" width="400">

##### [> Initial User Stories<](https://docs.google.com/spreadsheets/d/1FB6xBWHgIpJLK6rlRdFN-CHQ4ed_Hvct-nbLKT8k22w/edit?usp=sharing) -->
<!-- 
### Version MVP (Minimal Viable Product) -->

<!-- [>MVP<](https://chandahubbard.github.io/API%20Hack%20Capstone/index.html) -->



### Styling with a little bit of CSS

<!-- After researching the <i>Psychology of Color</i>, I decide that I would either choose a red or orange color scheme for my styling.  Red, because it symbolizes entertainment, for the movie portion of the app. Or orange, because it symbolizes food/hunger, for the food delivery portion of the app.  I ended up with a red based color theme from Adobe called,  [Sosialisasi Speak Up 19](https://color.adobe.com/Sosialisasi-Speak-Up-19-color-theme-14114879/https://color.adobe.com/Sosialisasi-Speak-Up-19-color-theme-14114879/) , which can be viewed below.

<br/><img src="content/colortheme.png" alt="Style Title" width="600">

<img src="content/intro.png" alt="Style Title" width="400"><br/>



## Final version at different breakpoints

### Mobile

<img src="content/mobile.png" alt="Final Title Screen on Mobile Version" width="250">

### Tablet

<img src="content/tablet.png" alt="Final Title Screen on Tablet Version" width="300">

### Desktop/other

<img src="content/desktop.png" alt="Final Title Screen on Desktop Version" width="400"> -->



## Final version & User Flows
<!-- 
### Screen 1 
#### Landing Page which Navigates to a Dinner Input screen once the "Let's Go" button is clicked 
<img src="content/intro.png" alt="Intro Screen on Tablet Version" width="500" align="center">

### Screen 2
#### Dinner Input screen, where the user can provide their location and select delivery and pickup options
<img src="content/dinnerinput.png" alt="Dinner Input Screen on Tablet Version" width="500">

### Screen 3
#### Flows the user from the dinner input screen to the movie input screen once the "Find a Movie" button is clicked
<img src="content/flowtomovie.png" alt="Flow from Dinner input to Movie input Screen on Tablet Version" width="500">

### Screen 4
#### Movie input screen that allows used to provide a movie they would like to see similar recommendations for
<img src="content/movieinput.png" alt="Movie Input Screen on Tablet Version" width="500">

### Screen 5
#### Flows the user from the movie input screen to the results screen once the "View Dinner & Movie Pairing" button is clicked
<img src="content/flowtoresults.png" alt="Flow from movie input to results Screen on Tablet Version" width="500">

### Screen 6
#### Flows the user to the results screen where they can view their restaurant recommendation and their movie recommendation.
<img src="content/resultsscreen1.png" alt="Final Screen top Screen on Tablet Version" width="500">
<img src="content/resultsscreen2.png" alt="Final Screen Bottom on Tablet Version" width="500">

### Additional Screens
#### The user can then select the "restart the app" button which navigates back to screen one and clears all results or they can select the "View more recommendations" button to view screen 6 with different movie and restaurant results. -->



<!-- ## Other features to implement in future versions -->

<!-- [ ] Figure out how to handle edge cases for movie input
<br/>
[ ] Incorporate an additional API that will let the user know which streaming service currently offers their movie selection for viewing. -->

 -->

## Scripts

- To start the application enter `npm start` in the terminal

- To run the test suite enter `npm test` in the terminal

## Deployment

- To deploy the app enter `npm run build` then `npm run deploy` in the terminal
