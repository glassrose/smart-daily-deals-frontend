import React, { Component } from 'react';
import SockJS from 'sockjs-client';
// import SockJS from 'react-stomp';
import Stomp from 'stompjs'
import ActiveDeals from './ActiveDeals';

class App extends Component {
    constructor(props) {
        super(props);
        let topics = ['/topic/active-deals'];
        const sock = new SockJS("http://localhost:8080/deals-generator", topics);
        const stompClient = Stomp.over(sock);

        stompClient.onopen = () => {
            console.log('connection open');
            stompClient.subscribe('/topic/active-deals', e => {
                console.log('message received: ' + e);
                this.setState({messages: e})
            });
        };

        // stompClient.onmessage = e => {
        //     console.log('message received: ' + e);
        //     this.setState({messages: e});
        // }

        stompClient.onclose = () => {
            console.log('connection closed');
        }



        this.state = {
            actions: stompClient,
            messages: []
        }
    }
    
    render() {
        return (
            <div>
                <ActiveDeals />
            </div>
        );
    }
}

export default App;