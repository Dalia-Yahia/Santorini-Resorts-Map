import React, { Component } from 'react';
import './App.css';
import SearchPlacesList from './components/SearchPlacesList';
import PageHeader from './components/PageHeader';
import SantoriniMap from './components/SantoriniMap';
import PageFooter from './components/PageFooter';
import superagent from 'superagent';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        resorts: [],
        isOpen: false,
        selectedPlace: '',
        searchPlaces: '',
      }
  };

  componentDidMount() {
      console.log('componentDidMount');
      let initialVenues = [];
      const url ='https://api.foursquare.com/v2/venues/search?ll=36.393156,25.461509&intent=browse&limit=13&radius=10000&query=resort&client_id=AINSM3XKK2EMABXRMOJSDII5PTNGNCX0PBGYWW5H31YVD5IC&client_secret=XEZCU3Y4MTOISEZW41EPU53VFYW1ZJ2C3EXJWK43LVAMWYNU&v=20180803';
      superagent
      .get(url)
      .query(null)
      .set('Accept', 'text/json')
      .end((error, response) => {
          if (error) throw error;
          initialVenues = response.body.response.venues
          console.log(JSON.stringify(initialVenues));

          this.setState({
              resorts: initialVenues,
          });
      });
  }

  searchBy = (searchWord) => {
    this.setState({ searchPlaces: searchWord })
  }

  openAsideList() {
    document.getElementById('asideSearchList').style.width = "300px";
    document.getElementById('asideSearchList').focus();
  }

  closeAsideList() {
    document.getElementById("asideSearchList").style.width = "0";
    document.getElementById('map-section').focus();

  }


  onToggleOpen = (id) => {
    this.setState({
      selectedPlace: id,
      isOpen: true
    })
  }


  render() {
    let resortsNames;
        if(this.state.searchPlaces){
            const matching = new RegExp(escapeRegExp(this.state.searchPlaces), 'i')
            resortsNames = this.state.resorts.filter(resort => matching.test(resort.name))
        } else {
          resortsNames = this.state.resorts
        }
        resortsNames.sort(sortBy('name'))

    return (
      <div className="App">
        <SearchPlacesList
          resortsNames={resortsNames}
          onToggleOpen={this.onToggleOpen}
          closeAsideList={this.closeAsideList}
          venue={this.state.resorts}
          searchedPlaces={this.state.searchedPlaces}
          searchBy={this.searchBy}
        />
        <main className='main-page-content'>
          
          <div className='right-side-section' id='right-section'>
            <PageHeader openAsideList={this.openAsideList}/>

            <section id='map-section' tabIndex='0'>
              <SantoriniMap
                places={resortsNames}
                onToggleOpen={this.onToggleOpen}
                selectedPlace={this.state.selectedPlace}
                isOpen={this.state.isOpen}
              />

              
            </section>
            <PageFooter/>
          </div>
        </main>

      </div>
    );
  }
}

export default App;