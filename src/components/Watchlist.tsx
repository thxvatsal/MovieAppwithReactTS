import React, { FC, useContext, useEffect, useState } from "react";

import { watchListContext } from "../Contexts";

import { IMovie } from "../Interfaces";

import Watchcard from "./Watchcard";

interface Prop {
  addToWatched(details: IMovie): void;
}

const Watchlist: FC<Prop> = ({addToWatched}: Prop) =>  {
  const watchList = useContext(watchListContext);

  const [watch, setWatch] = useState<IMovie[]>([]);

    useEffect(() => {
        setWatch(watchList)
    }, [watchList])

  /* const addToWatched = (movie: IMovie): void => {
    setWatch(
      watch.filter((mov) => {
        return mov.id != movie.id;
      })
    );
    alert("removed");
  };
 */
  return (
    <>
      {watchList.length > 0 ? (
        <>
          <span className="span">WatchList 💙</span>
          <div className="watchlist">
            {watch.map((movie) => {
              const details = {
                id: movie.id,
                image: movie.image,
                rank: movie.rank,
                title: movie.title,
                year: movie.year,
                imDbRating: movie.imDbRating,
              };
              return (
                <Watchcard
                  details={details}
                  addToWatched={() => addToWatched(movie)}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Watchlist;
