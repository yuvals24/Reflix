import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        const movie = this.props.movies[this.props.match.params.id]

        return (
            <div>
                <h1>{movie.title} ({movie.year})</h1>
                <img className="permovieimg" src={movie.img} />
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail;
