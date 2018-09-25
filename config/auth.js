// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth' : {
    'clientID'      : '320644385376671', // your App ID
    'clientSecret'  : '73256b8b0dff4ada9de16e864c533b99', // your App Secret
    'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
    'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },

  'googleAuth' : {
    'clientID'      : '997003311172-tij6m2dcrqaa5she9tigq8a22q4knhi3.apps.googleusercontent.com',
    'clientSecret'  : '-QEYDqTzvUNpoAHWNUdD4AnQ',
    'callbackURL'   : 'https://assignment3-shanu.herokuapp.com/auth/google/callback'
  }

};
