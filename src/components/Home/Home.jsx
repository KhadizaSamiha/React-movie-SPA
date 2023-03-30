import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = ({handlewatchTime}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])
    return (
        <div>
           <div className="movie-container row">
           {
            movies.map(movie => <SingleCart movie={movie} handlewatchTime={handlewatchTime}></SingleCart>)
           }
           </div>
        </div>
    );
};

export default Home;