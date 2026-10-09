// Impostazioni generali del sito: modifica qui e cambia ovunque.

export const SITO = {
	nome: 'SoyQuentina',
	titolo: 'SoyQuentina | ceramica e altre cose',
	descrizione:
		'Perlopiù illustro sulla ceramica. Laboratori e commissioni, homelab a Garbatella (Roma).',
	url: 'https://www.soyquentina.com',
	instagram: 'https://www.instagram.com/soyquentina/',
	instagramNome: '@soyquentina',
	zona: 'Garbatella, Roma',

	// Numero WhatsApp con prefisso internazionale, solo cifre (es. '393401234567').
	// Finché è vuoto, i pulsanti WhatsApp portano al profilo Instagram.
	whatsapp: '393409967934',

	// Dati legali da completare prima della messa online
	partitaIva: '',
	ragioneSociale: '',
};

/** Link a una chat WhatsApp con un messaggio già scritto. */
export function linkWhatsApp(messaggio: string): string {
	if (!SITO.whatsapp) return SITO.instagram;
	return `https://wa.me/${SITO.whatsapp}?text=${encodeURIComponent(messaggio)}`;
}

export const MENU = [
	{ href: '/shop', testo: 'Shop' },
	{ href: '/laboratori', testo: 'Laboratori' },
	{ href: '/commissioni', testo: 'Commissioni' },
	{ href: '/gift-card', testo: 'Gift card' },
	{ href: '/chi-sono', testo: 'Chi sono' },
];
