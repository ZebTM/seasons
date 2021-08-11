import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props); // Have to do this everytime
        // This is the only time we do a direct assignment
        this.state = { lat: null, errorMessage: '' };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Called setState!!!! 
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState( { errorMessage: err.message })
            }
        );
    }
    
    
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        } 

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

