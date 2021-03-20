import React, { PureComponent } from 'react';
import memoize from "memoize-one";
// import {Client} from '@stomp/stompjs'
import  Stomp from 'stompjs';
import SockJS from 'sockjs';

// const ACTIVE_DEALS_SUBSCRIPTION_URL = "wss://localhost:8080/api/v1/topic/active-deals";
const ACTIVE_DEALS_SUBSCRIPTION_URL = "http://localhost:8080/deals-generator";
        

class ActiveDealsListing extends PureComponent {
    
    constructor(props) {
        super(props);

    }

    // memoization = memoize((latestDeals) => latestDeals);

    // componentDidMount() {
    //     // this.connect();
    // }

    // connect = () => {
    //     // const ws = this.props.websocket;
        
    //     // var ws = new WebSocket("ws://localhost:8080/deals-generator");
        
    //     // this.client = new WebSocket("wss://localhost:8080/deals-generator");

    //     // this.client.configure({
    //     //     brokerUrl:'http://localhost:8080/deals-generator',
    //     //     onConnect: () => {
    //     //         console.log('onConnect');

    //     //         this.client.subscribe('/topic/active-deals', message => {
    //     //             console.log(message);
    //     //             this.setState({activeDeals: message.body});
    //     //         });
    //     //     },
    //     //     // Helps during debugging, remove in production
    //     //     debug: (str) => {
    //     //         console.log(new Date(), str);
    //     //     }
    //     // });

    //     // this.client.activate();

    //     ws.onopen = () => {
    //         //Just log to console
    //         console.log("ActiveDealsListing subscribed to: " + ACTIVE_DEALS_SUBSCRIPTION_URL);
    //         this.setState({ws: ws});
    //         // ws
    //     }
    //     if (ws != null) {
    //         ws.onmessage = (event) => {
    //             const deals = JSON.parse(event.data);
    //             this.setState({activeDeals: deals});
    //             console.log("ActiveDealsListing received fresh deals: " + deals);
    //         }
    //     }
    //     ws.onclose = (event) => {
    //         console.log("ActiveDealsListing disconnected from: " + ACTIVE_DEALS_SUBSCRIPTION_URL,
    //             event.reason);
    //     }
    // }
    
    // componentDidUpdate = () => {

    //     var SockJsClient: (props: any) => any
    //     return <SockJsClient url={ACTIVE_DEALS_SUBSCRIPTION_URL} topics={['/topics/active-deals']}
    //             onopen={() => {
    //                 console.log("Connected to: " + ACTIVE_DEALS_SUBSCRIPTION_URL);
    //                 console.log("Subscribed to: '/topics/active-deals'");
    //             }}
    //             onMessage={(event) => {
    //                 const deals = JSON.parse(event.data);
    //                 this.setState({activeDeals: deals});
    //                 console.log("Received fresh deals: " + deals);
    //             }}
    //              onclose={(event) => {
    //                 console.log("Disconnected from: " + ACTIVE_DEALS_SUBSCRIPTION_URL,
    //                     event.reason);
    //             }}
    //             ref={ (client) => { this.clientRef = client }} />
    // }

    render() {
        // const activeDeals = this.memoization(this.props.latestDeals);
        console.log("DEBUG: newest activeDeals of ActiveDealsListing are:" + this.props.latestDeals);

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
                                    this.props.latestDeals().map (
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

export default ActiveDealsListing;