
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import PoeticaCard from './components/PoeticaCard';
import { getImmagineDelMondo, analyzePoem } from './services/geminiService';

const App: React.FC = () => {
  const [mondoText, setMondoText] = useState<string>('Caricamento...');
  const [poemAnalysis, setPoemAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const text = await getImmagineDelMondo();
      setMondoText(text || '');
      
      const analysis = await analyzePoem("X Agosto");
      setPoemAnalysis(analysis || '');
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const poeticaData = [
    {
      title: "Il fanciullino come simbolo",
      content: "Secondo Pascoli, dentro ogni uomo vive un piccolo fanciullo, una voce interiore che sa stupirsi di tutto ciò che vede e che sente. Da bambini questa voce coincide con la nostra, ma crescendo essa resta nascosta, mentre noi diventiamo adulti e ci lasciamo condizionare dalla ragione e dalle convenzioni sociali. Il fanciullino, però, non muore: continua a vivere in noi, ed è il poeta che riesce ad ascoltarlo e a dargli voce."
    },
    {
      title: "Il poeta come novello Adamo",
      content: "Il poeta è paragonato a un nuovo Adamo che mette nome alle cose per la prima volta. Non si limita a descrivere, ma scopre il mondo come se fosse sempre nuovo. In questo senso la poesia è intuizione pura: non nasce dalla razionalità (logos), ma dallo stupore infantile che coglie il mistero insito nella realtà."
    },
    {
      title: "La funzione della poesia",
      content: "La poesia, per Pascoli, non è frutto di calcolo o ragionamento, ma è illuminazione improvvisa, intuizione momentanea che scaturisce dall’incontro tra il fanciullino e le cose. Essa rivela ciò che altrimenti resterebbe nascosto: la verità profonda racchiusa negli oggetti più semplici, nei gesti quotidiani, nelle “cose umili”."
    },
    {
      title: "Il valore universale",
      content: "Il fanciullino non appartiene solo al poeta: è presente in ogni uomo. Ma mentre la maggior parte degli adulti smette di ascoltarlo, il poeta conserva questa capacità e la trasmette attraverso i suoi versi. In questo modo, la poesia diventa un linguaggio universale che permette a tutti di ritrovare lo stupore originario dell’infanzia."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <header id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl serif font-bold text-stone-900 leading-tight">
              Giovanni <br />
              <span className="text-emerald-700 italic">Pascoli</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              Esplora l'universo lirico di uno dei più grandi poeti del decadentismo italiano. Un viaggio tra mistero, natura e la voce eterna del fanciullino.
            </p>
            <div className="pt-4 flex gap-4">
              <a href="#poetica" className="px-8 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-emerald-800 transition-colors">
                La Poetica
              </a>
              <a href="#mondo" className="px-8 py-3 border border-stone-300 text-stone-800 rounded-full font-medium hover:bg-stone-100 transition-colors">
                Scopri di più
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/pascoli/800/1000" 
                alt="Giovanni Pascoli" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-stone-100 rounded-full -z-0"></div>
          </div>
        </div>
      </header>

      {/* Immagine del Mondo Section */}
      <section id="mondo" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-4 block">L'Universo Pascoliano</span>
          <h2 className="text-3xl md:text-4xl serif font-bold mb-8 text-stone-800">Immagine del Mondo</h2>
          <div className="prose prose-stone mx-auto">
            <p className="text-xl text-stone-600 leading-relaxed italic">
              {mondoText}
            </p>
          </div>
        </div>
      </section>

      {/* Poetica e Simbolismo Section */}
      <section id="poetica" className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-4 block">Il Pensiero</span>
              <h2 className="text-4xl serif font-bold text-stone-800">Poetica e Simbolismo</h2>
            </div>
            <p className="text-stone-500 md:w-1/3 text-sm">
              Il nucleo centrale del pensiero pascoliano risiede nella riscoperta della realtà attraverso occhi nuovi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {poeticaData.map((item, index) => (
              <PoeticaCard key={index} title={item.title} content={item.content} />
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 p-10 rounded-3xl border border-emerald-100">
             <h3 className="text-2xl serif font-bold mb-4 text-emerald-900">Conclusione</h3>
             <p className="text-emerald-800/80 leading-relaxed">
              La poetica del fanciullino segna un momento centrale nella letteratura italiana: da un lato si collega alla tradizione romantica e leopardiana (la poesia come scoperta del mistero e della natura), dall’altro apre alla sensibilità decadente, in cui il mondo è visto come enigma da cogliere attraverso simboli e suggestioni. In Pascoli, la poesia non è scienza né filosofia, ma uno sguardo innocente e meravigliato che rinnova continuamente il mondo.
             </p>
          </div>
        </div>
      </section>

      {/* La Poesia Scelta Section */}
      <section id="poesia" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="bg-stone-900 text-white p-12 rounded-3xl shadow-xl">
                <h2 className="text-3xl serif font-bold mb-8">X Agosto</h2>
                <div className="space-y-4 font-serif text-lg leading-relaxed text-stone-300">
                  <p>San Lorenzo, io lo so perché tanto<br/>di stelle per l'aria tranquilla<br/>arde e cade, perché si gran pianto<br/>nel concavo cielo sfavilla.</p>
                  <p>Ritornava una rondine al tetto:<br/>l'uccisero: cadde tra spini:<br/>ella aveva nel becco un insetto:<br/>la cena dei suoi rondinini.</p>
                  <p>Ora è là, come in croce, che tende<br/>quel verme a quel cielo lontano;<br/>e il suo nido è nell'ombra, che attende,<br/>che pigola sempre più piano.</p>
                  <p>Anche un uomo tornava al suo nido:<br/>l'uccisero: disse: Perdono;<br/>e restò negli aperti occhi un grido:<br/>portava due bambole in dono...</p>
                </div>
              </div>
              <div className="space-y-8 py-6">
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    L'Analogia
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Pascoli istituisce un parallelismo perfetto tra la rondine uccisa mentre torna al nido e il padre assassinato. Entrambi portano nutrimento (o doni) ai propri 'piccoli', spezzando brutalmente il legame familiare.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Il Cosmo Indifferente
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Le stelle cadenti sono interpretate come il 'pianto del cielo' davanti alla malvagità umana. Tuttavia, è un cielo 'lontano' e 'concavo', suggerendo una distanza incolmabile e un'indifferenza cosmica.
                  </p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="font-bold text-stone-800 mb-2">Insight AI</h4>
                  <p className="text-sm text-stone-500 italic">
                    {poemAnalysis || "Analisi automatica in corso..."}
                  </p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Mappe Concettuali Section */}
      <section id="mappe" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif font-bold text-stone-800 mb-4">Mappe Concettuali</h2>
            <p className="text-stone-600">Strumenti visivi per lo studio della poetica pascoliana.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Il Fanciullino</h4>
              <p className="text-xs text-stone-500">Stupore, Intuizione, Nuovo Adamo, Visione infantile della realtà.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Simbolismo del Nido</h4>
              <p className="text-xs text-stone-500">Famiglia, Protezione, Traumi infantili, La siepe come barriera.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Linguaggio</h4>
              <p className="text-xs text-stone-500">Onomatopee, Fonosimbolismo, Lessico tecnico e quotidiano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Approfondimento Video</h2>
            <p className="text-stone-500">Un'introduzione visiva alla vita di Giovanni Pascoli.</p>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-stone-100 flex items-center justify-center border border-stone-200 group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
            <div className="z-10 w-20 h-20 bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
            <p className="absolute bottom-8 text-white font-medium">Documentario: Vita e Opere di G. Pascoli</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-400 text-sm">
            © 2024 Sito Scolastico Giovanni Pascoli. Tutti i diritti riservati.
          </div>
          <div className="flex gap-8 text-stone-500 text-sm font-medium">
            <a href="#" className="hover:text-emerald-700 transition-colors">Contatti</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Bibliografia</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
