import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll{
	constructor(els, offset){
		this.itemsToReveal = els;   //make items to reveal = whatever element is given in App.js
		this.offsetPercentage=offset;
		this.hideInitially();                      //call hide function
		this.createWaypoints();                    //call waypoint function

	}

	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");   //hide function adds a class that gives 0 opacity (hides it)
	}


	createWaypoints(){
		var that=this;                 // We are setting this to look at the main objects this saved as that

     this.itemsToReveal.each(function(){           //for each feature item
     	var currentItem=this;                    //Bind this to each current item

     	new Waypoint({                            
     		element: currentItem,                  //create a new waypoint from each current item
     		handler:  function(){                //function adds a class to make it visible
     				$(currentItem).addClass("reveal-item--is-visible");
     	}, 	
     	     	offset: that.offsetPercentage             //This tells the waypoint where to activate. 10% after element has come into page.

     	});

     })

	}
}

export default RevealOnScroll;