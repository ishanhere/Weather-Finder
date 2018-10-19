import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./components/Weather";
const API_KEY = "36b90cf5a1308cae8973887d4d1797b0";

class App extends React.Component {
    state = {
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
    }
    
    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.txtCity.value;
        const country = e.target.elements.txtCountry.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
        console.log(data.name);
        if(city===data.name && country)
        {
            console.log(data);
            this.setState({
                temperature: data.main.temp-273.15,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: "" 
            });
        }
        else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter city properly." 
            });
        }
    }
    
    render() { 
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles></Titles>
                                </div>    
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}></Form>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>    
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
          );
    }
};
export default App;