// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDzviV57Q445aDIKqQ6oeWNaS97229HcGA",
    authDomain: "nysl-vania.firebaseapp.com",
    databaseURL: "https://nysl-vania.firebaseio.com",
    projectId: "nysl-vania",
    storageBucket: "nysl-vania.appspot.com",
    messagingSenderId: "41224450286"
  }
};
