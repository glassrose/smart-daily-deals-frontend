import React, { Component } from 'react';
import './DealCard.css'

class DealCard extends Component {
    render() {
        return (
            <div className="dealStyle">
                <ul>
                    <li>
                        <img src="https://joeschmoe.io/api/v1/abc" alt="Deal_#"/>
                    </li>
                </ul>
                
            </div>
        );
    }
}

export default DealCard;