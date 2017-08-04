import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';

class CollaPanel extends Component {
    state = {
        open: false
    };

    render() {
        const {word} = this.props;
        return (
            <div>
                <Button
                    id="word-button"
                    onClick={ ()=> this.setState({ open: !this.state.open })}
                >
                    {word.word}
                </Button>
                <Panel collapsible expanded={this.state.open}>
                    <h1>{word.word}</h1>
                    <p><strong>Translation: </strong>{word.trans}</p>
                    <p><strong>Language: </strong>{word.lang}</p>
                    <p><strong>Comments: </strong>{word.comments}</p>
                </Panel>
            </div>
        );
    }
}

export default CollaPanel;