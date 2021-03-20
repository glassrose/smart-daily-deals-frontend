import React, { Component } from 'react';

class defaultURLSubsciptionSockJSClient extends Component {
    constructor(props) {
        super(props);
        const sock = new SockJS('http://localhost:8080/deals-generator');
        sock.onopen = function() {
            console.log('open');
            //  sock.send('test');
        };

        sock.onmessage = function(e) {
            console.log('message', e.data);
            //  sock.close();
        };

        sock.onclose = function() {
            console.log('close');
        };

        this.state = {
            socket: sock,
            data: []
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default defaultURLSubsciptionSockJSClient;