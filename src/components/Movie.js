import React from 'react';

function Movie(props) {
    const {
        Poster: poster,
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
    } = props;
    return (
        <div className="movie card" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {poster === 'N/A' ? (
                    <img
                        className="activator"
                        src="https://placehold.co/600x400/000000/FFF"
                        alt="movie"
                    />
                ) : (
                    <img className="activator" src={poster} alt="movie" />
                )}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                    <p className="material-icons right">
                        {year} <span className="right">{type}</span>
                    </p>
                </span>
            </div>
        </div>
    );
}
export { Movie };
