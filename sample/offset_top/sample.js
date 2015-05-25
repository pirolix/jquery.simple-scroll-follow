jQuery(document).ready(function($) {
    // default behavious
	$('aside').simpleScrollFollow({
		limit_elem: 'article',
	});
	// this feature
	$('aside2').simpleScrollFollow({
		limit_elem: 'article',
		offset_top: 50
	});
});