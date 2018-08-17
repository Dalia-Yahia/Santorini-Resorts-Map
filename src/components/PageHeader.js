import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        return (
            <header className='App-header' tabIndex='0'>
                <nav className='hamburgerMenu-navbar'>
                    <button tabIndex='0' className='menu-icon' onClick={this.props.openAsideList}  aria-label='open navigation menu button'>
                    </button>
                </nav>
                <div className='header-right-section'>
                    <img src="http://icons.iconarchive.com/icons/mayosoft/no-patriot/48/Ellas-Greece-icon.png" alt="Greece flag used as the application logo" className="App-logo" />
                    <h1 className="App-title">Visit Santorini Greece</h1>
                    <a  className='foursquare' href="https://developer.foursquare.com/" aria-label="Link to FourSquare API developer site">
                        <img src="http://icons.iconarchive.com/icons/designbolts/vector-foursquare/32/Foursquare-5-icon.png" role="link" alt=" a logo to FourSquare API developer site" />
                    </a> 
                </div>
            </header>
        );

    }
}

export default PageHeader