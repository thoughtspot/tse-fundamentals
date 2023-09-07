/*
 * The completed script for the TSE Fundamentals training.  Your solution should look similar.
 * It's recommended to refer to the documentation and Developer Playground to try to get it working before
 * using this file.
 */
import {
  Action,
  AppEmbed,
  AuthType,
  init,
  LiveboardEmbed,
  Page,
  SearchEmbed,
} from 'https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';


// TODO - set the following for your URL if you are not using the training environment.
const tsURL = "https://training.thoughtspot.cloud";

//------------------------------ Set up TS and authenticate and show app. ----------------------------

// Create and manage the login screen.
const onLogin = () => {
  init({
    thoughtSpotHost: tsURL,
    authType: AuthType.None,
    customizations: {
      style: {
        customCSSUrl: "https://cdn.jsdelivr.net/gh/nrentz-ts/css/dark-theme.css",
      }
    }
  });

  hideDiv('login');
  showDiv('main-app');
}

//----------------------------------- Functions to embed content . -----------------------------------

const onSearch = () => {
  const embed = new SearchEmbed("#embed", {
    frameParams: {},
    collapseDataSources: true,
    disabledActions: [Action.Download, Action.DownloadAsCsv],
    disabledActionReason: "Enterprise feature",
    hiddenActions: [Action.Share],
    dataSources: ["1b1c237d-9de8-4542-bf1f-0c3157ddb8d2"],
    searchOptions: {
      searchTokenString: '[sales] [product type]',
      executeSearch: true,
    },
  });

  embed.render();
}

const onLiveboard = () => {
  const embed = new LiveboardEmbed("#embed", {
    frameParams: {},
    liveboardV2: true,
    liveboardId: "fda23eef-4edc-4a1a-884c-1570d2b3b079",  // TODO - set to your liveboard ID.
    disabledActions: [Action.DownloadAsPdf],
    disabledActionReason: 'Enterprise feature.',
    hiddenActions: [Action.LiveboardInfo]
  });

  embed.render();
}

const onVisualization = () => {
  const embed = new LiveboardEmbed("#embed", {
    frameParams: {},
    liveboardV2: true,
    liveboardId: "fda23eef-4edc-4a1a-884c-1570d2b3b079",  // TODO - set to your liveboard ID.
    vizId: "dcbf0121-dc91-40ae-9a5c-e480d47eebfa",
  });

  embed.render();
}

// Embed the full application.
const onFull = () => {
  const embed = new AppEmbed('#embed', {
    frameParams: {},
    liveboardV2: false,
    showPrimaryNavbar: false,  // set to true to show the ThoughtSpot navbar
    pageId: Page.Home, // loads the Home tab, but you can start on any main tab - try Page.Search
    disabledActions: [], // list of any actions you don't want the users to use, but still see
    disabledActionReason: 'No sharing allowed.', // tool tip the user will see
    hiddenActions: [] // totally hide a feature from a user
  });

  embed.render();
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
document.getElementById('liveboard-link').addEventListener('click', onLiveboard);
document.getElementById('visualization-link').addEventListener('click', onVisualization);
document.getElementById('full-application-link').addEventListener('click', onFull);