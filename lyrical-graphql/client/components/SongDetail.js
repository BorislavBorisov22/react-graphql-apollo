import React from 'react';
import { graphql } from 'react-apollo';
import fetchSongDetailsQuery from './../queries/fetchSongDetails';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import createLyricMutation from './../mutations/createLyric';
import LyricList from './LyricList';

class SongDetail extends React.Component {

    constructor() {
        super();

        this.onLyricSubmit = this.onLyricSubmit.bind(this);
    }

    onLyricSubmit(lyricContent) {
        const variables = {
            songId: this.props.params.id,
            content: lyricContent
        };

        return this.props.mutate({
            variables
        }).then(() => this.props.data.refetch());
    }

    render() {
        const { song } = this.props.data;

        if (!song) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to='/'>Back</Link>
               <h3>{song.title}</h3>

                <LyricList 
                    lyrics={song.lyrics}
                    songId={this.props.params.id}
                />

               <LyricCreate onSubmit={this.onLyricSubmit} />
            </div>
        );
    }
}

export default graphql(fetchSongDetailsQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.params.id
            }
        };
    }
})(graphql(createLyricMutation)(SongDetail));
