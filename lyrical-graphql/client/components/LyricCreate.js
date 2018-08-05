
import React, { Component } from 'react';
import createLyricMutation from './../mutations/createLyric';

class LyricCreate extends Component {

    constructor() {
        super();

        this.state = {
            content: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();

        this.props.onSubmit(this.state.content)
            .then(() => {
                this.setState({
                    content: ''
                });
            });
    }

    onChange(ev) {
        this.setState({
            content: ev.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Add a Lyric
                </label>
                <input 
                    value={this.state.content}
                    onChange={this.onChange}
                />
            </form>
        );
    }
}

export default LyricCreate;
