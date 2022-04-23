import React, { FC, useEffect, useState } from "react";
import { IMovie } from "./Interfaces";

export const resContext = React.createContext<IMovie[]>([]);

export const Resprovider: FC<any> = (props: any) => {
  const [resItem, setResItem] = useState<IMovie[]>([]);

  useEffect((): void => {
    // const key = process.env.REACT_APP_IMDB_API_KEY;
    // console.log(key);

    const api = async () => {
      const data = await fetch(
        `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`
      );
      console.log(data);
      const res = await data.json();
      console.log("results", res)

      //console.log("result items",res.items);

      // const resultItems = res.items
      setResItem(res.items);
      
      console.log("state result", resItem);
    };
    api();
  }, []);

  return (
    <resContext.Provider value={resItem}>{props.children}</resContext.Provider>
  );
};

export const watchListContext = React.createContext<IMovie[]>([]);

type Props = {
  value: IMovie[];
  children: JSX.Element;
};

export const Watchlistprovider: FC<Props> = ({ value, children }: Props) => {
  return (
    <watchListContext.Provider value={value}>
      {children}
    </watchListContext.Provider>
  );
};
