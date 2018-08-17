import React from 'react';

class SearchPlacesList extends React.Component {
    render() {
        return (
            <aside id='asideSearchList' tabIndex='0'>
                <nav className='close-nav'>
                    <button aria-label='close list filter' className='closebtn' onClick={this.props.closeAsideList}>
                        x
                    </button>
                </nav>
                <div className='search-filter'>
                    <input 
                    type='text'
                    placeholder='Search for Resorts'
                    aria-label = 'Enter a resort name to get more info about'
                    onChange={(event) => this.props.searchBy(event.target.value)}
                    />
                </div>
                <div className='list-Container' >
                    <ul className='places-list'>
                            
                        {this.props.resortsNames.map(places =>
                            <li
                            key={places.id}
                            tabIndex='0'>
                                <a onClick={() => this.props.onToggleOpen(places.id)}>
                                    {places.name}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>

            </aside>
        );
    }
}

export default SearchPlacesList