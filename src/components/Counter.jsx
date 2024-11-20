import { useState } from 'react';

function Counter() {
  const [valori, setValori] = useState([0, 0, 0]); // Stato per i valori degli input

  const aggiornaValore = (indice, nuovoValore) => {
    const nuoviValori = [...valori]; // Crea una copia dello stato
    nuoviValori[indice] = parseFloat(nuovoValore) || 0; // Aggiorna il valore specifico
    setValori(nuoviValori); // Aggiorna lo stato
  };
  

  let sommaTotale = valori.reduce((acc, val) => acc + val, 0); // Calcola la somma

  return (
    <div>
      <h1>Somma in tempo reale</h1>
      <div>
        {valori.map((val, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <input
              type="number"
              value={val}
              onChange={(e) => aggiornaValore(idx, e.target.value)} // Aggiorna il valore
            />
          </div>
        ))}
      </div>
      <h2>Somma totale: {sommaTotale}</h2>
    </div>
  );
}

export default Counter;
