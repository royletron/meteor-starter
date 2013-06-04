Template.login.events({
    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value
        , password = t.find('#login-password').value;
        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
          if (err)
          {
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed. 
            Session.set("displayMessage", "error &amp; "+err.reason);
          }
          else
          {
            Meteor.router.go(Meteor.rootPath());
            Session.set("displayMessage", "success &amp; Hello "+Meteor.user().profile.name+", welcome back!");
            // The user has been logged in.
          }
        });
        return false; 
      }
  });