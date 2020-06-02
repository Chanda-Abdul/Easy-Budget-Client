import React from 'react'
import savings from "../../images/savings.png"

export default function Visuals(props) {
    return (
        <div>
             <div>
            <div className="visual-box">
            <img src={savings} width="400px" />
            <br/>Insert usless graph about your budget here
            </div>
            <div className="visual-box">
            <img src="https://blog.visual.ly/wp-content/uploads/2013/04/coxcomb.png" width="400px" />
            <br/>Insert usless graph about your budget here
            </div><br/>
            <div className="visual-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhl02ShciZf7xdsZIOuQ9yOEuGIN4wmlBQ4pl9jGplP3kTJ6V&s" width="400px" />
            <br/>Insert usless graph about your budget here
            </div>
        </div>
        </div>
    )
}