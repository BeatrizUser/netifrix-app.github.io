import React, {useEffect, useState} from 'react';
import './App.css'
import Tmdb from './tmdb.js';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeatureMovie';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null)

    useEffect(()=>{
      const LoadAll = async ()=>{
        // pegando a lista
        let list = await Tmdb.getHomeList();
        setMovieList(list);
        // Pegando o Featured
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length -1));
        let chosen = originals[0].itens.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);
      }

      LoadAll();
    }, []);

    return(
        <div className= "page">

          {featuredData &&
            <FeaturedMovie item={featuredData}/>
          }

          <section className="lists">
            {movieList.map((item, key)=>(
              <MovieRow key={key} title={item.title} itens={item.itens}/>
            ))}
          </section>
        </div>
    );
}