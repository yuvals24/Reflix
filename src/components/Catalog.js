import React, { Component } from 'react';
import Movie from './Movie'
// import { Link } from 'react-router-dom'


class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            searchPut: '',
            budget: 10
        }
    }

    searchPutChange = (event) => {
        const input = event.target.value
        this.setState({ searchPut: input })
    }
    budgetChange = (type) => {
        type === 'add' ? this.setState({ budget: this.state.budget + 3 }) : this.setState({ budget: this.state.budget - 3 })
    }

    rented = (id) => {
        this.props.rented(id)
    }
    render() {
        const movies = this.props.movies
    
        return (
            <div>
                <span>Search your movie: </span>
                <input className="name-input" value={this.state.searchPut} onChange={this.searchPutChange} />
                <span value={this.state.budget} >Your Budget Is: {this.state.budget}</span>
                {movies.filter(r => r.isRented).length > 0 ? <h2>Rented</h2> : null}
                <div className="moviecontainer">
                    {movies.filter(m => m.title.toLowerCase().includes(this.state.searchPut)).filter(r => r.isRented).map(m => <Movie budget={this.state.budget} type='add' budgetChange={this.budgetChange} img={m.img} id={m.id} rented={this.props.rented} isRented={m.isRented} />)}
                </div>
                {movies.filter(r => !r.isRented).length > 0 ? <h2>Catalog</h2> : null}
                <div className="moviecontainer">
                    {movies.filter(m => m.title.toLowerCase().includes(this.state.searchPut)).filter(r => !r.isRented).map(m => <Movie budget={this.state.budget} type='minus' budgetChange={this.budgetChange} img={m.img} id={m.id} rented={this.props.rented} isRented={m.isRented} />)}
                </div>
            </div>
        )
    }
}

export default Catalog;
