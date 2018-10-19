import React from 'react';

class Titles extends React.Component {
    render() 
    { 
        return (  
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <h3 className="title-container__subtitle">Find Temperature,humidity,conditions and more...</h3>
                <h3 className="title-container__subtitle">by Ishan Mehta</h3>
            </div>
        );
    }
}
export default Titles;