import React from 'react';
class Form extends React.Component {
    state = {  }
    render() { 
        return ( 
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="txtCity" placeholder="Enter City.."></input>
                <input type="text" name="txtCountry" placeholder="Enter Country.."></input>
                <button>Get Weather</button>
            </form>
         );
    }
}
 
export default Form;