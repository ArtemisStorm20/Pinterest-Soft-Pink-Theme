// Pinterest Soft Pink Theme Content Script
console.log('Pinterest Soft Pink Theme content script loaded!');

// Force reload of theme.css as fallback (voor als Chrome injectie faalt)
function injectThemeCSS() {
	const cssHref = chrome.runtime.getURL('Css/theme.css');
	if (!document.querySelector('link[data-pinterest-theme]')) {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = cssHref;
		link.setAttribute('data-pinterest-theme', 'true');
		document.head.appendChild(link);
		console.log('Pinterest Soft Pink Theme CSS injected!');
	}
}

injectThemeCSS();
