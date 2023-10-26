import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
	const [searchResults, setSearchResult] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');
	const [playlistTracks, setPlaylistTracks] = useState([]);

	return (
		<>
			<h1>
				Ja<span className='highlight'>mmm</span>ing
			</h1>
			<div className='App'>
				<SearchBar />
				<div>
					<SearchResults />
					<Playlist />
				</div>
			</div>
		</>
	);
};

export default App;
