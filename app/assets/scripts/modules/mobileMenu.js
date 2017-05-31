import $ from "jquery";


class MobileMenu {                             //new constructor class
	constructor() {
     this.siteHeader = $(".site-header");
     this.menuIcon = $(".site-header__menu-icon");     // menuIcon in this context = siteheadermenuicon class
   	this.menuContent =$(".site-header__menu-content")
 	this.events();                                   // use events associated to this
}


events(){  //Below is the events associated with above class
	this.menuIcon.click(this.toggleTheMenu.bind(this))     // when icon clicked use togglemenu function. 
	                                                    //THIS is bound to togglemenu as opposed to menuIcon function
      	}

	toggleTheMenu(){       //functions for the above events
	this.menuContent.toggleClass("site-header__menu-content--is-visible"); //toggles class on or off
	console.log("clicked")
	}
}

export default MobileMenu;