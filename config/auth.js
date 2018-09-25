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
    'clientID'      : '109961413781-s1g00vfht28d379odlt9csrn1uljs26i.apps.googleusercontent.com',
    'clientSecret'  : 'cXtxhcMbavGz6gL-jIitJ5wm',
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  }

};
