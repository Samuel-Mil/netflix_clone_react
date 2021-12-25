import { useEffect, useState } from "react";
import Tmdb from "./api/Tmdb";

import { FeaturedMovie } from "./components/FeaturedMovie";
import { MovieRow } from "./components/MovieRow";
import { Header } from "./components/Header";

export function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    async function loadAll(){
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  useEffect(()=>{
    function scrollListener(){
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {
          movieList.map((item, key)=>(
              <MovieRow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>

      <footer>
        <p>Made with love by <a target="_blank" href="https://github.com/samuel-mil">Samuel Milhomens</a></p>
        <p>Netflix image rights</p>
        <p>Data taken from api of <a target="_blank" href="https://themoviedb.org">Tmdb</a></p>
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" />
      </div>
      }
    </div>
  );
}
