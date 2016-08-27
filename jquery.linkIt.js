/*
*name: LinkIt
*author: Oswaldo Bentti
*version: 0.1.0
*License: MIT
*/

(function(v){
	v.fn.linkIt = function(options){
		/* "alert(this.html());" Cuando se está en el "plugin" (este metodo de declaracion) no se escribe el estandar
		"$(this)" sino se puede utilizar directamente "this"*/

		// Default settings
		var settings = $.extend({
			href: null,
			text: null,
			target: '_self'
		}, options);

		// Validation
		if (settings.href == null) {

			/* "console.log()" no informa directamente al usuario con un "alert()" en pantalla sino que se refleja
			en la consola para que lo vea el programador o administrador */
			console.log('You need an href option for LinkIt to work');

			return this;
		}

		return this.each(function() {
			var object = $(this);

			if (settings.text == null) {
				settings.text = object.text();
			}

			object.wrap('<a target = "' + settings.target + '" href="' + settings.href + '"></a>').text(settings.text);
		});
		
	}
}(jQuery));