import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    async componentWillMount() {
        const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({
            albums: res.data
        });
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
