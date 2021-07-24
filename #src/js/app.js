let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {
	
	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._margin-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if(header) {
				const setPedding = () => wrapper.style.marginTop = header.clientHeight + 17 + 'px';
				setPedding();
				window.addEventListener('resize', setPedding);
			}
			
		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('./old/script.js');
	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('../common/burger/burger.js');
	@@include('../common/checkbox/checkbox.js');
	@@include('../common/promo-header/promo-header.js');
	@@include('../common/hero/hero.js');
	@@include('../common/cards-slider/cards-slider.js');
	@@include('../common/gallery/gallery.js');
	@@include('../common/questionnaire/questionnaire.js');
	@@include('../common/feedback/feedback.js');
	@@include('../common/rating/rating.js');
	//@@includ e('../common/popup/popup.js');
	
});

window.addEventListener('DOMContentLoaded', function() {
	if(isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}


	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});


	{
		(function uploadFileHandler() {
			let files = []
			let inputWrapItems = document.querySelectorAll('.input-file');
			if(inputWrapItems.length) {
				inputWrapItems.forEach(inputWrap => {
					let input = inputWrap.querySelector('input[type="file"]');
					let div = document.createElement('div');
					div.className = 'input-file__result';
					inputWrap.append(div);
					const changeHandler = (event) => {
						if (!event.target.files.length) {
							return
						}
		
						files = Array.from(event.target.files)
		
						let result = files.map(item => item.name);
						div.innerText = result.join(', ');
					}
		
					input.addEventListener('change', changeHandler);
				})
			}
		})()
	}
});

//@@include('plagins/lazy-load.js');

