import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongsQuery from './../queries/fetchSongs';
import deleteSongMutation from './../mutations/deleteSong';

const deleteIconStyles = {
    cursor: 'pointer'
};

class SongList extends React.Component {

    deleteSong(songId) {
        this.props.mutate({
            variables: {
                id: songId
            }
        }).then(() => this.props.data.refetch());
    }

    renderSongs() {
        console.log(this.props.data.songs, 'songs');
        const songs = this.props.data.songs || [];

        return songs.map(song => {
            return (
                <li className='collection-item' key={song.id}>
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                    <i 
                        className='material-icons right'
                        style={deleteIconStyles}
                        onClick={() => this.deleteSong(song.id)}
                    >
                        delete
                    </i>
                </li>)
        });
    };

    render() {
        const { data } = this.props;

        const { songs } = data;
        return (
            <div>
                <ul className='collection'>
                    {this.renderSongs()}
                </ul>
                <Link 
                    to='/songs/new'
                    className='btn-floating btn-large red right'>
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        )
    }
}

export default graphql(deleteSongMutation)(
    graphql(fetchSongsQuery)(SongList)
);