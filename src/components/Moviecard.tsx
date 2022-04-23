import React, { FC } from "react";
import {IMovie} from '../Interfaces'

interface MovieProp {
    details: IMovie
    addToWatch(movie: IMovie):void;
}

const Moviecard:FC<MovieProp> = ({ details, addToWatch}: MovieProp) => {
    return (
        <div className="card">
            <img src={details.image} className="poster"/>
            <span className="title">#{details.rank} {details.title}</span>
            <span className="imdb">IMDB Rating: {details.imDbRating}</span>
            <button className="wishbtn" onClick={() => {addToWatch(details)}}>💙 Add To Watchlist</button>
        </div>
    )
}

export default Moviecard;