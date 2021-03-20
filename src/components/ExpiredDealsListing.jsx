import React, { Component } from 'react';

class ExpiredDealsListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ws: new WebSocket("http://localhost:8080/api/v1/topic/deals"),
            expiredDeals: []
        }
    }

    componentDidMount() {
        this.ws.onopen = () => {
            //Just log to console
            console.log("Connected to /topic/deals");
        }
        this.onmessage() = (event) => {
            const deal = JSON.parse(event.data);
            this.state.expiredDeals  //<-- TODO
        }
    }
    
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-12">
                        <table id="expired-deals-history" class="table table-striped">
                            <thead>
                            <tr>
                                <th>Expired Deals</th>
                            </tr>
                            </thead>
                            <tbody id="messages">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpiredDealsListing;