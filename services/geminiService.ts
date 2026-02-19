
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getImmagineDelMondo = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Scrivi un breve saggio (circa 200 parole) sull'Immagine del Mondo in Giovanni Pascoli, focalizzandoti sul nido, il mistero e la siepe. Usa un tono accademico ma accessibile per studenti delle superiori.",
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Errore nel recupero dell'immagine del mondo:", error);
    return "Il mondo pascoliano è dominato dal senso del mistero e dalla ricerca del 'nido', inteso come rifugio protettivo contro un esterno minaccioso e indecifrabile. La realtà si frammenta in piccoli oggetti carichi di valore simbolico, dove la siepe non è solo un confine fisico, ma una barriera metafisica che invita all'immaginazione e alla scoperta dell'ignoto attraverso lo sguardo puro del fanciullino.";
  }
};

export const analyzePoem = async (poemTitle: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analizza brevemente la poesia "${poemTitle}" di Giovanni Pascoli evidenziandone i temi principali e lo stile.`,
    });
    return response.text;
  } catch (error) {
    return "Analisi non disponibile al momento.";
  }
};
