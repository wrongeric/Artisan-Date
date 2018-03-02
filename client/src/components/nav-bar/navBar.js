import React, {Component} from "react";
import{Link} from 'react-router-dom';
import "./navBar.css"

class NavBar extends Component {
    constructor (props){
        super(props);

        this.state = {
            navStyle: {
                transform: "translateX(100%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                right: "0px",
                touchAction: "pan-y"
            }
        };
        this.slideOutMenu = this.slideOutMenu.bind(this);
        this.returnMenu = this.returnMenu.bind(this);
        this.backButton = this.backButton.bind(this);
    }
    slideOutMenu(){
        const shadowBox = {...this.state.dragStyle};
        delete shadowBox.right;
        this.setState({
            navStyle: {
                transform: "translateX(0%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                left: "0px",
                width: "50%",
                transitionDuration: "0.25s"
            }
        });
    }

    returnMenu(){
        const shadowBox = {...this.state.dragStyle};
        delete shadowBox.left;
        delete shadowBox.width;
        this.setState({
            navStyle: {
                transform: "translateX(100%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                right: "0px"
            }
        });
    }
    backButton(){
        switch(this.props.location.pathname){
            case "/":
                return "";
            default:
                return (
                    <a className="arrow" style={{cursor: 'pointer'}} onClick={() => { this.props.history.goBack();}}><i className = 'material-icons'>arrow_back</i></a>
                );
        }
    }
    render() {
        return (
            <nav>
                <div className="amber nav-wrapper">
                    {this.backButton()}
                    <a href="#!" className="brand-logo">Artisan Date</a>
                    <a href="#" className="right button-collapse" onClick={this.slideOutMenu}>
                        <i className="material-icons amber-text text-darken-3">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        {/* <li><Link to='/location-page'>Get Started</Link></li> */}
                        <li><Link to='/signup-page'>Sign Up</Link></li>
                        <li><Link to='/signin-page'>Sign In</Link></li>
                        <li><Link to='/ourteam-page'>Our Team</Link></li>
                        {/* <li><Link to='/logout'>Log Out</Link></li> */}
                    </ul>
                    <div>
                        <ul className="side-nav right-aligned" style={this.state.navStyle}>
                            <li><Link to='/' onClick={this.returnMenu}>Home</Link></li>
                            {/* <li><Link to='/location-page'>Get Started</Link></li> */}
                            <li><Link to='/signup-page' onClick={this.returnMenu}>Sign Up</Link></li>
                            <li><Link to='/signin-page' onClick={this.returnMenu}>Sign In</Link></li>
                            <li><Link to='/ourapp-page' onClick={this.returnMenu}>Our App</Link></li>
                            <li><Link to='/ourteam-page' onClick={this.returnMenu}>Our Team</Link></li>
                            {/* <li><Link to='/logout'>Log Out</Link></li> */}
                        </ul>
                        <div onClick={this.returnMenu} className="drag-target" style={this.state.dragStyle}/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;