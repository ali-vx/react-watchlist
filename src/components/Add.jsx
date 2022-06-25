import {useState} from 'react';
import { ResultCard } from './ResultCard';

const API_KEY='31b3afc035368d5441c7200a0ccf13c9';

export const Add = () => {
  const [query,setQuery] = useState('');
  const [results,setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(res => res.json())
    .then((data) => {
      if(!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" placeholder="Seach for a Movie" 
            value={query} onChange={onChange} />
          </div>

          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
