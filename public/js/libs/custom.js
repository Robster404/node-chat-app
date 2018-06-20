/*
 * jQuery ucFirst - make first letter uppercase and the rest lower
 *
*/
(function($) {
	$.ucFirst = function(str) {
		var text = str;

		var parts = text.split(' '),
				len = parts.length,
				i, words = [];
		for (i = 0; i < len; i++) {
			var part = parts[i];
			var first = part[0].toUpperCase();
			var rest = part.substring(1, part.length).toLowerCase();
			var word = first + rest;
			words.push(word);
		}

		return words.join(' ');
	};
})(jQuery);