$(document).ready(function() {
	'use strict';
    var application = {
    	init: function(){
    		this.$main = $('main');
    		this.render();
    	},

    	render: function(){
    		var $slides = this.$main.find('.section');

    		var anchors = [];
    		var navigationTooltips = [];

    		$slides.each(function(index, item){
    			var title = $(this).attr('data-title');
    			anchors.push(title);
    			navigationTooltips.push(title);
    		});
		    this.$main.fullpage({
		        menu: true,
		        anchors: anchors,
		        navigation: true,
		        navigationPosition: 'right',
		        navigationTooltips: navigationTooltips,
		        slidesNavigation: true,
		        slidesNavPosition: 'bottom',

		        //Scrolling
		        css3: true,
		        scrollingSpeed: 700,
		        autoScrolling: true,
		        scrollBar: false,
		        easing: 'easeInQuart',
		        easingcss3: 'ease',
		        loopBottom: false,
		        loopTop: false,
		        loopHorizontal: true,
		        continuousVertical: false,
		        normalScrollElements: '#element1, .element2',
		        scrollOverflow: false,
		        touchSensitivity: 15,
		        normalScrollElementTouchThreshold: 5,

		        //Accessibility
		        keyboardScrolling: true,
		        animateAnchor: true,
		        recordHistory: true,

		        //Design
		        controlArrows: true,
		        verticalCentered: true,
		        resize : true,
		        sectionsColor : ['#ccc', '#fff'],
		        paddingTop: '3em',
		        paddingBottom: '10px',
		        fixedElements: '#header, .footer',
		        responsive: 0,

		        //Custom selectors
		        sectionSelector: '.section',
		        slideSelector: '.slide',

		        //events
		        onLeave: function(index, nextIndex, direction){},
		        afterLoad: function(anchorLink, index){},
		        afterRender: function(){},
		        afterResize: function(){},
		        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
		    });
		}
    };

    application.init();
});
