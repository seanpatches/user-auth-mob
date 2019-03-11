import loadHeader from './header-component.js';
import { auth } from './firebase.js';

loadHeader();

const ui = new firebaseui.auth.AuthUI(auth);
ui.start('#sign-in-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './index.html',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});

