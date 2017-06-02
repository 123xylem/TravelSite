import $  from "jquery";
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader{
	constructor(){
  		this.siteHeader = $(".site-header");
  		this.headerTriggerElement = $(".large-hero__title");
  		this.siteHeaderLinks =$(".primary-nav a");
      this.lazyImages = $(".lazyload");

        this.createHeaderWaypoint();
        this.pageSections =$(".page-section");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
	}

refreshWaypoints(){
  this.lazyImages.load(function(){
    Waypoint.refreshAll();
  })
}

addSmoothScrolling(){                //function that adds smoothScroll npm package to our headerlink navs
	this.siteHeaderLinks.smoothScroll();
}
	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element:this.headerTriggerElement[0],   //waypoints expects js dom element not js.. so jquery item 0 is always a dom element
		
			handler: function(direction){  //waypoints reads direction
				if(direction== "down"){           //if down         
				 that.siteHeader.addClass("site-header--dark"); //add class
                   				}
                   				else{
                   					that.siteHeader.removeClass("site-header--dark");  //when moving up through trigger remove class!
                   				}
			}
		});
	}


	createPageSectionWaypoints(){
		var that =this;                           //make that = to this of above object.
 			this.pageSections.each(function(){
 					var currentPageSection = this;  //set a this for each page section

 			 		new Waypoint({
 			 			element:currentPageSection,       //for each pagesection
 				 			handler: function(direction){ 	
 				 				if(direction=="down"){

 			 				var matchingHeaderLink= currentPageSection.getAttribute("data-matching-link");
 			 				//make a var that == the matching link att in the html
  							that.siteHeaderLinks.removeClass("is-current-link");
  							//make sure the links arent already lit up
     				 			$(matchingHeaderLink).addClass("is-current-link");
     				 	  //make the corresponding link light up with that class
                                                      }
 				 			}, 
 				 				offset:"25%"  //when trigger is 30% from top of screen trigger event

 				 				});

 			 			new Waypoint({
 			 			element:currentPageSection,       //for each pagesection
 				 			handler: function(direction){ 	
 				 				if(direction=="up"){

 			 				var matchingHeaderLink= currentPageSection.getAttribute("data-matching-link");
 			 				//make a var that == the matching link att in the html
  							that.siteHeaderLinks.removeClass("is-current-link");
  							//make sure the links arent already lit up
     				 			$(matchingHeaderLink).addClass("is-current-link");
     				 	  //make the corresponding link light up with that class
                                                      }
 				 			}, 
 				 				offset:"-40%"  //when trigger is 40% from top of screen trigger event
 	 				 		});
		})
	}

}

export default StickyHeader;