/*
 * The initial script for the TSE Fundamentals training.
 */
import {
  init,
  Action,
  AppEmbed,
  AuthType,
  LiveboardEmbed,
  Page,
  RuntimeFilterOp,
  SearchEmbed,
} from 'https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';

// TODO - set the following for your URL if you are not using the training environment.
const tsURL = "https://training.thoughtspot.cloud";

//------------------------------ Set up TS and authenticate and show app. ----------------------------

// Create and manage the login screen.
const onLogin = () => {
  // Hide the 'login' div
  hideDiv('login');
  // Show the 'main-app' div
  showDiv('main-app');

  // TODO add the init() to set up the SDK interface.
  // See https://developers.thoughtspot.com/docs/getting-started#initSdk for the init() function

  
}

//----------------------------------- Functions to embed content . -----------------------------------

const onSearch = () => {
  // See https://developers.thoughtspot.com/docs/search-embed for the SearchEmbed component

  // TODO replace the following with a SearchEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Search not yet embedded.</p>";
}

const onLiveboard = () => { 
  // See https://developers.thoughtspot.com/docs/embed-liveboard for the LiveboardEmbed component

  // TODO replace the following with a LiveboardEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Liveboard not yet embedded.</p>";
}

const onVisualization = () => {
  // See https://developers.thoughtspot.com/docs/embed-a-viz for loading a Visualizatoin with the LiveboardEmbed component
  
  // TODO replace the following with a LiveboardEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Visualization not yet embedded.</p>";
}

// Embed the full application.
const onFull = () => {
  // See https://developers.thoughtspot.com/docs/full-embed for the AppEmbed component
  
  // TODO replace the following with an AppEmbed component and render.  
  document.getElementById("embed").innerHTML = "<p class='warning'>Full app not yet embedded.</p>";
}

//----------------------------------- Functions to manage the UI. -----------------------------------

// functions to show and hide parts of the UI.
const showDiv = divId => {
  const div = document.getElementById(divId);
  div.style.display = 'flex';
}

const hideDiv = divId => {
  const div = document.getElementById(divId);
  div.style.display = 'none';
}

//---------------------------- connect UI to code and start the app. ----------------------------
// Each of the following elements referred to in the .getElementById() methods are defined in the index.html page

// Show the URL to connect to.
document.getElementById('ts-url').innerText = 'ThoughtSpot Server: ' + tsURL;

// Hook up the events to the buttons and links.
document.getElementById('login-button').addEventListener('click', onLogin);

// Events for nav bar
document.getElementById('search-link').addEventListener('click', onSearch);
document.getElementById('liveboard-link').addEventListener('click', onLiveboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);
