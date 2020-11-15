import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
    return <div class="movies_movie">
        <img src={poster} alt={title} title={title}></img>
        <div class="movie_data">
            <h3 class movie="movie_title">{title}</h3>
            <h5 class movie="movie_year">{year}</h5>
            <p class movie="movie_summary">{summary}</p>
        </div>            
    </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired //이거 이름이 다른데 접근할 수가 있는 거야?
};

export default Movie;