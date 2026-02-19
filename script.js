
import { GoogleGenAI } from "@google/genai";

// Configurazione AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Elementi DOM
const mondoContent = document.getElementById('ai-mondo-content');
const poesiaAnalysis = document.getElementById('ai-poesia-analysis');

// Inizializzazione Content AI
async function initAIContent() {
    try {
        // Generazione Immagine del Mondo
        const worldResponse = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Scrivi un paragrafo poetico e accademico (150 parole) sull'Immagine del Mondo in Giovanni Pascoli: il nido, il mistero, la siepe. Lingua: Italiano.",
            config: { temperature: 0.7 }
        });
        
        if (mondoContent) {
            mondoContent.innerHTML = `<p class="text-xl text-stone-600 leading-relaxed italic">${worldResponse.text}</p>`;
        }

        // Analisi Poesia
        const poemResponse = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Analizza brevemente i temi di 'X Agosto' di Pascoli in due frasi. Lingua: Italiano.",
        });

        if (poesiaAnalysis) {
            poesiaAnalysis.innerText = poemResponse.text;
            poesiaAnalysis.classList.remove('animate-pulse');
        }

    } catch (error) {
        console.error("Errore API:", error);
        if (mondoContent) mondoContent.innerHTML = "<p class='text-red-500'>Impossibile caricare i contenuti AI al momento.</p>";
    }
}

// Reveal Animations on Scroll
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

// Gestione Menu Mobile
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            alert("Menu navigazione rapida attivo");
        });
    }
}

// Avvio
window.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initMobileMenu();
    initAIContent();
});
