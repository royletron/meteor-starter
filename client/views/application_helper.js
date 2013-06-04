Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    var message = Session.get('displayMessage');
    if (message) {
      var stringArray = message.split('&amp;');
      alertify.log(stringArray[1], stringArray[0]);
      Session.set('displayMessage', null);
    }
  });