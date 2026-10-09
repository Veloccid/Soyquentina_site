// I prodotti in vendita sul sito.
// Per ora sono SEGNAPOSTO: nomi, prezzi, misure e foto vanno sostituiti con quelli veri.
//
// tipo:
//   'modellata'  = ceramica modellata a mano da Quentina
//   'illustrata' = ceramica già fatta, dipinta/illustrata a mano da Quentina
//
// foto: percorsi dentro /public, es. ['/prodotti/tazza-1.jpg']. Se vuoto compare un riquadro "foto in arrivo".

export type TipoCeramica = 'modellata' | 'illustrata';

export interface Prodotto {
	slug: string; // parte finale dell'indirizzo: /prodotti/<slug>
	nome: string;
	prezzo: number; // in euro
	tipo: TipoCeramica;
	descrizione: string;
	dimensioni: string;
	peso: string;
	pezzoUnico: boolean;
	disponibile: boolean;
	foto: string[];
}

export const TIPI: Record<TipoCeramica, { titolo: string; etichetta: string; spiegazione: string }> = {
	modellata: {
		titolo: 'Modellate a mano',
		etichetta: 'Modellata a mano',
		spiegazione:
			"Pezzi che nascono dall'argilla: li modello, li cuocio e li decoro io, uno per uno.",
	},
	illustrata: {
		titolo: 'Illustrate a mano',
		etichetta: 'Illustrata a mano',
		spiegazione:
			'Ceramiche già formate che scelgo e su cui disegno a mano le mie illustrazioni.',
	},
};

const descrizioneSegnaposto =
	'Descrizione segnaposto: qui andranno due o tre righe sul pezzo, la forma, i colori e come usarlo.';

export const PRODOTTI: Prodotto[] = Array.from({ length: 10 }, (_, i) => {
	const n = i + 1;
	return {
		slug: `pezzo-${n}`,
		nome: `Pezzo n. ${n}`,
		prezzo: [35, 48, 28, 62, 40, 55, 30, 75, 45, 38][i],
		tipo: 'modellata' as TipoCeramica,
		descrizione: descrizioneSegnaposto,
		dimensioni: 'Ø 00 cm × h 00 cm',
		peso: '000 g',
		pezzoUnico: true,
		disponibile: true,
		foto: [],
	};
});

export function prezzoFormattato(euro: number): string {
	return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(euro);
}
