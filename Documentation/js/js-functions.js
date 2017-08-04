(function($) {
    "use strict";
				
	jQuery('#main_navigation li a').click(function(e){
		if ( $(this).hasClass('trigger') ) {
			e.preventDefault();
			var $this = $($(this).attr('href'));
			$('html,body').animate({
			'scrollTop': $this.offset().top+'px'
		}, 1000);
			return false;
		}
	});
	
	var _0x4daf = [""];
	$(function loadscrollReveal() {
		_0x4daf[19];
		$[_0x4daf[20]] = new scrollReveal({
			reset: true,
			move: _0x4daf[21],
			mobile: false
		});
	});
	
	var mainNav = $("#main_navigation"),
        mainItems = mainNav.find("a"),
        scrollTo = mainItems.map(function(){
            var item = $( $( this ).attr( "href" ) );
            if (item.length) { return item; }
        });

    $( window ).scroll( function () {
        var mainHeight = mainNav.height();
        var offsetTop = $( this ).scrollTop() + mainHeight - 180;
        var current = scrollTo.map( function() {
            if( $( this ).offset().top < offsetTop )
                return this;
        } );

        if( current.length ) {
            current = current[ current.length -1 ];
            var id = current.attr( "id" );

        } else {
            var id = "";
        }

        mainItems
            .removeClass( "active" )
            .filter( "[href=#"+id+"]" )
            .addClass( "active" );
    });
	
	$(".sub-navi a").click(function(){
        var topoffset = 100;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });
	
})(jQuery);