import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActiveDeals extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        // const activeDeals = this.memoization(this.props.latestDeals);
        console.log("DEBUG: newest active-deals are:" + this.props.messages);

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <table id="active-deals-listing" className="table table-striped">
                            <thead>
                            <tr>
                                <th>Active Deals</th>
                            </tr>
                            </thead>
                            <tbody id="deals">  
                                {
                                    this.props.messages == null? <tr></tr> : this.props.messages.map (
                                        deal =>
                                        <tr key = {deal.id}>
                                            <td>Hello{deal.categoryName}</td>
                                            <td>{deal.topLevelCategoryName}</td>
                                            <td>{deal.itemId}</td>
                                            <td>{deal.itemName}</td>
                                            <td>{deal.dealDescription}</td>
                                            <td>{deal.imageUrl}</td>
                                            <td>{deal.expiryTimestamp}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

ActiveDeals.propTypes = {
    sock: PropTypes.object,
    messages: PropTypes.array
}

export default ActiveDeals;