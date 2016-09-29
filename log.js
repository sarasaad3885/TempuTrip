"use strict";

var ref = new Firebase("https://temputrip.firebaseio.com");
ref.onAuth(authDataCallback);
        
        var ref = new Firebase("https://temputrip.firebaseio.com");
var authData = ref.getAuth();
if (authData) {
  console.log("User " + authData.uid + " is logged in with " + authData.provider);
} else {
  console.log("User is logged out");
}
        
        // Create a callback to handle the result of the authentication
function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}
// Authenticate users with a custom authentication token
ref.authWithCustomToken("<token>", authHandler);
// Alternatively, authenticate users anonymously
ref.authAnonymously(authHandler);
// Or with an email/password combination
ref.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'correcthorsebatterystaple'
}, authHandler);
// Or via popular OAuth providers ("facebook", "github", "google", or "twitter")
ref.authWithOAuthPopup("<provider>", authHandler);
ref.authWithOAuthRedirect("<provider>", authHandler);
        
        // we would probably save a profile when we register new users on our site
// we could also read the profile to see if it's null
// here we will just simulate this with an isNewUser boolean
var isNewUser = true;
var ref = new Firebase("https://temputrip.firebaseio.com");
ref.onAuth(function(authData) {
  if (authData && isNewUser) {
    // save the user's profile into the database so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    ref.child("users").child(authData.uid).set({
      provider: authData.provider,
      name: getName(authData)
    });
  }
});
