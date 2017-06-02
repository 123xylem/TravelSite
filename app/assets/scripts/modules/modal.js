import $ from "jquery";

class Modal{
	constructor(){

		this.openModalButton = $(".open-modal");
		this.modal= $(".modal");
		this.closeModalButton= $(".modal__close");
		this.events();
	}
events(){
	//click open - close modal and esc key
	this.openModalButton.click(this.openModal.bind(this)); //bind this to Main Modal this instead of modal button this.

	this.closeModalButton.click(this.closeModal.bind(this));

     $(document).keyup(this.keyPressHandler.bind(this));  //if doc gets keyup use keypress handler func with this bound to Modal
}

keyPressHandler(e){          
	if(e.keyCode == 27){   //if elements keycode is 27 (esc key) call close modal function (close modal)
		this.closeModal();
	}

}


openModal(){
	this.modal.addClass("modal--is-visible");
	return false;                              //stops page going to top on link click 
}

closeModal(){
	this.modal.removeClass("modal--is-visible");
}



}

export default Modal;