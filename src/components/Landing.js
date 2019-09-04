import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: 'Mona', backgroundColor: 'blue' },
                { name: 'Jasmine', backgroundColor: 'red' },
                { name: 'Aura', backgroundColor: 'green' },
                { name: 'Tina', backgroundColor: 'yellow' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Who's Watching?</h1>
                <div id='users'>
                    {this.state.users.map(u => <Link to="/catalog">
                        <div className='user' style={{ backgroundColor: u.backgroundColor }}>{u.name}</div>
                    </Link>)}
                </div>
            </div>
        )
    }
}

export default Landing;
