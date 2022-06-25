import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const ResultCard = ({movie}) => {
  const {addToWatchlist, watchlist} = useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
        ) : (
          <img src="https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt={movie.title} />
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0,4) : "unknown"}
            </h4>
        </div>
        <div className="controls">
          <button className="btn" onClick={() => addToWatchlist(movie)} disabled={watchlistDisabled}>
            Add to Watchlist
            </button>
        </div>
      </div>
    </div>
  )
}
