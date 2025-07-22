import { useState } from 'react';

const webLanguages = [
  {
    language: 'HTML',
    description: 'HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.',
  },
  {
    language: 'CSS',
    description: 'CSS (Cascading Style Sheets) è il linguaggio utilizzato per definire lo stile e il layout delle pagine web. Gestisce colori, font, spaziature e posizionamenti degli elementi.',
  },
  {
    language: 'JavaScript',
    description: 'JavaScript è un linguaggio di programmazione lato client che consente di aggiungere interattività e dinamismo alle pagine web. È utilizzato per gestire eventi, animazioni e logica applicativa.',
  },
  {
    language: 'Node.js',
    description: 'Node.js è un ambiente di esecuzione JavaScript lato server basato sul motore V8 di Chrome. Permette di sviluppare applicazioni web scalabili e performanti.',
  },
  {
    language: 'Express',
    description: 'Express è un framework minimalista per Node.js che semplifica la creazione di server web e API. Gestisce routing, middleware e richieste HTTP in modo efficiente.',
  },
  {
    language: 'ReactJS',
    description: 'ReactJS è una libreria JavaScript per la costruzione di interfacce utente interattive. Utilizza componenti riutilizzabili e un DOM virtuale per ottimizzare le prestazioni.',
  },
];

function App() {
  const [language, setLanguage] = useState(webLanguages[0]);

  return (
    <div className="container mt-4">
      <h2>Learn Web development</h2>

      <div className="my-4 d-flex gap-2">
        {webLanguages.map((language, index) => (
          <button key={index} onClick={() => setLanguage(language)} className={`btn ${language.language === language.language ? 'btn-primary' : 'btn-outline-secondary'}`}>{language.language}</button>
        ))}
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{language.language}</h5>
          <p className="card-text">{language.description}</p>
        </div>
      </div>
    </div>
  );
};

export default App;