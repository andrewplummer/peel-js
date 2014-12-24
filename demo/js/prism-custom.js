
console.info('jh');
var Languages = {
	'javascript': 'JS',
	'markup': 'HTML'
};
Prism.hooks.add('before-highlight', function(env) {
	var language = Languages[env.language] || env.language;
	env.element.setAttribute('data-language', language);
});

