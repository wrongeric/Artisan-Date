import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './ourapp.css';

export default class OurApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="grey lighten-4 our-app-container">
                <div className="row">
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <div className="card white">
                            <div className="card-content">
                                <h3 className='card-title center-align app-card-title'>Welcome to Artisan Date</h3>
                                <div className="row">
                                    <div className="col s12 center-align">
                                        <h4 className="about-application-title">About Our Application</h4>
                                        <h5 className="about-application-text">Our application is a simplified and condensed date itinerary creator. Through the use of multiple web technologies, we provide a plethora of local options for a full night of entertainment.</h5>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="col s12 center-align">
                                        <h4>Technologies Implemented</h4>
                                        <div className="row">
                                            <div className="col s6">
                                                <h5>Javascript</h5>
                                                <h5>React.js</h5>
                                                <h5>Redux.js</h5>
                                                <h5>Materialize</h5>
                                                <h5>NPM</h5>
                                                <h5>Node.js</h5>
                                            </div>
                                            <div className="col s6">
                                                <h5>Express.js</h5>
                                                <h5>Passport.js</h5>
                                                <h5>MySQL</h5>
                                                <h5>Yelp API</h5>
                                                <h5>Google API</h5>
                                                <h5>Amazon Web Services</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col s12 center-align">
                                        <Link to='/ourteam-page' className='btn amber darken-3'>Our Team</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}