define(['../locales/de',
		'../locales/en',
		'../locales/zh',
		'../locales/es',
		'../locales/fr',
		'../locales/nl',
		'../locales/ru',
		'handlebars'],
function(de, en, zh, es, fr, nl, ru, handlebars) {
	var langs = {
		zh: zh,
		en: en,
		de: de,
		es: es,
		fr: fr,
		nl: nl,
		ru: ru
	};

	var lang = window.navigator.language || window.navigator.userLanguage;
	var result = langs.zh;//langs[lang.split('-')[0]] || langs.zh;
	handlebars.registerHelper("lang", function(key) {
		return result[key];
	});

	return result;
});
