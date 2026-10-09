// Le proposte grafiche da mostrare alla cliente. Ogni proposta è un sito completo
// raggiungibile da /<id>/ (es. /vetrina/). La pagina iniziale "/" le elenca tutte.

export const TEMI = [
	{
		id: 'essenziale',
		lettera: 'A',
		nome: 'Essenziale',
		idea: 'La bozza di partenza: pulita, ordinata, con le foto in cornici ad arco.',
	},
	{
		id: 'wow',
		lettera: 'B',
		nome: 'Wow',
		idea: "Si apre come un forno che si accende. Tutto entra in scena mentre scorri, le schede si muovono sotto al mouse.",
	},
	{
		id: 'vetrina',
		lettera: 'C',
		nome: 'Vetrina',
		idea: 'I pezzi esposti su mensole, come in negozio. Si toccano, si guardano da vicino: pezzi unici, non un catalogo.',
	},
	{
		id: 'rosa',
		lettera: 'D',
		nome: 'Rosa pieno',
		idea: 'Il rosa diventa protagonista, con scritte grandi e nere. La più coraggiosa.',
	},
	{
		id: 'racconto',
		lettera: 'E',
		nome: 'Racconto',
		idea: "Come una rivista: racconta il viaggio di un pezzo dall'argilla al forno, e i prodotti vivono dentro la storia.",
	},
	{
		id: 'morbida',
		lettera: 'F',
		nome: 'Morbida',
		idea: 'Forme tonde, etichette come adesivi, piccoli dettagli giocosi. La più leggera e simpatica.',
	},
	{
		id: 'bacheca',
		lettera: 'G',
		nome: 'Bacheca',
		idea: 'I pezzi sono foto appese su una bacheca rosa: si possono spostare col dito o col mouse, come su un tavolo di lavoro.',
	},
	{
		id: 'laboratorio',
		lettera: 'H',
		nome: 'Laboratorio',
		idea: 'Entri nel laboratorio disegnato e lo esplori: mensole, tavolo, forno. Tocchi gli oggetti per scoprire i pezzi in vendita.',
	},
	{
		id: 'flusso',
		lettera: 'I',
		nome: 'Flusso',
		idea: 'Minimal ma tutta guidata dallo scroll: le parole si accendono, i pezzi si impilano, il rosa riempie lo schermo.',
	},
] as const;

export type IdTema = (typeof TEMI)[number]['id'];

export function trovaTema(id: string) {
	return TEMI.find((t) => t.id === id)!;
}

/** Percorsi di tutte le pagine di una proposta, per getStaticPaths. */
export function percorsiTemi() {
	return TEMI.map((t) => ({ params: { tema: t.id } }));
}

/** Link interno dentro una proposta: link('vetrina', '/shop') -> '/vetrina/shop' */
export function link(tema: string, percorso: string): string {
	if (percorso === '/' || percorso === '') return `/${tema}/`;
	return `/${tema}${percorso}`;
}
