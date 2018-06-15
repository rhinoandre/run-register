# Run Register

A simple app to register the runs. Here you can register and manage your runs, like strava, but this one was built for me :D


## Tools and Libs
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Material UI](https://material-ui.com)
* [Jest](https://facebook.github.io/jest/)

# Features

### Login page must have:
* [ ] Form with email and password*
* [ ] Button to perform the login
* [ ] Link to create new user *(not required)*
* [ ] Link to user create a new password *(not required)*

### Register new user *(not required)*
* [ ] Form with the fields: name, email, password, confirm passowrd, unit
* [ ] Button to cancel the creation
* [ ] Button to save the user

### Runs list
* [ ] Table with the fields: Run name, duration (seconds I think), distance, run date (I'll consider createdDate as the run date)
* [ ] Button to create a new run
* [ ] Button to delete the run
* [ ] Link on the run name that takes the user to edit run page

### Create Run
* [ ] Form with the fields: Run name, duration (seconds I think), distance
* [ ] Buttons to: cancel the creationg and save the run
* [ ] Show the distance unit

### Additional Features (Interesting but not required)

* [ ] Service Worker - Enable the user (that already have a token) to create his run even if he's offline
* [ ] i18N - Translate the web to English, Spanish and Portuguese
* [ ] Accessibility - Allow blind users to create runs
* [ ] Admin mode - Use the user's role
* [ ] Achievements - Highlight the fartest, the longest and the most run distance