import React from 'react';
import SockJsClient from 'react-stomp';
import ActiveDealsListing from './ActiveDealsListing';
import ActiveDeals from './ActiveDeals';
import useLatestDeals from './useLatestDeals'


class ReactSockJsClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        // latestDeals: []
    }
  }

//   sendMessage = (msg) => {
//     this.clientRef.sendMessage('/topic/active-deals', msg);
//   }

  render() {
    // let latestDeals = [];
    // let sockJsClient = new SockJsClient({url:'http://localhost:8080/deals-generator', topics:['/topic/active-deals']});
    // sockJsClient.onMessage = (msg) => { 
    //     console.log(msg);
    //     // this.setState({});
    //     latestDeals = msg;
    //     // console.log(this.latestDeals);
    // };
      
    return (
      <div>
        <SockJsClient url='http://localhost:8080/deals-generator' topics={['/topic/active-deals']}
            onMessage={useLatestDeals}
            ref={ (client) => { this.clientRef = client }} />
                {/* <h1>hello</h1> */}

            {/* <ActiveDealsListing latestDeals={()=> useLatestDeals()}/> */}
            <ActiveDeals />
            
        {/* </SockJsClient> */}
      </div>
    );
  }
}

export default ReactSockJsClient;