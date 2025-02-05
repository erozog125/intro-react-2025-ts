import { useFetch } from '../../hooks/useFetch'

// Interfaz para los personajes
interface Character {
  id: number
  name: string
  image: string
}
// URL de la API
const URL: string = 'https://rickandmortyapi.com/api/character/'

export const RickAndMorty = () => {

  const { data, error, loading } = useFetch<{ results: Character[] }>(URL)
  
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
          {data?.results.map((character) => (
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
    </div>
  )
}
