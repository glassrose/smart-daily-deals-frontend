import React from 'react'
import useLatestDeals from './useLatestDeals'
import PropTypes from 'prop-types';

export default function ActiveDeals(props) {
    const latestDeals = useLatestDeals();
                                
    return (
        <div>
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
                                // latestDeals.map (
                                    props.activeDeals == null? <div></div> : props.activeDeals.map(
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
        </div>
    )
}