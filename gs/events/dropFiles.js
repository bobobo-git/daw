"use strict";

ui.jqBody.on( {
	dragover: false,
	drop: function( e ) {
		e = e.originalEvent;
		var data = e && e.dataTransfer;
		$.each( data && data.files, function() {
			gs.files.push( ui.newFile( this ) );
		} );
		return false;
	}
} );
