Template.signup.events({
    'submit #signup-form' : function(e, t) {
      e.preventDefault();
      var email = t.find('#account-email').value
        , password = t.find('#account-password').value
        , name = t.find('#account-name').value;

        // Trim and validate the input
      var profile = new Object();
      profile.name = name;
      Accounts.createUser({email: email, password: password, profile: profile}, function(err){
          if (err) {
            Session.set("displayMessage", "error &amp; "+err.reason);
            // Inform the user that account creation failed
          } else {
            Meteor.router.go(Meteor.rootPath());
            Session.set("displayMessage", "success &amp; Account created");
            // Success. Account has been created and the user
            // has logged in successfully. 
          }

        });

      return false;
    }
  });