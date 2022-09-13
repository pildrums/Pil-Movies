import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

const API_KEY = '771de4bf9719d27e98e94a95c750110e';

const Home = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <Container>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.title}</h4>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
  .movie {
    cursor: pointer;
  }
  .movie img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
  }
  .movie:hover img {
    transform: scale(1.05) translateY(-10px);
  }
  .movie h4 {
    font-size: 18px;
    text-align: center;
  }
`;

export default Home;
