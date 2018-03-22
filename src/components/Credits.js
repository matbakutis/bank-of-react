import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreditsList from './CreditsList';

class Credits extends Component {
    render() {
        console.log(this.props.credits);
        return (
            <div>
                <h1>Credits</h1>
                <CreditsList credits={this.props.credits} />
                <Link to="/">Back to Home</Link><br />
            </div>
        );
    }
}

export default Credits;