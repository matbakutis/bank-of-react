import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DebitsList from './DebitsList';

class Debits extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                <DebitsList debits={this.props.debits} />
                <Link to="/">Back to Home</Link><br />
            </div>
        );
    }
}

export default Debits;