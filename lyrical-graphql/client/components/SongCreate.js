import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Link, hashHistory } from 'react-router';
import fetchSongsQuery from './../queries/fetchSongs';

class SongCreate extends Component {

    constructor() {
        super();

        this.state = {
            title: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    onSubmit(ev) {
        ev.preventDefault();

        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query: fetchSongsQuery,
            }]
        }).then(() => {
            hashHistory.push('/')
        });
    }

    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title</label>
                    <input
                        autoComplete='off'
                        name='title'
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            title,
            id
        }
    }
`;

export default graphql(mutation)(SongCreate);
