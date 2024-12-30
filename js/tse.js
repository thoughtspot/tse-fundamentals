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
  ConversationEmbed,
  SearchEmbed,
} from 'https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';

// TODO - set the following for your URL if you are not using the training environment.
const tsURL = "https://training.thoughtspot.cloud";

//------------------------------ Set up TS and authenticate and show app. ----------------------------

// Create and manage the login screen.
const onLogin = () => {
  // TODO add the init() to set up the SDK interface.

  hideDiv('login');
  showDiv('main-app');
}

//----------------------------------- Functions to embed content . -----------------------------------

const onSearch = () => {
  // TODO replace the following with a SearchEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Search not yet embedded.</p>";
}

const onSpotter = () => {
  // TODO replace the following with a ConversationEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Natural Language Conversation not yet embedded.</p>";
}

const onLiveboard = () => {
  // TODO replace the following with a LiveboardEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Liveboard not yet embedded.</p>";
}

const onVisualization = () => {
  // TODO replace the following with a LiveboardEmbed component and render.
  document.getElementById("embed").innerHTML = "<p class='warning'>Visualization not yet embedded.</p>";
}

// Embed the full application.
const onFull = () => {
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

// Show the URL to connect to.
document.getElementById('ts-url').innerText = 'ThoughtSpot Server: ' + tsURL;

// Hook up the events to the buttons and links.
document.getElementById('login-button').addEventListener('click', onLogin);

// Events for nav bar
document.getElementById('search-link').addEventListener('click', onSearch);
document.getElementById('spotter-link').addEventListener('click', onSpotter);
document.getElementById('liveboard-link').addEventListener('click', onLiveboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);