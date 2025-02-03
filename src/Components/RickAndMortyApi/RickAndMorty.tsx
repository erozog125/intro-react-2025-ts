import { useState, useEffect } from 'react';

// URL de la API
const URL: string = 'https://rickandmortyapi.com/api/character/';

// Interfaz para los personajes
interface Character {
  id: number;
  name: string;
  image: string;
}

export const RickAndMorty = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Definimos la función fetchCharacters fuera del useEffect
  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulamos un retraso de 5 segundos antes de hacer la petición
    const timer = setTimeout(() => {
      fetchCharacters(); // Llamamos la función manualmente
    }, 5000);

    // Limpiamos el timeout si el componente se desmonta antes de que termine
    return () => clearTimeout(timer);
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div>
      <h1>Rick and Morty Character Gallery</h1>

      {/* Mostramos el loader si está cargando */}
      {loading && <div className="loader">Loading...</div>}

      {/* Mostramos el error si ocurrió alguno */}
      {error && <div>Error: {error}</div>}

      {/* Mostramos los personajes solo si no estamos cargando y no hay errores */}
      {!loading && !error && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {characters.map((character) => (
            <div key={character.id} style={{ margin: '10px' }}>
              <img
                src={character.image}
                alt={character.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <p>{character.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Botón para recargar manualmente los datos */}
      <button className='btnLoader' onClick={fetchCharacters} disabled={loading}>
        {loading ? 'Loading...' : 'Reload Characters'}
      </button>
    </div>
  );
};
