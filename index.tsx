
import { GoogleGenAI } from "@google/genai";

// Configurazione AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// Helper per ottenere gli elementi del DOM
const getDOMElements = () => ({
    mondoContent: document.getElementById('ai-mondo-content'),
    poesiaAnalysis: document.getElementById('ai-poesia-analysis'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn')
});

// Inizializzazione dei contenuti generati dall'AI
async function initAIContent() {
    const { mondoContent, poesiaAnalysis } = getDOMElements();
    
    try {
        // Generazione dell'Immagine del Mondo
        const worldResponse = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Scrivi un paragrafo poetico e accademico (circa 150 parole) sull'Immagine del Mondo in Giovanni Pascoli: focalizzati sul nido, il mistero e la siepe. Lingua: Italiano.",
            config: { temperature: 0.7 }
        });
        
        if (mondoContent) {
            mondoContent.innerHTML = `<p class="text-xl text-stone-600 leading-relaxed italic">${worldResponse.text}</p>`;
        }

        // Analisi della poesia X Agosto
        const poemResponse = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Analizza brevemente (due frasi) i temi principali della poesia 'X Agosto' di Pascoli. Lingua: Italiano.",
        });

        if (poesiaAnalysis) {
            poesiaAnalysis.innerText = poemResponse.text;
            poesiaAnalysis.classList.remove('animate-pulse');
        }

    } catch (error) {
        console.error("Errore nel recupero dei dati AI:", error);
        if (mondoContent) {
            mondoContent.innerHTML = "<p class='text-red-500'>Spiacenti, i contenuti AI non possono essere caricati al momento.</p>";
        }
    }
}

// Inizializzazione delle animazioni all'apparizione (Scroll Reveal)
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Funzione principale di avvio
const startApp = () => {
    initScrollReveal();
    initAIContent();
    
    // Gestione clic menu mobile (demo)
    const { mobileMenuBtn } = getDOMElements();
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert("Navigazione ottimizzata per lo studio.");
        });
    }
};

// Esegui quando il DOM è pronto
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}
