import React from 'react'
import notfound from '../../../images/pagenotfound.png'

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <div className="banner-top" />
            
                <h1>Sorry, page not found!</h1>
                <p>Oops, the page does not exist. Try going back or using the navigation menu</p>
                
                <img className="notfound" src={notfound} alt="404"/>
                <section id="hero-footer"/>
            </div>
        )
    }
}
