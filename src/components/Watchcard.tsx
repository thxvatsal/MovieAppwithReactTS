import React, { FC } from "react";
import {IMovie} from '../Interfaces'

interface MovieProp {
    details: IMovie
    addToWatched(movie: IMovie):void;
}

const Moviecard:FC<MovieProp> = ({ details, addToWatched}: MovieProp) => {
    return (
        <div className="listcard">
            <img src={details.image} className="listposter"/>
            <div className="detail">
                <span className="listtitle">
                    #{details.rank} {details.title}
                </span>
                <button className="removebtn" onClick={() => addToWatched(details)}>
                    ❌ Remove from WatchList
                </button>
            </div>
        </div>
    )
}

export default Moviecard;