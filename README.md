
# Giovanni Pascoli - Il Fanciullino

Un'applicazione web didattica dedicata alla vita, alle opere e alla poetica di **Giovanni Pascoli**. Il progetto è pensato come risorsa scolastica interattiva, combinando un design moderno con la potenza dell'intelligenza artificiale per l'analisi letteraria.

## 🚀 Funzionalità

- **Analisi Dinamica**: Utilizza l'API Google Gemini per generare saggi brevi sull'immagine del mondo pascoliano e analisi delle poesie (es. *X Agosto*).
- **Design Elegante**: Interfaccia pulita e accademica realizzata con Tailwind CSS e font raffinati (Playfair Display).
- **Sezioni Didattiche**: Focus su "Il Fanciullino", il simbolismo del nido e il linguaggio fonosimbolico.
- **Responsività**: Ottimizzato per desktop, tablet e smartphone.

## 🛠️ Tecnologie Utilizzate

- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Google Gemini API** (@google/genai)
- **Lucide React** (per le icone)

## 📦 Installazione e Utilizzo

1. **Clona il repository**:
   ```bash
   git clone https://github.com/tuo-username/giovanni-pascoli-sito.git
   cd giovanni-pascoli-sito
   ```

2. **Configurazione API**:
   Assicurati di avere una chiave API per Google Gemini. L'app si aspetta la chiave in `process.env.API_KEY`.

3. **Esecuzione**:
   Essendo basato su moduli ES6 nativi caricati tramite `index.html`, puoi servire la cartella radice con qualsiasi server statico:
   ```bash
   npx serve .
   ```

## 📚 Struttura del Progetto

- `/components`: Elementi UI riutilizzabili (Navigazione, Card).
- `/services`: Logica per l'integrazione con l'intelligenza artificiale.
- `App.tsx`: Layout principale e gestione dello stato.
- `index.html`: Entry point con import maps.

## 📄 Licenza

Distribuito sotto licenza MIT. Vedere `LICENSE` per ulteriori informazioni.
