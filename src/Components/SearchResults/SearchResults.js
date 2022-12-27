import React from "react";
import './SearchResults.css';
//import SearchBar from '../SearchBar/SearchBar';
//import {SearchResults} from '../SearchResults/SearchResults';
//import {Playlist} from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';
//import {Track} from '../Track/Track';

class SearchResults extends React.Component {
    render() {
        return(
            <div className="SearchResults">
              <h2>Results</h2>
              <TrackList isRemoval={false} onAdd={this.props.onAdd} tracks={this.props.searchResults} />
            </div>
        )
    }
}

export default SearchResults;
