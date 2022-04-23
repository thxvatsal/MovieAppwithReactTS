import React, { useContext, useEffect, useState } from "react";

import "./App.css";

import Nav from "./components/Nav";

import Moviecard from "./components/Moviecard";
import Watchcard from "./components/Watchcard"

import { IMovie } from "./Interfaces";
import Topmovies from "./components/Topmovies";

import { Resprovider, Watchlistprovider } from './Contexts'
import Watchlist from "./components/Watchlist";

import { watchListContext } from './Contexts'

function App() {
  const [ resItem, setResItem ] = useState<IMovie[]>([]);
  const [ movies, setMovies ] = useState<IMovie[]>([]);
  const [ watchList, setWatchList ] = useState<IMovie[]>([]);
  const watch = useContext(watchListContext)

/*   useEffect((): void => {
    //API call
    const key = process.env.REACT_APP_IMDB_API_KEY;
    console.log(key);
    const api = async () => {
      const data = await fetch(
        `https://imdb-api.com/en/API/Top250Movies/${key}`
      );
      console.log(data);
      const res = await data.json();
      console.log(res);
      setResItem(res.items)
      console.log(1,resItem)
      setMovies(resItem.filter((item: IMovie) => {
        console.log("I am in setMovies")
        return Number(item.rank) <= 50
      }));
      console.log(2,movies);
    };
    api();
  },[]); */

  const addToWatch = (movie: IMovie): void => {
    console.info("Inside addToWatch function")

    const filter = watchList.filter((mov) => {
      return mov.id != movie.id
    })

    console.log(filter)

    console.log(watchList)
    setWatchList([...watchList, movie])
  
    
  }

  const addToWatched = (movie: IMovie): void => {
    setWatchList(watchList.filter((mov) => {
      return mov.id != movie.id
    }))
    alert("removed")
  }

  const listMore = () => {
    setMovies(resItem.filter((item: IMovie) => {
      return Number(item.rank) <= movies.length+25
    }))
  }

  return (
    <>
      <Nav />
      {/* { watchList.length > 0 ?
        (
        <>
          <span className="span">WatchList 💙</span>
          <div className="watchlist">
            {
              watchList.map((movie) => {
                const details = {
                  id: movie.id,
                  image: movie.image,
                  rank: movie.rank,
                  title: movie.title,
                  year: movie.year,
                  imDbRating: movie.imDbRating
                }
                return (
                  <Watchcard
                    details={details}
                    addToWatched={() => addToWatched(movie)}
                  />
                );
              })
            }
          </div>
        </>
        ) : ''
      }
      <span className="span">1. Top Movies 🎥</span>
      <div className="home">
        <div className="cards">
        {movies.length > 0 ? movies.map((movie) => {
          const details = {
              id:movie.id,
              image:movie.image,
              rank:movie.rank,
              title:movie.title,
              year:movie.year,
              imDbRating:movie.imDbRating
          }
          return (
            <Moviecard
              details={details}
              addToWatch={() => addToWatch(movie)}
            />
          );
        }): "Loading.."}
        </div>
        {movies.length > 0 && movies.length < 250 ? <button className="more" onClick={() => {listMore()}}>More 👇</button>: "Nothing To Show"}
      </div> */}

        <Watchlistprovider value={watchList}>
          <Watchlist addToWatched={addToWatched}/>
        </Watchlistprovider>
        
        <Resprovider>
          <Topmovies addToWatch={addToWatch}/>
        </Resprovider>
        

    </>
  );
}

export default App;
