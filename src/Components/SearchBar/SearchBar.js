import React from "react";
import './SearchBar.css';
//import {SearchBar} from '../SearchBar/SearchBar';
//import {SearchResults} from '../SearchResults/SearchResults';
//import {Playlist} from '../Playlist/Playlist';
//import {TrackList} from '../TrackList/TrackList';
//import {Track} from '../Track/Track';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value})
    }

    render() {
        return(
            <div className="SearchBar">
              <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
              <button onClick={this.search} className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;