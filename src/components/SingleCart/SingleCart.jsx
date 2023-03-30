import React from 'react';

const SingleCart = ({movie, handlewatchTime}) => {
    return (
        <div className="movie-cart card w-75 m-auto text-center p-3 lg:col-md-6">
               <div className="movie-poster w-25 m-auto">
                 <img className='w-100 '  src={movie.poster} alt="" />
               </div>
               <h3>{movie.movieName}</h3>
               <p>WatchTime: {movie.watchTime}</p>
               <button onClick={()=> handlewatchTime(movie.watchTime)} className='btn btn-info w-full'>Book Now</button>
            </div>
    );
};

export default SingleCart;