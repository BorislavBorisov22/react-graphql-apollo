
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from './../mutations/likeLyric';
import fetchSongDetailsQuery from './../queries/fetchSongDetails';

const likeStyles = {
    cursor: 'pointer'
};

class LyricList extends Component {

    constructor() {
        super();

        this.onLikeLyric = this.onLikeLyric.bind(this);
    }

    onLikeLyric(ev, id, likes) {
        ev.preventDefault();

        this.props.mutate({
            variables: {
                id
            },
            optimisticReponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            },
            refetchQueries: [{
                query: fetchSongDetailsQuery,
                variables: {
                    id: this.props.songId
                }
            }]
        });
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li className='collection-item' key={id}>
                    {content}
                    <i className='right'>{likes}</i>
                    &nbsp; 
                    <i 
                        style={likeStyles}
                        className='material-icons right'
                        onClick={(ev) => this.onLikeLyric(ev, id, likes)}
                    >
                        thumb_up
                    </i>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='collection'>
                {this.renderLyrics(this.props.lyrics || [])}
            </ul>
        );
    }
}

export default graphql(likeLyricMutation)(LyricList);