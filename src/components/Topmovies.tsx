import React, { FC, useContext, useEffect, useState } from 'react'

import Moviecard from './Moviecard'

import { resContext, watchListContext, Watchlistprovider } from '../Contexts'

import { IMovie } from '../Interfaces'

interface Props {
  addToWatch(details: IMovie): void;
}

const Topmovies: FC<Props> = ({ addToWatch }: Props) => {

    const [ movies, setMovies ] = useState<IMovie[]>([])

    // const watchList = useContext(watchListContext)
    const resItem = useContext(resContext)

    // console.info("Fetching WatchList in TopMovies" , [...watchList])


    useEffect(() => {
      console.log(resItem)
      setMovies(resItem.filter((item: IMovie) => {
        console.log("I am in setMovies")
        return Number(item.rank) <= 50
      }));
    }, [])

    const listMore = () => {
      setMovies(resItem.filter((item: IMovie) => {
        return Number(item.rank) <= movies.length+25
      }))
    }

  return (
    <div className="home">
        <div className="cards">
        {movies.length > 0 ? movies.map((movie) => {
          //console.log(movies.indexOf(movie))
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
                  key={movie.id}
                  details={details}
                  addToWatch={() => {addToWatch(details)}}
                />
          );
        }): "Loading.."}
        </div>
        {movies.length > 0 && movies.length < 250 ? <button className="more" onClick={() => {listMore()}}>More 👇</button>: "Nothing To Show"}
      </div>
  )
}

export default Topmovies;