function logout() {
	this.done();
	if(Meteor.user() != null)
	{
		var name = Meteor.user().profile.name;
		Meteor.logout();
	  Session.set("displayMessage", "success &amp; Bye "+name+", come back!");
	}
}

Meteor.pages({

    // Page values can be an object of options, a function or a template name string

    '/': { to: 'home', as: 'root', nav: 'home' },
    '/places': { to: 'places', as: 'places', nav: 'places' },
    '/login': { to: 'login', as: 'login', nav: 'login' },
    '/logout': { to: 'logout', as: 'logout', nav: 'logout', before: [logout] },
    '/signup': { to: 'signup', as: 'signup', nav: 'signup' }
  }, {

    // optional options to pass to the PageRouter
    defaults: {
      layout: 'layout'
    }
  });
