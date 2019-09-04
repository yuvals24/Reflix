import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Movie extends Component {

    rented = () => {
        if ((this.props.budget > 2) || (this.props.type === 'add')) {
            this.props.rented(this.props.id)
            this.props.budgetChange (this.props.type)
        }  
        else {
            alert('There are insufficient funds, and not allow the rental to happen')
        }
        
    }

    render() {
        return (
            <div>
                <div className="add" onClick={this.rented} > {this.props.isRented ? '-' : '+'} </div> 
                <div><Link to={`/movies/${this.props.id}`}> <img className="movieimg" src={this.props.img} /></Link></div>}
           </div>
        )
    }
}

export default Movie

