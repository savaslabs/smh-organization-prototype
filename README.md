# Share My Health CBO app prototype

This app is a prototype of the Charitable-Based Organization app for Share My
Health.

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Installation

This app requires Node.js version 10.

Run `npm install` to install dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React
in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready
to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Directory Structure

SCSS assets are coupled with their respective component JS files.

Component files are located in `/src/components`. Sub-components are located in
the directory of the component in which they are used (e.g. the account menu
component lives in `src/components/Header/AccountMenu`).

View components (i.e. pages) are located in `/src/views`.

## Use of Bootstrap

This project was built using the react-bootstrap library for components. Styles come directly from Bootstrap 4 sass.

Helper classes have been used in markup wherever possible. One exception is when a commonly used component is targeted: in this case a single ruleset of styles is preferred over using helper classes in each instance of the component. For example, this is better than including a helper class in every instance of a `<ul>`:

```CSS
ul {
  margin: 0;
}
```

Another exception is when Bootstrap components are used and it's not straightforward to add a class to and element in JSX.

## User Experience

### Logging in and out

Simply clicking the "Log In" button in the login form on the home page will log
the user in as a CBO agent. To log out, click the account menu icon in the
header, then "Log Out" to be returned to the home page as an unauthorized user.

### Forms

Similarly, other forms do not actually require input. Clicking a submit button takes the user to the next step of the process or completes the form.

### Session Storage

Some variables that keep track of where the user is in the user story are stored in session storage. Whether or not the user is "logged in" and whether or not members have had their ID verified are a couple of examples.

Opening a new tab and visiting the site will allow a user to start from scratch since all session storage items will be reset.
